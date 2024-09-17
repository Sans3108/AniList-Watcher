//#region Media Data
type Season = 'WINTER' | 'SPRING' | 'SUMMER' | 'FALL';
type SeasonMalAnime = 'winter' | 'spring' | 'summer' | 'fall';

type Format = 'TV' | 'TV_SHORT' | 'MOVIE' | 'SPECIAL' | 'OVA' | 'ONA' | 'MUSIC' | 'MANGA' | 'NOVEL' | 'ONE_SHOT';
type FormatMalAnime = 'unknown' | 'tv' | 'ova' | 'movie' | 'special' | 'ona' | 'music';
type FormatMalManga = 'unknown' | 'manga' | 'novel' | 'one_shot' | 'doujinshi' | 'manhwa' | 'manhua' | 'oel';

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

enum GenreMalAnime {
  Action = 1,
  Adventure = 2,
  Racing = 3,
  Comedy = 4,
  'Avant Garde' = 5,
  Mythology = 6,
  Mystery = 7,
  Drama = 8,
  Ecchi = 9,
  Fantasy = 10,
  'Strategy Game' = 11,
  Hentai = 12,
  Historical = 13,
  Horror = 14,
  Kids = 15,
  'Martial Arts' = 17,
  Mecha = 18,
  Music = 19,
  Parody = 20,
  Samurai = 21,
  Romance = 22,
  School = 23,
  'Sci-Fi' = 24,
  Shoujo = 25,
  'Girls Love' = 26,
  Shounen = 27,
  'Boys Love' = 28,
  Space = 29,
  Sports = 30,
  'Super Power' = 31,
  Vampire = 32,
  Harem = 35,
  'Slice of Life' = 36,
  Supernatural = 37,
  Military = 38,
  Detective = 39,
  Psychological = 40,
  Suspense = 41,
  Seinen = 42,
  Josei = 43,
  'Award Winning' = 46,
  Gourmet = 47,
  Workplace = 48,
  Erotica = 49,
  'Adult Cast' = 50,
  Anthropomorphic = 51,
  CGDCT = 52,
  Childcare = 53,
  'Combat Sports' = 54,
  Delinquents = 55,
  Educational = 56,
  'Gag Humor' = 57,
  Gore = 58,
  'High Stakes Game' = 59,
  'Idols (Female)' = 60,
  'Idols (Male)' = 61,
  Isekai = 62,
  Iyashikei = 63,
  'Love Polygon' = 64,
  'Magical Sex Shift' = 65,
  'Mahou Shoujo' = 66,
  Medical = 67,
  'Organized Crime' = 68,
  'Otaku Culture' = 69,
  'Performing Arts' = 70,
  Pets = 71,
  Reincarnation = 72,
  'Reverse Harem' = 73,
  'Romantic Subtext' = 74,
  Showbiz = 75,
  Survival = 76,
  'Team Sports' = 77,
  'Time Travel' = 78,
  'Video Game' = 79,
  'Visual Arts' = 80,
  Crossdressing = 81
}
enum GenreMalManga {
  Action = 1,
  Adventure = 2,
  Racing = 3,
  Comedy = 4,
  'Avant Garde' = 5,
  Mythology = 6,
  Mystery = 7,
  Drama = 8,
  Ecchi = 9,
  Fantasy = 10,
  'Strategy Game' = 11,
  Hentai = 12,
  Historical = 13,
  Horror = 14,
  Kids = 15,
  'Martial Arts' = 17,
  Mecha = 18,
  Music = 19,
  Parody = 20,
  Samurai = 21,
  Romance = 22,
  School = 23,
  'Sci-Fi' = 24,
  Shoujo = 25,
  'Girls Love' = 26,
  Shounen = 27,
  'Boys Love' = 28,
  Space = 29,
  Sports = 30,
  'Super Power' = 31,
  Vampire = 32,
  Harem = 35,
  'Slice of Life' = 36,
  Supernatural = 37,
  Military = 38,
  Detective = 39,
  Psychological = 40,
  Seinen = 41,
  Josei = 42,
  Crossdressing = 44,
  Suspense = 45,
  'Award Winning' = 46,
  Gourmet = 47,
  Workplace = 48,
  Erotica = 49,
  'Adult Cast' = 50,
  Anthropomorphic = 51,
  CGDCT = 52,
  Childcare = 53,
  'Combat Sports' = 54,
  Delinquents = 55,
  Educational = 56,
  'Gag Humor' = 57,
  Gore = 58,
  'High Stakes Game' = 59,
  'Idols (Female)' = 60,
  'Idols (Male)' = 61,
  Isekai = 62,
  Iyashikei = 63,
  'Love Polygon' = 64,
  'Magical Sex Shift' = 65,
  'Mahou Shoujo' = 66,
  Medical = 67,
  Memoir = 68,
  'Organized Crime' = 69,
  'Otaku Culture' = 70,
  'Performing Arts' = 71,
  Pets = 72,
  Reincarnation = 73,
  'Reverse Harem' = 74,
  'Romantic Subtext' = 75,
  Showbiz = 76,
  Survival = 77,
  'Team Sports' = 78,
  'Time Travel' = 79,
  'Video Game' = 80,
  Villainess = 81,
  'Visual Arts' = 82
}

type Status = 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS';
type StatusMalAnime = 'finished_airing' | 'currently_airing' | 'not_yet_aired';
type StatusMalManga = 'finished' | 'currently_publishing' | 'not_yet_published';

interface MediaData {
  id: number;
  title: {
    romaji: string | null;
    english: string | null;
    native: string | null;
  } | null;
  season: Season | null;
  seasonYear: number | null;
  startDate: {
    year: number | null;
  } | null;
  format: Format | null;
  genres: Genre[] | null;
  status: Status | null;
  idMal: number | null;
  malData?: {
    id: number;
    title: string;
    alternative_titles: {
      en: string | null;
      ja: string | null;
    } | null;
    media_type: FormatMalAnime | FormatMalManga;
    status: StatusMalAnime | StatusMalManga;
    genres: { id: number; name: keyof typeof GenreMalAnime | keyof typeof GenreMalManga }[];
    start_season?: {
      year: number;
      season: SeasonMalAnime;
    };
    start_date: string | null;
  };
}

