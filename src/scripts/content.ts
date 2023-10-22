(async () => {
  console.log(`Processing ${document.URL}`);

  //#region Helper functions
  function getElementByPath(path: string) {
    return document.querySelector(path);
  }
  //#endregion

  //#region Constants
  const asButtonId = 'as_button';
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
  }
}
`;

  type Anime = {
    id: number;
    title: {
      romaji: string | null;
      english: string | null;
      native: string | null;
    };
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

  if (!data) return;

  const anime: Anime = (await data.json()).data.Media;

  // Get the title in order of preference

  const order = (await chrome.storage.local.get('as_titleOrder')).as_titleOrder as string[];
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

  const asButton = document.createElement('div');
  
  asButton.innerText = `AniSearch`;
  asButton.id = asButtonId;

  // Redirect
  const endpoint = (await chrome.storage.local.get('as_endpoint')).as_endpoint as string;

  const asSearchUrl = endpoint.replace(/%s/g, encodeURIComponent(title));

  asButton.onclick = function () {
    window.open(asSearchUrl, '_blank');
  };

  // Append the button to the action panel
  const actionPanel = getElementByPath(`#app > div.page-content > div > div.header-wrap > div > div > div.cover-wrap > div > div`);
  if (!actionPanel) throw new Error('Action Panel was not found!');

  actionPanel.appendChild(asButton);
})().catch((e: Error) => {
  console.error(e);
  alert(e.message + '\nTry refreshing the page...');
});
