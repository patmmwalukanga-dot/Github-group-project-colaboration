const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Universal Middleware Layers (allows communication with frontend forms)
app.use(cors());
app.use(express.json());

// In-Memory Backup array in case internet drops out during a school presentation
let memoryBackupMatrix = [];

// Your custom verified connection string link
const uri = "mongodb+srv://patmmwalukanga_db_user:Patrick12345@cluster0.qlf2spn.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri);
let db;

async function initDatabaseEngine() {
    try {
        await client.connect();
        // Target your verified database schema
        db = client.db("PstrickAdmon");
        console.log("⚡ [DATABASE ONLINE]: Connected successfully to MongoDB Atlas Cluster.");
    } catch (error) {
        console.error("❌ [DATABASE FAULT]: Remote link refused. Falling back to local standby mode:", error.message);
    }
}
initDatabaseEngine();

// --- API ROUTES (Your Backend Code Logic) ---

// 1. READ ALL RECORDS & GENERATE SUMMARY STATS (For tracking dashboard)
app.get('/api/students', async (req, res) => {
    try {
        let studentsList = [];
        if (db) {
            studentsList = await db.collection("Students").find({}).toArray();
        } else {
            studentsList = memoryBackupMatrix;
        }

        // Run data calculations dynamically on the backend
        const totalStudents = studentsList.length;
        const avgAttendance = totalStudents > 0 
            ? Math.round(studentsList.reduce((acc, s) => acc + Number(s.attendance || 0), 0) / totalStudents)
            : 0;
        
        const passingCount = studentsList.filter(s => ['A', 'B', 'C'].includes(s.grade.toUpperCase())).length;
        const passingRate = totalStudents > 0 ? Math.round((passingCount / totalStudents) * 100) : 0;

        res.json({
            success: true,
            telemetry: { totalStudents, avgAttendance, passingRate },
            records: studentsList
        });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 1b. REPORTS & ANALYTICS AGGREGATION (For Frontend Data Visualization Charts)
app.get('/api/students/analytics', async (req, res) => {
    try {
        let studentsList = [];
        if (db) {
            studentsList = await db.collection("Students").find({}).toArray();
        } else {
            studentsList = memoryBackupMatrix;
        }

        // Initialize empty containers for grade distribution mapping
        const gradeDistribution = { A: 0, B: 0, C: 0, D: 0, F: 0 };
        let lowAttendanceCount = 0;

        // Process data records for analytical reports
        studentsList.forEach(student => {
            // Map Grade Distribution
            const grade = (student.grade || 'A').toUpperCase().trim();
            if (gradeDistribution.hasOwnProperty(grade)) {
                gradeDistribution[grade]++;
            } else {
                gradeDistribution[grade] = (gradeDistribution[grade] || 0) + 1;
            }

            // Track Attendance Snapshots (Flag students with under 75% attendance)
            if (Number(student.attendance) < 75) {
                lowAttendanceCount++;
            }
        });

        res.json({
            success: true,
            analytics: {
                gradeDistribution,
                snapshots: {
                    atRiskStudents: lowAttendanceCount,
                    excellentAttendance: studentsList.filter(s => Number(s.attendance) >= 90).length
                }
            }
        });
    } catch (err) {
        console.error("💥 ANALYTICS ROUTE FAULT:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 2. CREATE NEW STUDENT (Data Recording Injection)
app.post('/api/students', async (req, res) => {
    try {
        console.log("📥 RECEIVED FORM DATA:", req.body);

        const { id, name, email, grade, attendance } = req.body;
        
        if (!name || !email) {
            return res.status(400).json({ success: false, error: "Validation Fault: Name and Email are mandatory fields." });
        }

        const newStudentNode = {
            id: id || `s-${Date.now()}`,
            name,
            email,
            grade: grade || 'A',
            attendance: Number(attendance) || 100
        };

        if (db) {
            const result = await db.collection("Students").insertOne(newStudentNode);
            console.log("💾 ATLAS WRITE RESULT:", result);
        } else {
            memoryBackupMatrix.push(newStudentNode);
        }

        res.status(201).json({ success: true, message: "Student record stored.", data: newStudentNode });
    } catch (err) {
        console.error("💥 POST ROUTE CRASHED:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 3. EDIT EXISTING ENTRY (Document Mutation Update)
app.put('/api/students/:id', async (req, res) => {
    try {
        const { name, email, grade, attendance } = req.body;
        const studentId = req.params.id;

        if (db) {
            await db.collection("Students").updateOne(
                { id: studentId },
                { $set: { name, email, grade, attendance: Number(attendance) } }
            );
        } else {
            memoryBackupMatrix = memoryBackupMatrix.map(s => s.id === studentId ? { ...s, name, email, grade, attendance } : s);
        }

        res.json({ success: true, message: `Updated student data for ID: ${studentId}` });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// 4. PURGE STUDENT (Record Erasure Delete)
app.delete('/api/students/:id', async (req, res) => {
    try {
        const studentId = req.params.id;

        if (db) {
            await db.collection("Students").deleteOne({ id: studentId });
        } else {
            memoryBackupMatrix = memoryBackupMatrix.filter(s => s.id !== studentId);
        }

        res.json({ success: true, message: `Purged entry reference for ID: ${studentId}` });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

app.listen(PORT, () => console.log(`🚀 [SERVER ONLINE]: Backend streaming live on port ${PORT}`));