async function getMediaData(mediaId: number, mal: boolean): Promise<MediaData | null> {
  const data = await fetch('https://graphql.anilist.co', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `query($id:Int){Media(id:$id){id,idMal,title{romaji,english,native},season,seasonYear,startDate{year},format,genres,status}}`,
      variables: { id: mediaId }
    })
  }).catch(error => {
    console.log('AW: ', error);
    return null;
  });

  if (!data) return null;

  const media: MediaData = (await data.json()).data.Media;

  if (mal && media.idMal && media.format) {
    const path = media.format === 'MANGA' || media.format === 'ONE_SHOT' || media.format === 'NOVEL' ? 'manga' : 'anime';

    const malData = await fetch(`https://aw-watcher-proxy.vercel.app/?path=${path}&id=${media.idMal}`, {
      method: 'GET'
    }).catch(error => {
      console.error('AW: ', error);
      return null;
    });

    if (!malData) return media;

    const malMedia: MediaData['malData'] | null = await malData
      .json()
      .then(data => {
        if (data.error || data.error === '') {
          console.error('AW: ', data.error);
          return null;
        }

        return data;
      })
      .catch(e => {
        console.error('AW: ', e);
        return null;
      });

    if (!malMedia) return media;

    const compoundData: MediaData = { ...media, malData: malMedia, idMal: malMedia.id };

    return compoundData;
  }

  return media;
}
//#endregion

//#region Provider Manager
interface UserPreferences {
  directWatchPageLink?: boolean;
  streamingSiteId?: string;
  readingSiteId?: string;
  langOrder?: string;
  withGenres?: boolean;
}

abstract class BaseProvider {
  public abstract readonly type: 'anime' | 'manga';
  public abstract readonly usesMal: boolean;
  public abstract readonly id: string;
  public abstract readonly displayName: string;
  public abstract readonly baseColor: string;
  public abstract handle(data: MediaData, preferences: UserPreferences, preferredTitle: string): Promise<string>;
  public abstract getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string): string;
  public abstract readonly parsingTarget: string | null;

  public readonly normalAdjustDark: number = 0.1;
  public readonly hoverAdjustDark: number = 0.4;

  public readonly normalAdjustLight: number = -0.1;
  public readonly hoverAdjustLight: number = -0.4;
}

class ProviderManager {
  private providers: BaseProvider[] = [];

  public register(...providers: BaseProvider[]): this {
    this.providers.push(...providers);

    return this;
  }

  // public unregister(id: string): boolean {
  //   const index = this.providers.findIndex(provider => provider.id === id);
  //   if (index === -1) return false;

  //   this.providers.splice(index, 1);
  //   return true;
  // }

  public getAllIds(): string[] {
    return this.providers.map(provider => provider.id);
  }

  public getById(id: string): BaseProvider | null {
    return this.providers.find(provider => provider.id === id) ?? null;
  }

  public getUserProvider(path: string, preferences: UserPreferences): BaseProvider {
    const requestedProviderId = path === 'anime' ? preferences.streamingSiteId! : preferences.readingSiteId!;
    let provider = this.getById(requestedProviderId);

    if (!provider) {
      console.log(`AW: Provider ${requestedProviderId} not found`);

      const defaultProvider = this.providers.find(p => p.type === path)!;

      chrome.storage.sync.set(path === 'anime' ? { streamingSiteId: defaultProvider.id } : { readingSiteId: defaultProvider.id });
      console.log(`AW: Changed default ${path} provider to ${defaultProvider.id}`);

      provider = defaultProvider;
    }

    return provider;
  }

  public async handle(data: MediaData, path: string, preferences: UserPreferences, preferredTitle: string | null): Promise<{ provider: BaseProvider | null; url: string | null }> {
    const provider = this.getUserProvider(path, preferences);

    if (!preferredTitle) {
      console.log(`AW: No preferred title!`);
      return { provider: provider, url: null };
    }

    const url = await provider.handle(data, preferences, preferredTitle).catch(e => {
      console.log(`AW: ERROR`, e);
      return null;
    });

    return { provider, url };
  }
}
//#endregion

//#region Utils
async function getRawHtml(url: string): Promise<string> {
  return await fetch(url).then(response => response.text());
}

function parseRawHtml(rawHtml: string, provider: BaseProvider): Promise<string | null> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs.length > 0 && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'parseHtml', html: rawHtml, provider }, (response: string | null) => {
          resolve(response);
        });
      } else {
        reject(null);
      }
    });
  });
}

function getTheme(): Promise<'light' | 'dark' | null> {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      if (tabs.length > 0 && tabs[0].id) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'getTheme' }, (response: string | null) => {
          if (response === null || response === 'contrast') {
            resolve('light');
          } else if (response === 'dark') {
            resolve('dark');
          }
        });
      } else {
        reject(null);
      }
    });
  });
}
//#endregion

//#region Providers
class HianimeProvider extends BaseProvider {
  public readonly usesMal = false;
  public readonly type = 'anime';
  public readonly id = 'hianime';
  public readonly displayName = 'HiAnime';

  public readonly baseColor = '#bd84a2';

  public readonly parsingTarget = `#main-content > section > div.tab-content > div > div.film_list-wrap > div:nth-child(1) > div.film-poster > a`;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    const direct = Boolean(preferences.directWatchPageLink);

    const searchUrl = this.getSearchUrl(data, preferences, preferredTitle);

    if (!direct) return searchUrl;

    const rawHtml = await getRawHtml(searchUrl).catch(e => {
      console.log(`AW: ERROR`, e);

      return null;
    });

    if (!rawHtml) {
      console.log(`AW: Could not fetch, falling back to search url`);
      return searchUrl;
    }

    const directUrl = await parseRawHtml(rawHtml, this);

    if (!directUrl) {
      console.log(`AW: Could not find direct url, falling back to search url`);
      return searchUrl;
    }

    console.log(`AW: Found direct url: ${directUrl}`);

    return `https://hianime.to${directUrl}`;
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    if (!preferredTitle) throw new Error('No preferred title provided');

    const endpoint = new URL('https://hianime.to/search');

