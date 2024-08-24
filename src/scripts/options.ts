document.addEventListener('DOMContentLoaded', async function (): Promise<void> {
  const directWatchPageCheckbox: HTMLInputElement = document.getElementById('directWatchPageLink') as HTMLInputElement;
  const episodeNumberCheckbox: HTMLInputElement = document.getElementById('useEpisodeNumber') as HTMLInputElement;

  const data: { directWatchPageLink?: boolean; useEpisodeNumber?: boolean } = await chrome.storage.sync.get(['directWatchPageLink', 'useEpisodeNumber']);
  directWatchPageCheckbox.checked = Boolean(data.directWatchPageLink);
  episodeNumberCheckbox.checked = Boolean(data.useEpisodeNumber);

  directWatchPageCheckbox.addEventListener('change', function (): void {
    chrome.storage.sync.set({ directWatchPageLink: directWatchPageCheckbox.checked });
  });
  episodeNumberCheckbox.addEventListener('change', function (): void {
    chrome.storage.sync.set({ useEpisodeNumber: episodeNumberCheckbox.checked });
  });
});
