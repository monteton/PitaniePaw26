// PWA Access Control
// Если сайт открыт не в режиме установленного приложения — редиректим на index.html,
// где показывается принудительный экран установки PWA.
(function () {
  var isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone === true;

  if (!isStandalone) {
    // Не установлено как PWA — идём на главную, которая покажет баннер установки
    var currentPage = window.location.pathname;
    // Защита от бесконечного цикла: index.html сам управляет баннером
    if (!currentPage.endsWith('index.html') && currentPage !== '/') {
      window.location.replace('index.html');
    }
  }
})();