    endpoint.searchParams.set('keyword', preferredTitle);

    const typeMap: Record<Format, number | null> = {
      TV: 2,
      TV_SHORT: 2, // non-existent, TV fallback
      MOVIE: 1,
      SPECIAL: 5,
      OVA: 3,
      ONA: 4,
      MUSIC: 6,
      MANGA: 2, // non-existent, TV fallback
      NOVEL: 2, // non-existent, TV fallback
      ONE_SHOT: null // non-existent, no fallback
    };

    const type = data.format ? typeMap[data.format] : null;

    if (type) endpoint.searchParams.set('type', type.toString());

    const statusMap: Record<Status, number | null> = {
      FINISHED: 1,
      RELEASING: 2,
      NOT_YET_RELEASED: 3,
      CANCELLED: null, // non-existent, no fallback
      HIATUS: null // non-existent, no fallback
    };

    const status = data.status ? statusMap[data.status] : null;

    if (status) endpoint.searchParams.set('status', status.toString());

    const seasonMap: Record<Season, number | null> = {
      WINTER: 4,
      SPRING: 1,
      SUMMER: 2,
      FALL: 3
    };

    const season = data.season ? seasonMap[data.season] : null;

    if (season) endpoint.searchParams.set('season', season.toString());

    if (data.seasonYear) endpoint.searchParams.set('sy', data.seasonYear.toString());

    if (Boolean(preferences.withGenres)) {
      console.log('AW: Appending genres...');

      const genreMap: Record<Genre, number | null> = {
        Action: 1,
        Adventure: 2,
        Comedy: 4,
        Drama: 8,
        Ecchi: 9,
        Fantasy: 10,
        Horror: 14,
        'Mahou Shoujo': null,
        Mecha: 18,
        Music: 19,
        Mystery: null,
        Psychological: 40,
        Romance: 22,
        'Sci-Fi': 24,
        'Slice of Life': 36,
        Sports: 30,
        Supernatural: 37,
        Thriller: 41
      };

      // const Hianime_genre_ids = [
      //   1, // Action
      //   2, // Adventure
      //   3, // Cars
      //   4, // Comedy
      //   5, // Dementia
      //   6, // Demons
      //   8, // Drama
      //   9, // Ecchi
      //   10, // Fantasy
      //   11, // Game
      //   35, // Harem
      //   13, // Historical
      //   14, // Horror
      //   44, // Isekai
      //   43, // Josei
      //   15, // Kids
      //   16, // Magic
      //   17, // Martial Arts
      //   18, // Mecha
      //   38, // Military
      //   19, // Music
      //   7, // Mistery
      //   20, // Parody
      //   39, // Police
      //   40, // Psychological
      //   22, // Romance
      //   21, // Samurai
      //   23, // School
      //   24, // Sci-Fi
      //   42, // Seinen
      //   26, // Shoujo
      //   25, // Shouko Ai
      //   27, // Shounen
      //   28, // Shounen Ai
      //   36, // Slice of Life
      //   29, // Space
      //   30, // Sports
      //   31, // Super Power
      //   37, // Supernatural
      //   41, // Thriller
      //   32 // Vampire
      // ];

      if (data.genres) {
        const genreIds: string[] = [];

        for (const g of data.genres) {
          const id = genreMap[g];

          if (id) genreIds.push(id.toString());
        }

        const genresString = genreIds.join(',');

        endpoint.searchParams.set('genres', genresString);
      }
    }

    return endpoint.toString();
  }
}

class MiruroProvider extends BaseProvider {
  public readonly usesMal = false;
  public readonly type = 'anime';
  public readonly id = 'miruro';
  public readonly displayName = 'Miruro';

  public readonly baseColor = '#535388';

  public readonly parsingTarget = null;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    const direct = Boolean(preferences.directWatchPageLink);

    const searchUrl = this.getSearchUrl(data, preferences, preferredTitle);

    if (!direct) return searchUrl;

    return `https://www.miruro.tv/watch?id=${data.id}`;
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    if (!preferredTitle) throw new Error('No preferred title provided');

    const endpoint = new URL('https://www.miruro.tv/search');

    endpoint.searchParams.set('query', preferredTitle);

    const type = data.format === 'MANGA' || data.format === 'NOVEL' ? 'TV' : data.format === 'ONE_SHOT' ? null : data.format;

    if (type) endpoint.searchParams.set('format', type.toString());

    const status = data.status === 'HIATUS' ? null : data.status;

    if (status) endpoint.searchParams.set('status', status);

    if (data.season) endpoint.searchParams.set('season', data.season);

    if (data.seasonYear) endpoint.searchParams.set('year', data.seasonYear.toString());

    if (Boolean(preferences.withGenres)) {
      console.log('AW: Appending genres...');

      const genreMap: Record<Genre, boolean> = {
        Action: true,
        Adventure: true,
        Comedy: true,
        Drama: true,
        Ecchi: false, // Doesn't exist on miruro
        Fantasy: true,
        Horror: true,
        'Mahou Shoujo': true,
        Mecha: true,
        Music: true,
        Mystery: true,
        Psychological: true,
        Romance: true,
        'Sci-Fi': true,
        'Slice of Life': true,
        Sports: true,
        Supernatural: true,
        Thriller: true
      };

      if (data.genres) {
        const genres: string[] = [];

        for (const g of data.genres) {
          const enabled = genreMap[g];

          if (enabled) genres.push(g);
        }

        const genresString = genres.join(',');

        endpoint.searchParams.set('genres', genresString);
      }
    }

    return endpoint.toString();
  }
}

// Possibly based on mal data
class AnitakuProvider extends BaseProvider {
  public readonly usesMal = true;
  public readonly type = 'anime';
  public readonly id = 'anitaku';
  public readonly displayName = 'Anitaku';

  public readonly baseColor = '#ffc119';

  public readonly parsingTarget = `#wrapper_bg > section > section.content_left > div > div.last_episodes > ul > li > div > a`;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    const direct = Boolean(preferences.directWatchPageLink);

    const searchUrl = this.getSearchUrl(data, preferences, preferredTitle);

    if (!direct) return searchUrl;

