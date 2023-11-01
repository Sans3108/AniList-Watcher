document.addEventListener('DOMContentLoaded', async function (): Promise<void> {
  const checkbox: HTMLInputElement = document.getElementById('directWatchPageLink') as HTMLInputElement;

  const data: { directWatchPageLink?: boolean } = await chrome.storage.sync.get('directWatchPageLink');
  checkbox.checked = Boolean(data.directWatchPageLink);

  checkbox.addEventListener('change', function (): void {
    chrome.storage.sync.set({ directWatchPageLink: checkbox.checked });
  });
});
