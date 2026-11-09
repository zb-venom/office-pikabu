// Хэллоуин на экране загрузки — до того, как скачается бандл.
//
// Отдельным файлом, а не строкой в index.html: встроенный скрипт — нарушение
// CSP на площадках. Дата здесь по часам устройства; точную, от площадки, игра
// узнаёт позже и поправляет оформление сама (см. src/ui/boot-screen.ts).
// Окно то же, что в src/halloween.ts: 14 октября — 10 ноября по Москве.
(function () {
  var msk = new Date(Date.now() + 3 * 3600 * 1000);
  var month = msk.getUTCMonth();
  var day = msk.getUTCDate();
  var on = (month === 9 && day >= 14) || (month === 10 && day <= 10);
  // Дев-переключатель игры. У игрока ключа нет, а будь он — игра поправит.
  try {
    var dev = localStorage.getItem('dev.halloween');
    if (dev === '1') on = true;
    if (dev === '0') on = false;
  } catch (e) {
    // Хранилище закрыто — остаёмся на дате.
  }
  if (on) document.documentElement.classList.add('halloween');
})();