    const rawHtml = await getRawHtml(searchUrl).catch(e => {
      console.log(`AW: ERROR`, e);

      return null;
    });

    if (!rawHtml) {
      console.log(`AW: Could not fetch, falling back to search url`);
      return searchUrl;
    }

    const directUrl = await parseRawHtml(rawHtml, this);

    if (!directUrl) {
      console.log(`AW: Could not find direct url, falling back to search url`);
      return searchUrl;
    }

    console.log(`AW: Found direct url: ${directUrl}`);

    return `https://anitaku.pe${directUrl}`;
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    const order = preferences.langOrder!.split('');

    const titles = [
      { lang: 'n', title: data.idMal ? data.malData?.alternative_titles?.ja : null },
      { lang: 'r', title: data.idMal ? data.malData?.title : null },
      { lang: 'e', title: data.idMal ? data.malData?.alternative_titles?.en : null }
    ].map(t => (t.title === '' ? { lang: t.lang, title: null } : t));

    titles.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

    const title = titles.find(t => t.title !== null && t.title !== undefined)?.title || preferredTitle;

    if (!title) throw new Error(`Could not compute title!`);

    console.log(`AW: ${this.id} title: ${title}`);

    const endpoint = new URL('https://anitaku.pe/filter.html');

    endpoint.searchParams.set('keyword', title);

    // Type seems to be fucked on anitaku, idfk why
    // const typeMap: Record<FormatMalAnime, number> = {
    //   tv: 1,
    //   movie: 3,
    //   music: 32,
    //   ona: 30,
    //   ova: 26,
    //   special: 2,
    //   unknown: 1 // TV fallback
    // };

    // const type = typeMap[data.malData.media_type as FormatMalAnime];
    // endpoint.searchParams.set('type[]', type.toString());

    const statusMap: Record<StatusMalAnime, string> = {
      currently_airing: 'Ongoing',
      finished_airing: 'Completed',
      not_yet_aired: 'Upcoming'
    };

    const statusMapAnilist: Record<Status, string | null> = {
      FINISHED: 'Completed',
      RELEASING: 'Ongoing',
      NOT_YET_RELEASED: 'Upcoming',
      CANCELLED: null,
      HIATUS: null
    };

    const status = data.malData ? statusMap[data.malData.status as StatusMalAnime] : data.status ? statusMapAnilist[data.status] : null;
    if (status) endpoint.searchParams.set('status[]', status);

    if (data.malData && data.malData.start_season) {
      // Season also seems to fuck it up
      // endpoint.searchParams.set('season[]', data.malData.start_season.season);
      endpoint.searchParams.set('year[]', data.malData.start_season.year.toString());
    } else if (data.seasonYear) {
      endpoint.searchParams.set('year[]', data.seasonYear.toString());
    } else if (data.startDate && data.startDate.year) {
      endpoint.searchParams.set('year[]', data.startDate.year.toString());
    }

    if (Boolean(preferences.withGenres)) {
      console.log('AW: Appending genres...');

      type AnitakuGenres =
        | 'action'
        | 'adult-cast'
        | 'adventure'
        | 'anthropomorphic'
        | 'avant-garde'
        | 'shounen-ai'
        | 'cars'
        | 'cgdct'
        | 'childcare'
        | 'comedy'
        | 'comic'
        | 'crime'
        | 'crossdressing'
        | 'cultivation'
        | 'delinquents'
        | 'dementia'
        | 'demons'
        | 'detective'
        | 'drama'
        | 'dub'
        | 'ecchi'
        | 'erotica'
        | 'family'
        | 'fantasy'
        | 'gag-humor'
        | 'game'
        | 'gender-bender'
        | 'gore'
        | 'gourmet'
        | 'harem'
        | 'high-stakes-game'
        | 'historical'
        | 'horror'
        | 'isekai'
        | 'iyashikei'
        | 'josei'
        | 'kids'
        | 'love-polygon'
        | 'magic'
        | 'magical-sex-shift'
        | 'mahou-shoujo'
        | 'martial-arts'
        | 'mecha'
        | 'medical'
        | 'military'
        | 'music'
        | 'mystery'
        | 'mythology'
        | 'organized-crime'
        | 'parody'
        | 'performing-arts'
        | 'pets'
        | 'police'
        | 'psychological'
        | 'racing'
        | 'reincarnation'
        | 'romance'
        | 'romantic-subtext'
        | 'samurai'
        | 'school'
        | 'sci-fi'
        | 'seinen'
        | 'shoujo'
        | 'shoujo-ai'
        | 'shounen'
        | 'showbiz'
        | 'slice-of-life'
        | 'space'
        | 'sports'
        | 'strategy-game'
        | 'strong-male-lead'
        | 'super-power'
        | 'supernatural'
        | 'survival'
        | 'suspense'
        | 'system'
        | 'team-sports'
        | 'thriller'
        | 'time-travel'
        | 'vampire'
        | 'video-game'
        | 'visual-arts'
        | 'work-life'
        | 'workplace'
        | 'yaoi'
        | 'yuri';

      const genreMap: Record<keyof typeof GenreMalAnime, AnitakuGenres | null> = {
        Action: 'action',
        Adventure: 'adventure',
        Racing: 'racing',
        Comedy: 'comedy',
        'Avant Garde': 'avant-garde',
        Mythology: 'mythology',
        Mystery: 'mystery',
        Drama: 'drama',
        Ecchi: 'ecchi',
        Fantasy: 'fantasy',
        'Strategy Game': 'strategy-game',
        Hentai: null,
        Historical: 'historical',
        Horror: 'horror',
        Kids: 'kids',
        'Martial Arts': 'martial-arts',
        Mecha: 'mecha',
        Music: 'music',
        Parody: 'parody',
        Samurai: 'samurai',
        Romance: 'romance',
        School: 'school',
        'Sci-Fi': 'sci-fi',
        Shoujo: 'shoujo',
        'Girls Love': 'yuri', // not literal
        Shounen: 'shounen',
        'Boys Love': 'yaoi', // not literal
        Space: 'space',
        Sports: 'sports',
        'Super Power': 'super-power',
        Vampire: 'vampire',
        Harem: 'harem',
        'Slice of Life': 'slice-of-life',
        Supernatural: 'supernatural',
        Military: 'military',
        Detective: 'detective',
        Psychological: 'psychological',
        Suspense: 'suspense',
        Seinen: 'seinen',
        Josei: 'josei',
        'Award Winning': null,
        Gourmet: 'gourmet',
        Workplace: 'workplace',
        Erotica: 'erotica',
        'Adult Cast': 'adult-cast',
        Anthropomorphic: 'anthropomorphic',
        CGDCT: 'cgdct',
        Childcare: 'childcare',
        'Combat Sports': null,
        Delinquents: 'delinquents',
        Educational: null,
        'Gag Humor': 'gag-humor',
        Gore: 'gore',
        'High Stakes Game': 'high-stakes-game',
        'Idols (Female)': null,
        'Idols (Male)': null,
        Isekai: 'isekai',
        Iyashikei: 'iyashikei',
        'Love Polygon': 'love-polygon',
        'Magical Sex Shift': 'magical-sex-shift',
        'Mahou Shoujo': 'mahou-shoujo',
        Medical: 'medical',
        'Organized Crime': 'organized-crime',
        'Otaku Culture': null,
        'Performing Arts': 'performing-arts',
        Pets: 'pets',
        Reincarnation: 'reincarnation',
        'Reverse Harem': null,
        'Romantic Subtext': 'romantic-subtext',
        Showbiz: 'showbiz',
        Survival: 'survival',
        'Team Sports': 'team-sports',
        'Time Travel': 'time-travel',
        'Video Game': 'video-game',
        'Visual Arts': 'visual-arts',
        Crossdressing: 'crossdressing'
      };

      const genreMapAnilist: Record<Genre, AnitakuGenres | null> = {
        Action: 'action',
        Adventure: 'adventure',
        Comedy: 'comedy',
        Mystery: 'mystery',
        Drama: 'drama',
        Ecchi: 'ecchi',
        Fantasy: 'fantasy',
        Horror: 'horror',
        Mecha: 'mecha',
        Music: 'music',
        Romance: 'romance',
        'Sci-Fi': 'sci-fi',
        Sports: 'sports',
        'Slice of Life': 'slice-of-life',
        Supernatural: 'supernatural',
        Psychological: 'psychological',
        'Mahou Shoujo': 'mahou-shoujo',
        Thriller: null
      };

      if (data.malData) {
        for (const g of data.malData.genres) {
          const genreName = g.name as keyof typeof GenreMalAnime;

          const id = genreMap[genreName];

          if (id) endpoint.searchParams.append('genre[]', id);
        }
      } else if (data.genres) {
        for (const g of data.genres) {
          const id = genreMapAnilist[g];

          if (id) endpoint.searchParams.append('genre[]', id);
        }
      }
    }

