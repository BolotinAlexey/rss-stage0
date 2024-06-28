const KEY = "OBResumeTheme";

(function persistTheme() {
  const themeBtn = document.querySelector(".theme-btn__input")
  if (!themeBtn) return;
  const lsTheme = localStorage.getItem(KEY);
  if (lsTheme) themeBtn.checked = JSON.parse(lsTheme);

  themeBtn.addEventListener('change', () => localStorage.setItem(KEY, themeBtn.checked));
})();
