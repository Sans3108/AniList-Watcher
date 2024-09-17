chrome.runtime.openOptionsPage();

document.addEventListener('DOMContentLoaded', () => {
  const assets = ['kiana_shake.gif', 'daijobu.png', 'grass_doge.png', 'laffey_shake.gif', 'icon256.png', 'nod.gif'];

  const img = document.createElement('img');
  img.src = `../assets/${assets[Math.floor(Math.random() * assets.length)]}`;
  img.width = 64;

  document.body.insertBefore(img, document.body.firstChild);
});