    return endpoint.toString();
  }
}

// Possibly based on mal data
class MangafireProvider extends BaseProvider {
  public readonly usesMal = true;
  public readonly type = 'manga';
  public readonly id = 'mangafire';
  public readonly displayName = 'MangaFire';

  public readonly baseColor = '#225174';

  public readonly parsingTarget = `body > div.wrapper > main > div.container > section > div.original.card-lg > div > div > div > a`;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    const direct = Boolean(preferences.directWatchPageLink);

    const searchUrl = this.getSearchUrl(data, preferences, preferredTitle);

    if (!direct) return searchUrl;

    const rawHtml = await getRawHtml(searchUrl).catch(e => {
      console.log(`AW: ERROR`, e);

      return null;
    });

    if (!rawHtml) {
      console.log(`AW: Could not fetch, falling back to search url`);
      return searchUrl;
    }

    const directUrl = await parseRawHtml(rawHtml, this);

    if (!directUrl) {
      console.log(`AW: Could not find direct url, falling back to search url`);
      return searchUrl;
    }

    console.log(`AW: Found direct url: ${directUrl}`);

    return `https://mangafire.to/read${directUrl.slice(6)}`;
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    const order = preferences.langOrder!.split('');

    const titles = [
      { lang: 'n', title: data.idMal ? data.malData?.alternative_titles?.ja : null },
      { lang: 'r', title: data.idMal ? data.malData?.title : null },
      { lang: 'e', title: data.idMal ? data.malData?.alternative_titles?.en : null }
    ].map(t => (t.title === '' ? { lang: t.lang, title: null } : t));

    titles.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

    const title = titles.find(t => t.title !== null && t.title !== undefined)?.title || preferredTitle;

    if (!title) throw new Error(`Could not compute title!`);

    console.log(`AW: ${this.id} title: ${title}`);

    const endpoint = new URL('https://mangafire.to/filter');

    endpoint.searchParams.set('keyword', title);

    const typeMap: Record<FormatMalManga, string | null> = {
      unknown: null,
      manga: 'manga',
      novel: 'novel',
      one_shot: 'one_shot',
      doujinshi: 'doujinshi',
      manhwa: 'manhwa',
      manhua: 'manhua',
      oel: null
    };

    const typeMapAnilist: Record<Format, string | null> = {
      TV: null,
      TV_SHORT: null,
      MOVIE: null,
      SPECIAL: null,
      OVA: null,
      ONA: null,
      MUSIC: null,
      MANGA: 'manga',
      NOVEL: 'novel',
      ONE_SHOT: 'one_shot'
    };

    const type = data.malData ? typeMap[data.malData.media_type as FormatMalManga] : data.format ? typeMapAnilist[data.format] : null;
    if (type) endpoint.searchParams.set('type[]', type);

    const statusMap: Record<StatusMalManga, string> = {
      finished: 'completed',
      currently_publishing: 'releasing',
      not_yet_published: 'info'
    };

    const statusMapAnilist: Record<Status, string | null> = {
      FINISHED: 'completed',
      RELEASING: 'releasing',
      NOT_YET_RELEASED: 'info',
      CANCELLED: null,
      HIATUS: null
    };

    const status = data.malData ? statusMap[data.malData.status as StatusMalManga] : data.status ? statusMapAnilist[data.status] : null;
    if (status) endpoint.searchParams.set('status[]', status);

