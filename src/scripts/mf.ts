(async () => {
  console.log(`Processing ${document.URL}`);

  //#region Helper functions
  function getElementByPath(path: string) {
    return document.querySelector(path);
  }
  //#endregion

  //#region Constants
  const awButtonId = 'mf_button';
  //#endregion

  const url = 'https://graphql.anilist.co';
  const query = `
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    season,
    seasonYear,
    format,
    genres,
    status
  }
}
`;

  type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';

  type Format = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';

  type Genre =
    | 'Action'
    | 'Adventure'
    | 'Comedy'
    | 'Drama'
    | 'Ecchi'
    | 'Fantasy'
    | 'Horror'
    | 'Mahou Shoujo'
    | 'Mecha'
    | 'Music'
    | 'Mystery'
    | 'Psychological'
    | 'Romance'
    | 'Sci-Fi'
    | 'Slice of Life'
    | 'Sports'
    | 'Supernatural'
    | 'Thriller';

  type Status = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';

  type Anime = {
    id: number;
    title: {
      romaji: string | null;
      english: string | null;
      native: string | null;
    };
    season: Season | null;
    seasonYear: number | null;
    format: Format | null;
    genres: Genre[] | null;
    status: Status | null;
  };

  const variables = { id: document.URL.split('/')[4] };

  const data = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query,
      variables
    })
  }).catch(error => {
    console.error(error);
    return null;
  });

  if (!data) return console.error(`API ERROR!`);

  const anime: Anime = (await data.json()).data.Media;

  // Get the title in order of preference

  const order = ['native', 'romaji', 'english'];
  const titles = [
    { lang: 'native', title: anime.title.native },
    { lang: 'romaji', title: anime.title.romaji },
    { lang: 'english', title: anime.title.english }
  ];

  titles.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

  const title = titles.find(t => t.title !== null)?.title || null;

  if (!title) throw new Error('Title was not found!');

  console.log(`Found title!`, title);

  // Construct the button

  console.log('Constructing button...');

  const awButton = document.createElement('a');

  awButton.id = awButtonId;

  awButton.setAttribute('data-v-5776f768', '');

  awButton.className = 'link';

  awButton.innerText = ' AniWave ';

  // Redirect
  const endpoint = new URL('https://aniwave.to/filter');

  endpoint.searchParams.set('keyword', title);
  endpoint.searchParams.set('sort', 'most_relevance');

  const year = anime.seasonYear;
  if (year) endpoint.searchParams.set('year', `${year}`);

  if (anime.status) {
    const valid = ['FINISHED', 'RELEASING', 'NOT_YET_RELEASED'].includes(anime.status);

    if (valid) {
      const status = anime.status === 'FINISHED' ? 'completed' : anime.status === 'NOT_YET_RELEASED' ? 'info' : 'releasing';

      endpoint.searchParams.append('status[]', status);
    }
  }

  if (anime.format) {
    const valid = ['movie', 'tv', 'ova', 'ona', 'special', 'music'].includes(anime.format.toLowerCase());

    if (valid) endpoint.searchParams.set('type', anime.format.toLowerCase());
  }

  if (anime.season) {
    endpoint.searchParams.set('season', anime.season.toLowerCase());
  }

  if (anime.genres) {
    const validGenres: { awId: number; name: Genre }[] = [
      { awId: 1, name: 'Action' },
      { awId: 2, name: 'Adventure' },
      { awId: 4, name: 'Comedy' },
      { awId: 7, name: 'Drama' },
      { awId: 8, name: 'Ecchi' },
      { awId: 9, name: 'Fantasy' },
      { awId: 14, name: 'Horror' },
      { awId: 3457321, name: 'Mahou Shoujo' },
      { awId: 19, name: 'Mecha' },
      { awId: 21, name: 'Music' },
      { awId: 22, name: 'Mystery' },
      { awId: 25, name: 'Psychological' },
      { awId: 26, name: 'Romance' },
      { awId: 29, name: 'Sci-Fi' },
      { awId: 35, name: 'Slice of Life' },
      { awId: 37, name: 'Sports' },
      { awId: 39, name: 'Supernatural' },
      { awId: 40, name: 'Thriller' }
    ];

    const animeGenres = validGenres.filter(genre => anime.genres!.includes(genre.name));

    animeGenres.forEach(genre => endpoint.searchParams.append('genre[]', `${genre.awId}`));
  }

  awButton.setAttribute('target', '_blank');

  // Get experimental option
  chrome.storage.sync.get('directWatchPageLink', (data: { directWatchPageLink?: boolean }) => {
    const directLink = Boolean(data.directWatchPageLink);

    if (directLink) {
      // Trying to guess the direct anime url

      chrome.runtime.sendMessage({ contentScriptQuery: 'fetchUrl', url: endpoint.toString() }, r => {
        const html = r.text as string | void;

        if (!html) {
          awButton.setAttribute('href', endpoint.toString());
          return console.log('Could not fetch, falling back to search url.');
        }

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const results = doc.querySelector('#list-items div');

        if (!results) {
          awButton.setAttribute('href', endpoint.toString());
          return console.log('No results were found, falling back to search url.');
        }

        const firstResult = doc.querySelector('#list-items div div div a');

        if (!firstResult) {
          awButton.setAttribute('href', endpoint.toString());
          return console.log('Unable to parse, falling back to search url.');
        }

        const direct = firstResult.getAttribute('href');

        if (!direct) {
          awButton.setAttribute('href', endpoint.toString());
          return console.log('Unable to find direct link, falling back to search url.');
        }

        console.log(`Found direct link ${direct}`);
        awButton.setAttribute('href', `https://aniwave.to${direct}`);
      });
      return;
    }

    awButton.setAttribute('href', endpoint.toString());
  });

  // Append the button to the action panel
  const actionPanel = getElementByPath(`#app > div.page-content > div > div.header-wrap > div.header > div > div.content > div`);
  if (!actionPanel) throw new Error('Action Panel was not found!');

  actionPanel.appendChild(awButton);
  console.log('Button was appended to the action panel!');
})().catch((e: Error) => {
  console.error(e);
});
