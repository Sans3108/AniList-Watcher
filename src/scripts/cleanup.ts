(async () => {
  console.log(`Cleaning up ${document.URL}`);

  const existingAwButton = document.getElementById('aw_button');
  const existingMfButton = document.getElementById('mf_button');

  if (existingAwButton) {
    console.log('Removing old AniWave button...');
    existingAwButton.remove();
  } else console.log('No old AniWave button to remove.');

  if (existingMfButton) {
    console.log('Removing old MangaFire button...');
    existingMfButton.remove();
  } else console.log('No old MangaFire button to remove.');
})();