    function pickDecade(year: number): string | null {
      const decades = ['2000s', '1990s', '1980s', '1970s', '1960s', '1950s', '1940s', '1930s'];

      if (year >= 2004) return year.toString();

      return decades.find(decade => decade.startsWith(`${Math.floor(year / 10) * 10}s`)) || null;
    }

    if (data.malData && data.malData.start_date) {
      const startYear = parseInt(data.malData.start_date.slice(0, 4));

      if (!isNaN(startYear)) {
        const year = pickDecade(startYear);
        if (year) endpoint.searchParams.set('year[]', year);
      }
    } else if (data.seasonYear) {
      const year = pickDecade(data.seasonYear);
      if (year) endpoint.searchParams.set('year[]', year);
    } else if (data.startDate && data.startDate.year) {
      endpoint.searchParams.set('year[]', data.startDate.year.toString());
    }

    if (Boolean(preferences.withGenres)) {
      console.log('AW: Appending genres...');

      const genreMap: Record<keyof typeof GenreMalManga, number | null> = {
        Action: 1,
        Adventure: 78,
        'Avant Garde': 3,
        'Boys Love': 4,
        Comedy: 5,
        Drama: 6,
        Ecchi: 7,
        Fantasy: 79,
        'Girls Love': 9,
        Gourmet: 10,
        Harem: 11,
        Horror: 530,
        Isekai: 13,
        Iyashikei: 531,
        Josei: 15,
        Kids: 532,
        'Mahou Shoujo': 533,
        'Martial Arts': 534,
        Mecha: 19,
        Military: 535,
        Music: 21,
        Mystery: 22,
        Parody: 23,
        Psychological: 536,
        'Reverse Harem': 25,
        Romance: 26,
        School: 73,
        'Sci-Fi': 28,
        Seinen: 537,
        Shoujo: 30,
        Shounen: 31,
        'Slice of Life': 538,
        Space: 33,
        Sports: 34,
        'Super Power': 75,
        Supernatural: 76,
        Suspense: 37,
        Vampire: 39,
        Racing: null,
        Mythology: null,
        'Strategy Game': null,
        Hentai: null,
        Historical: null,
        Samurai: null,
        Detective: null,
        Crossdressing: null,
        'Award Winning': null,
        Workplace: null,
        Erotica: null,
        'Adult Cast': null,
        Anthropomorphic: null,
        CGDCT: null,
        Childcare: null,
        'Combat Sports': null,
        Delinquents: null,
        Educational: null,
        'Gag Humor': null,
        Gore: null,
        'High Stakes Game': null,
        'Idols (Female)': null,
        'Idols (Male)': null,
        'Love Polygon': null,
        'Magical Sex Shift': null,
        Medical: null,
        Memoir: null,
        'Organized Crime': null,
        'Otaku Culture': null,
        'Performing Arts': null,
        Pets: null,
        Reincarnation: null,
        'Romantic Subtext': null,
        Showbiz: null,
        Survival: null,
        'Team Sports': null,
        'Time Travel': null,
        'Video Game': null,
        Villainess: null,
        'Visual Arts': null
      };

      const genreMapAnilist: Record<Genre, number | null> = {
        Action: 1,
        Adventure: 78,
        Comedy: 5,
        Drama: 6,
        Ecchi: 7,
        Fantasy: 79,
        Horror: 530,
        'Mahou Shoujo': 533,
        Mecha: 19,
        Music: 21,
        Mystery: 22,
        Psychological: 536,
        Romance: 26,
        'Sci-Fi': 28,
        'Slice of Life': 538,
        Sports: 34,
        Supernatural: 76,
        Thriller: null
      };

      if (data.malData) {
        for (const g of data.malData.genres) {
          const genreName = g.name as keyof typeof GenreMalManga;

          const id = genreMap[genreName];

          if (id) endpoint.searchParams.append('genre[]', id.toString());
        }
      } else if (data.genres) {
        for (const g of data.genres) {
          const id = genreMapAnilist[g];

          if (id) endpoint.searchParams.append('genre[]', id.toString());
        }
      }
    }

    return endpoint.toString();
  }
}

class MangareaderProvider extends BaseProvider {
  public readonly usesMal = false;
  public readonly type = 'manga';
  public readonly id = 'mangareader';
  public readonly displayName = 'MangaReader';

  public readonly baseColor = '#6a5488';

  public readonly parsingTarget = null;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    return 'https://mangareader.to';
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    const order = preferences.langOrder!.split('');

    const titles = [
      { lang: 'n', title: data.idMal ? data.malData?.alternative_titles?.ja : null },
      { lang: 'r', title: data.idMal ? data.malData?.title : null },
      { lang: 'e', title: data.idMal ? data.malData?.alternative_titles?.en : null }
    ].map(t => (t.title === '' ? { lang: t.lang, title: null } : t));

    titles.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

    const title = titles.find(t => t.title !== null && t.title !== undefined)?.title || preferredTitle;

    if (!title) throw new Error(`Could not compute title!`);

    console.log(`AW: ${this.id} title: ${title}`);

    const endpoint = new URL('https://mangareader.to/filter');

    endpoint.searchParams.set('keyword', title);

    const typeMap: Record<FormatMalManga, number | null> = {
      unknown: null,
      manga: 1,
      novel: 4,
      one_shot: 2,
      doujinshi: 3,
      manhwa: 5,
      manhua: 6,
      oel: null
    };

    const typeMapAnilist: Record<Format, number | null> = {
      TV: null,
      TV_SHORT: null,
      MOVIE: null,
      SPECIAL: null,
      OVA: null,
      ONA: null,
      MUSIC: null,
      MANGA: 1,
      NOVEL: 4,
      ONE_SHOT: 2
    };

    const type = data.malData ? typeMap[data.malData.media_type as FormatMalManga] : data.format ? typeMapAnilist[data.format] : null;
    if (type) endpoint.searchParams.set('type', type.toString());

    const statusMap: Record<StatusMalManga, number> = {
      finished: 1,
      currently_publishing: 2,
      not_yet_published: 5
    };

    const statusMapAnilist: Record<Status, number | null> = {
      FINISHED: 1,
      RELEASING: 2,
      NOT_YET_RELEASED: 5,
      CANCELLED: 4,
      HIATUS: 3
    };

