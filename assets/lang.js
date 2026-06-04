// Shared EN/ES language toggle for JF Aluminum Doors landing pages.
// Any element with data-en / data-es gets its innerHTML swapped.
// Buttons with [data-lang-set="en"|"es"] switch + persist the choice.
(function () {
  function apply(lang) {
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-en]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-lang-set') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-set') === lang);
    });
    try { localStorage.setItem('jf-lang', lang); } catch (e) {}
  }
  function init() {
    var saved = 'en';
    try { saved = localStorage.getItem('jf-lang') || 'en'; } catch (e) {}
    apply(saved);
    document.querySelectorAll('[data-lang-set]').forEach(function (btn) {
      btn.addEventListener('click', function () { apply(btn.getAttribute('data-lang-set')); });
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }
})();
