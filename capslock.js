(function () {
  // No global toast; only toggle per-field hints.

  function isTextInput(el) {
    if (!el) return false;
    const tag = el.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return true;
    if (el.isContentEditable) return true;
    return false;
  }

  function handleKeyEvent(e) {
    const caps = e.getModifierState && e.getModifierState('CapsLock');
    const active = document.activeElement;
    // toggle per-field hints (expects hint id pattern 'caps-hint-<inputId>')
    try {
      const hints = document.querySelectorAll('.caps-hint');
      hints.forEach((hint) => {
        const inputId = hint.id.replace('caps-hint-', '');
        const input = document.getElementById(inputId);
        if (input && active === input && caps) {
          hint.classList.add('show');
        } else {
          hint.classList.remove('show');
        }
      });
    } catch (err) {
      // ignore
    }
  }

  // Also hide on focusout
  document.addEventListener('focusout', (e) => {
    // small timeout to allow focus to move to another input
    setTimeout(() => {
      const active = document.activeElement;
      if (!isTextInput(active)) {
        const hints = document.querySelectorAll('.caps-hint');
        hints.forEach(h => h.classList.remove('show'));
      }
    }, 10);
  }, true);

  document.addEventListener('keydown', handleKeyEvent, true);
  document.addEventListener('keyup', handleKeyEvent, true);

  // For some browsers, clicking into a focused input won't fire key event immediately;
  // check state when clicking (mousedown) and when focusing
  document.addEventListener('mousedown', (e) => {
    setTimeout(() => {
      // hide any per-field hints if focus moved away
      const active = document.activeElement;
      if (!isTextInput(active)) {
        const hints = document.querySelectorAll('.caps-hint');
        hints.forEach(h => h.classList.remove('show'));
      }
    }, 10);
  });

  document.addEventListener('focusin', (e) => {
    // Keep hidden until key event informs state
    const active = document.activeElement;
    if (!isTextInput(active)) {
      const hints = document.querySelectorAll('.caps-hint');
      hints.forEach(h => h.classList.remove('show'));
    }
  });
})();