    const status = data.malData ? statusMap[data.malData.status as StatusMalManga] : data.status ? statusMapAnilist[data.status] : null;
    if (status) endpoint.searchParams.set('status', status.toString());

    // go from here dumbass

    function pickDecade(year: number): string | null {
      const decades = ['2000s', '1990s', '1980s', '1970s', '1960s', '1950s', '1940s', '1930s'];

      if (year >= 2004) return year.toString();

      return decades.find(decade => decade.startsWith(`${Math.floor(year / 10) * 10}s`)) || null;
    }

    if (data.malData && data.malData.start_date) {
      const startYear = parseInt(data.malData.start_date.slice(0, 4));

      if (!isNaN(startYear)) {
        const year = pickDecade(startYear);
        if (year) endpoint.searchParams.set('year[]', year);
      }
    } else if (data.seasonYear) {
      const year = pickDecade(data.seasonYear);
      if (year) endpoint.searchParams.set('year[]', year);
    } else if (data.startDate && data.startDate.year) {
      endpoint.searchParams.set('year[]', data.startDate.year.toString());
    }

    if (Boolean(preferences.withGenres)) {
      console.log('AW: Appending genres...');

      const genreMap: Record<keyof typeof GenreMalManga, number | null> = {
        Action: 1,
        Adventure: 78,
        'Avant Garde': 3,
        'Boys Love': 4,
        Comedy: 5,
        Drama: 6,
        Ecchi: 7,
        Fantasy: 79,
        'Girls Love': 9,
        Gourmet: 10,
        Harem: 11,
        Horror: 530,
        Isekai: 13,
        Iyashikei: 531,
        Josei: 15,
        Kids: 532,
        'Mahou Shoujo': 533,
        'Martial Arts': 534,
        Mecha: 19,
        Military: 535,
        Music: 21,
        Mystery: 22,
        Parody: 23,
        Psychological: 536,
        'Reverse Harem': 25,
        Romance: 26,
        School: 73,
        'Sci-Fi': 28,
        Seinen: 537,
        Shoujo: 30,
        Shounen: 31,
        'Slice of Life': 538,
        Space: 33,
        Sports: 34,
        'Super Power': 75,
        Supernatural: 76,
        Suspense: 37,
        Vampire: 39,
        Racing: null,
        Mythology: null,
        'Strategy Game': null,
        Hentai: null,
        Historical: null,
        Samurai: null,
        Detective: null,
        Crossdressing: null,
        'Award Winning': null,
        Workplace: null,
        Erotica: null,
        'Adult Cast': null,
        Anthropomorphic: null,
        CGDCT: null,
        Childcare: null,
        'Combat Sports': null,
        Delinquents: null,
        Educational: null,
        'Gag Humor': null,
        Gore: null,
        'High Stakes Game': null,
        'Idols (Female)': null,
        'Idols (Male)': null,
        'Love Polygon': null,
        'Magical Sex Shift': null,
        Medical: null,
        Memoir: null,
        'Organized Crime': null,
        'Otaku Culture': null,
        'Performing Arts': null,
        Pets: null,
        Reincarnation: null,
        'Romantic Subtext': null,
        Showbiz: null,
        Survival: null,
        'Team Sports': null,
        'Time Travel': null,
        'Video Game': null,
        Villainess: null,
        'Visual Arts': null
      };

      const genreMapAnilist: Record<Genre, number | null> = {
        Action: 1,
        Adventure: 78,
        Comedy: 5,
        Drama: 6,
        Ecchi: 7,
        Fantasy: 79,
        Horror: 530,
        'Mahou Shoujo': 533,
        Mecha: 19,
        Music: 21,
        Mystery: 22,
        Psychological: 536,
        Romance: 26,
        'Sci-Fi': 28,
        'Slice of Life': 538,
        Sports: 34,
        Supernatural: 76,
        Thriller: null
      };

      if (data.malData) {
        for (const g of data.malData.genres) {
          const genreName = g.name as keyof typeof GenreMalManga;

          const id = genreMap[genreName];

          if (id) endpoint.searchParams.append('genre[]', id.toString());
        }
      } else if (data.genres) {
        for (const g of data.genres) {
          const id = genreMapAnilist[g];

          if (id) endpoint.searchParams.append('genre[]', id.toString());
        }
      }
    }

    return endpoint.toString();
  }
}

class MangadexProvider extends BaseProvider {
  public readonly usesMal = false;
  public readonly type = 'manga';
  public readonly id = 'mangadex';
  public readonly displayName = 'MangaDex';

  public readonly baseColor = '#9b3e26';

  public readonly parsingTarget = null;

  public async handle(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): Promise<string> {
    return 'https://mangadex.org';
  }

  public getSearchUrl(data: MediaData, preferences: UserPreferences, preferredTitle: string | null): string {
    return 'https://mangadex.org';
  }
}

//#endregion

const manager = new ProviderManager().register(
  new MiruroProvider(), // anime, default
  new HianimeProvider(), // anime
  new AnitakuProvider(), // anime
  new MangafireProvider(), // manga, default
  new MangadexProvider(), // manga
  new MangareaderProvider() // manga
);

// Runs on extension install, browser version update, extension version update
chrome.runtime.onInstalled.addListener(async () => {
  const existing: UserPreferences = await chrome.storage.sync.get(['directWatchPageLink', 'streamingSiteId', 'readingSiteId', 'langOrder', 'withGenres']);

  // If not exists, create missing
  if (!existing.directWatchPageLink) await chrome.storage.sync.set({ directWatchPageLink: true });
  if (!existing.streamingSiteId) await chrome.storage.sync.set({ streamingSiteId: 'miruro' });
  if (!existing.readingSiteId) await chrome.storage.sync.set({ readingSiteId: 'mangafire' });
  if (!existing.langOrder) await chrome.storage.sync.set({ langOrder: 'ren' });
  if (!existing.withGenres) await chrome.storage.sync.set({ withGenres: true });

  // const url = new URL(chrome.runtime.getURL('views/options.html'));
  // url.searchParams.append('installed', '');

  // chrome.tabs.create({ url: url.toString() });

  console.log('AW: Installed!');
});

chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete') {
    if (!tab.url) return console.log(`AW: No URL was found for tab ${tabId}`);

    const url = tab.url.split('/');
    console.log(`AW: Processing ${url.join('/')}`);

    if (url[2] !== 'anilist.co') return console.log(`AW: Domain ${url[2]} is not anilist.co, skipping processing...`);

    await chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ['scripts/content/agent.js']
      })
      .then(() => {
        console.log(`AW: Injected agent script for ${tab.url}`);
      })
      .catch(err => {
        console.warn(`An error ocurred but it was caught.\n\n${err}`);
      });

    if ((url[3] === 'anime' || url[3] === 'manga') && url[4] && url[5]) {
      console.log(`AW: Processing ${url[3]} page...`);

      const preferences: UserPreferences = await chrome.storage.sync.get(['directWatchPageLink', 'streamingSiteId', 'readingSiteId', 'langOrder', 'withGenres']);

      const data = await getMediaData(parseInt(url[4]), manager.getUserProvider(url[3], preferences).usesMal);
      // const data = await getMediaData(parseInt(url[4]), false);

      if (!data) return console.log(`AW: No data was found for ${url[4]}`);

      // Getting title
      const order = preferences.langOrder!.split('');

      console.log(`AW: Lang Order: ${order.join('')}`);

      const titles = [
        { lang: 'n', title: data.title?.native },
        { lang: 'r', title: data.title?.romaji },
        { lang: 'e', title: data.title?.english }
      ];

      titles.sort((a, b) => order.indexOf(a.lang) - order.indexOf(b.lang));

      const title = titles.find(t => t.title !== null && t.title !== undefined)?.title || null;

      const mediaUrl = await manager.handle(data, url[3], preferences, title).catch(e => {
        console.log(`AW: ERROR`, e);
        return null;
      });

      if (!mediaUrl || !mediaUrl.url) return console.log(`AW: No media url was found for ${url[4]}`);
      if (!mediaUrl.provider) return;

      const theme = (await getTheme()) ?? 'light';

      await chrome.scripting
        .executeScript({
          target: { tabId: tabId },
          func: async (media: MediaData, preferences: UserPreferences, mediaUrl: string, provider: BaseProvider, title: string | null, type: string, theme: 'light' | 'dark') => {
            const buttonId = `aniwatcher_button_hopefully_this_is_uniue`;

            console.log(`AW: Cleaning up ${document.URL}`);

            const existingAwButton = document.getElementById(buttonId);

            if (existingAwButton) {
              console.log('AW: Removing old button...');
              existingAwButton.remove();
            } else console.log('AW: No old button to remove.');

            console.log(`AW: Removing default anilist watch button...`);

            const nav = document.querySelector('#app > div.page-content > div > div.header-wrap > div.header > div > div.content > div');

            if (nav) {
              const watchBtn = nav.querySelector('a[href^="/anime/"][href*="/watch"]') as HTMLElement | null;

              if (watchBtn) {
                watchBtn.style.display = 'none';
              } else console.log('AW: No watch button to remove.');
            } else console.log('AW: Could not find nav.');

            if (!title) throw new Error('Title was not found!');

            console.log(`AW: Found title!`, title);

            // Construct the button
            console.log('AW: Constructing button...');

            function adjustBrightness(hex: string, percent: number) {
              hex = hex.replace(/^\s*#|\s*$/g, '');

              let r = parseInt(hex.substring(0, 2), 16);
              let g = parseInt(hex.substring(2, 4), 16);
              let b = parseInt(hex.substring(4, 6), 16);

              r = Math.min(255, Math.max(0, r + Math.round(r * percent)));
              g = Math.min(255, Math.max(0, g + Math.round(g * percent)));
              b = Math.min(255, Math.max(0, b + Math.round(b * percent)));

              const r2 = (r < 16 ? '0' : '') + r.toString(16);
              const g2 = (g < 16 ? '0' : '') + g.toString(16);
              const b2 = (b < 16 ? '0' : '') + b.toString(16);

              return `#${r2}${g2}${b2}`;
            }

            const colorNormal = theme === 'light' ? adjustBrightness(provider.baseColor, provider.normalAdjustLight) : adjustBrightness(provider.baseColor, provider.normalAdjustDark);
            const colorHover = theme === 'light' ? adjustBrightness(provider.baseColor, provider.hoverAdjustLight) : adjustBrightness(provider.baseColor, provider.hoverAdjustDark);

            const awButton = document.createElement('a');
            awButton.id = buttonId;
            awButton.setAttribute('data-v-5776f768', '');
            awButton.className = 'link';
            // awButton.innerText = ` ${provider.displayName} `;
            awButton.innerText = ` ${type === 'anime' ? 'Watch' : 'Read'} `;
            awButton.setAttribute('target', '_blank');
            awButton.style.color = colorNormal;
            awButton.style.transitionDuration = '150ms';
            awButton.addEventListener('mouseenter', () => {
              awButton.style.color = colorHover;
            });
            awButton.addEventListener('mouseleave', () => {
              awButton.style.color = colorNormal;
            });

            awButton.setAttribute('href', mediaUrl);

            // Append the button to the action panel
            const actionPanel = document.querySelector(`#app > div.page-content > div > div.header-wrap > div.header > div > div.content > div`);
            if (!actionPanel) throw new Error('Action Panel was not found!');

            const overview = actionPanel.firstElementChild;

            if (overview) {
              overview.insertAdjacentElement('afterend', awButton);
            } else {
              actionPanel.appendChild(awButton);
            }

            console.log(`AW: Button was appended to the action panel! Pointing to: ${mediaUrl}`);
          },
          args: [data, preferences, mediaUrl.url, mediaUrl.provider, title, url[3], theme]
        })
        .then(() => {
          console.log(`AW: Injected content script for ${tab.url}`);
        })
        .catch(err => {
          console.warn(`An error ocurred but it was caught.\n\n${err}`);
        });
    } else {
      console.log('AW: Not an anime/manga page');
    }
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getProviders') {
    const providers = manager.getAllIds().map(id => manager.getById(id)!);

    sendResponse(providers);
  }
});
