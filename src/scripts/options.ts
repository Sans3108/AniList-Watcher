function getProviders(): Promise<BaseProvider[]> {
  return new Promise(resolve => {
    chrome.runtime.sendMessage({ action: 'getProviders' }, (response: BaseProvider[]) => {
      resolve(response);
    });
  });
}

document.addEventListener('DOMContentLoaded', async function (): Promise<void> {
  const providers = await getProviders();

  console.log(`AW: Available providers: ${providers.map(p => p.id).join(', ')}`);

  const animeProviders = providers.filter(p => p.type === 'anime');
  const mangaProviders = providers.filter(p => p.type === 'manga');

  const defaultAnimeProvider = providers.find(p => p.type === 'anime')!;
  const defaultMangaProvider = providers.find(p => p.type === 'manga')!;

  const preferences = (await chrome.storage.sync.get(['directWatchPageLink', 'streamingSiteId', 'readingSiteId', 'langOrder', 'withGenres'])) as Required<UserPreferences>;

  if (!animeProviders.map(p => p.id).includes(preferences.streamingSiteId)) {
    chrome.storage.sync.set({ streamingSiteId: defaultAnimeProvider.id });
    preferences.streamingSiteId = defaultAnimeProvider.id;
  }

  if (!mangaProviders.map(p => p.id).includes(preferences.readingSiteId)) {
    chrome.storage.sync.set({ readingSiteId: defaultMangaProvider.id });
    preferences.readingSiteId = defaultMangaProvider.id;
  }

  const checkbox: HTMLInputElement = document.getElementById('directWatchPageLink') as HTMLInputElement;
  checkbox.checked = Boolean(preferences.directWatchPageLink);

  checkbox.addEventListener('change', function (): void {
    chrome.storage.sync.set({ directWatchPageLink: checkbox.checked });
  });

  const genreCheckbox: HTMLInputElement = document.getElementById('withGenres') as HTMLInputElement;
  genreCheckbox.checked = Boolean(preferences.withGenres);

  genreCheckbox.addEventListener('change', function (): void {
    chrome.storage.sync.set({ withGenres: genreCheckbox.checked });
  });

  const streamingSelect: HTMLSelectElement = document.getElementById('streamingSiteId') as HTMLSelectElement;

  for (const provider of animeProviders) {
    const option = document.createElement('option');
    option.value = provider.id;
    option.textContent = provider.displayName;
    streamingSelect.appendChild(option);
  }

  streamingSelect.value = preferences.streamingSiteId;

  streamingSelect.addEventListener('change', event => {
    const selectedValue = (event.target as HTMLSelectElement).value;

    chrome.storage.sync.set({ streamingSiteId: selectedValue });
  });

  const readingSelect: HTMLSelectElement = document.getElementById('readingSiteId') as HTMLSelectElement;

  for (const provider of mangaProviders) {
    const option = document.createElement('option');
    option.value = provider.id;
    option.textContent = provider.displayName;
    readingSelect.appendChild(option);
  }

  readingSelect.value = preferences.readingSiteId;

  readingSelect.addEventListener('change', event => {
    const selectedValue = (event.target as HTMLSelectElement).value;

    chrome.storage.sync.set({ readingSiteId: selectedValue });
  });

  const langSelect: HTMLSelectElement = document.getElementById('langOrder') as HTMLSelectElement;
  langSelect.value = preferences.langOrder;

  langSelect.addEventListener('change', event => {
    const selectedValue = (event.target as HTMLSelectElement).value;

    chrome.storage.sync.set({ langOrder: selectedValue });
  });

  const button: HTMLButtonElement = document.getElementById('resetOptions') as HTMLButtonElement;

  button.addEventListener('click', function (): void {
    chrome.storage.sync.set({
      directWatchPageLink: true,
      streamingSiteId: defaultAnimeProvider.id,
      readingSiteId: defaultMangaProvider.id,
      langOrder: 'ren',
      withGenres: true
    });

    window.location.reload();
  });

  // const providerInfo = document.getElementById('providerInfo')!;

  // for (const provider of providers) {
  //   const div = document.createElement('div');
  //   div.classList.add('option-item');

  //   const h2 = document.createElement('h2');
  //   h2.innerText = provider.displayName;
  //   div.append(h2);

  //   const p = document.createElement('p');
  //   p.classList.add('text-left');
  //   p.innerHTML = provider.info;
  //   div.append(p);

  //   providerInfo.append(div);
  // }

  // Maybe some other time
  // const installed = new URL(window.location.href).searchParams.has('installed');

  // if (installed) {
  //   const item = document.createElement('div');
  //   item.classList.add('option-item');
  //   item.classList.add('highlight');

  //   const title = document.createElement('h1');
  //   title.textContent = 'AniList Watcher V8 was added!';
  //   item.appendChild(title);

  //   const text = document.createElement('p');
  //   text.innerHTML = `I've opened the settings page so you can adjust things to your liking. The defaults might not fit everyone's needs, so feel free to customize them!`;
  //   item.appendChild(text);

  //   const container = document.getElementById('container')!;
  //   container.prepend(item);

  //   const newUrl = new URL(window.location.href);
  //   newUrl.searchParams.delete('installed');

  //   window.history.replaceState({}, document.title, newUrl);
  // }
});
