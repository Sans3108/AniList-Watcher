(async () => {
  console.log(`Cleaning up ${document.URL}`);

  const existingAwButton = document.getElementById('aw_button');

  if (existingAwButton) {
    console.log('Removing old button...');
    existingAwButton.remove();
  } else console.log('No old button to remove.');
})();
