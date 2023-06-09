import { CUSTOM_URL_SCHEME_ID, SHORTCUT_ID } from './consts';
import { App } from './types';

export const appList: App[] = [
  {
    id: 47,
    name: 'Find My',
    actions: [
      {
        id: 0,
        urlScheme: 'fmip1://',
        description: 'Open Find My',
      },
    ],
  },
  {
    id: 9,
    name: 'Weather',
    actions: [
      {
        id: 0,
        urlScheme: 'weather://',
        description: 'Open Weather',
      },
    ],
  },
  {
    id: 5,
    name: 'Naver',
    actions: [
      {
        id: 0,
        urlScheme: 'naversearchapp://',
        description: 'Open Naver',
      },
    ],
  },
  {
    id: 25,
    name: 'Naver Mail',
    actions: [
      {
        id: 0,
        urlScheme: 'navermail://',
        description: 'Open Naver Mail',
      },
    ],
  },
  {
    id: 28,
    name: 'Naver Blog',
    actions: [
      {
        id: 0,
        urlScheme: 'naverblog://',
        description: 'Open Naver Blog',
      },
    ],
  },
  {
    id: 27,
    name: 'Naver Map',
    actions: [
      {
        id: 0,
        urlScheme: 'navermap://',
        description: 'Open Naver Map',
      },
    ],
  },
  {
    id: 29,
    name: 'Naver Cafe',
    actions: [
      {
        id: 0,
        urlScheme: 'navercafe://',
        description: 'Open Naver Cafe',
      },
    ],
  },
  {
    id: SHORTCUT_ID,
    name: 'Shortcuts',
    actions: [
      {
        id: 0,
        urlScheme: 'shortcuts://',
        description: 'Open Shortcuts',
      },
      {
        id: 1,
        urlSchemeFunc: (param: string) =>
          `shortcuts://run-shortcut?name=${param}`,
        description: 'Run Shortcut',
        placeholder: 'Shortcut name',
        descriptionFunc: (param: string) => `Run ${param} Shortcut`,
      },
    ],
  },
  {
    id: 43,
    name: 'Karrot',
    actions: [
      {
        id: 0,
        urlScheme: 'daangn://',
        description: 'Open Karrot',
      },
    ],
  },
  {
    id: 13,
    name: 'Notes',
    actions: [
      {
        id: 0,
        urlScheme: 'mobilenotes://',
        description: 'Open Notes',
      },
    ],
  },
  {
    id: 0,
    name: 'Messages',
    actions: [
      {
        id: 0,
        urlScheme: 'messages://',
        description: 'Open Messages',
      },
      {
        id: 1,
        urlScheme: 'sms://',
        description: 'New Message',
      },
      {
        id: 2,
        urlSchemeFunc: (param: string) => `sms://${param}`,
        description: 'Send a Message to Your Friend',
        placeholder: 'Phone number',
        descriptionFunc: (param: string) => `Send a Message to ${param}`,
      },
    ],
  },
  {
    id: 24,
    name: 'Melon',
    actions: [
      {
        id: 0,
        urlScheme: 'fb329785880437397://',
        description: 'Open Melon',
      },
    ],
  },
  {
    id: 15,
    name: 'Reminders',
    actions: [
      {
        id: 0,
        urlScheme: 'x-apple-reminderkit://',
        description: 'Open Reminders',
      },
    ],
  },
  {
    id: 33,
    name: 'Baemin',
    actions: [
      {
        id: 0,
        urlScheme: 'smartbaedal://	',
        description: 'Open Baemin',
      },
    ],
  },
  {
    id: 34,
    name: 'Between',
    actions: [
      {
        id: 0,
        urlScheme: 'between://	',
        description: 'Open Between',
      },
    ],
  },
  {
    id: 16,
    name: 'Photos',
    actions: [
      {
        id: 0,
        urlScheme: 'photos-redirect://',
        description: 'Open Photos',
      },
    ],
  },
  {
    id: 17,
    name: 'Settings',
    actions: [
      {
        id: 0,
        urlScheme: 'App-prefs://',
        description: 'Open Settings',
      },
    ],
  },
  {
    id: 42,
    name: 'Starbucks',
    actions: [
      {
        id: 0,
        urlScheme: 'starbucks://',
        description: 'Open Starbucks',
      },
    ],
  },
  {
    id: 7,
    name: 'Music',
    actions: [
      {
        id: 0,
        urlScheme: 'music://',
        description: 'Open Music',
      },
    ],
  },
  {
    id: 1,
    name: 'Instagram',
    actions: [
      {
        id: 0,
        urlScheme: 'instagram://',
        description: 'Open Instagram',
      },
      {
        id: 1,
        urlScheme: 'instagram://reels_home',
        description: 'Open Instagram Reels',
      },
      {
        id: 2,
        urlScheme: 'instagram://camera',
        description: 'Post a Story on Instagram',
      },
      {
        id: 3,
        urlSchemeFunc: (param: string) => `instagram://user?username=${param}`,
        description: "View Your Friend's Instagram",
        placeholder: 'Instagram ID without @',
        descriptionFunc: (param: string) => `View @${param} on Instagram`,
      },
    ],
  },
  {
    id: 4,
    name: 'Phone',
    actions: [
      {
        id: 0,
        urlScheme: 'tel://',
        description: 'Open Phone',
      },
      {
        id: 1,
        urlSchemeFunc: (param: string) => `tel://${param}`,
        description: 'Call Your Friend',
        placeholder: 'Phone number',
        descriptionFunc: (param: string) => `Call ${param}`,
      },
    ],
  },
  {
    id: 19,
    name: 'Stocks',
    actions: [
      {
        id: 0,
        urlScheme: 'stocks://',
        description: 'Open Stocks',
      },
    ],
  },
  {
    id: 18,
    name: 'Wallet',
    actions: [
      {
        id: 0,
        urlScheme: 'shoebox://',
        description: 'Open Wallet',
      },
    ],
  },
  {
    id: 20,
    name: 'Maps',
    actions: [
      {
        id: 0,
        urlScheme: 'map://',
        description: 'Open Maps',
      },
    ],
  },
  {
    id: 41,
    name: 'Kakao T',
    actions: [
      {
        id: 0,
        urlScheme: 'kakaot://',
        description: 'Open Kakao T',
      },
    ],
  },
  {
    id: 11,
    name: 'KakaoMap',
    actions: [
      {
        id: 0,
        urlScheme: 'kakaomap://',
        description: 'Open KakaoMap',
      },
    ],
  },
  {
    id: 6,
    name: 'KakaoTalk',
    actions: [
      {
        id: 0,
        urlScheme: 'kakaotalk://',
        description: 'Open KakaoTalk',
      },
    ],
  },
  {
    id: 23,
    name: 'KakaoPay',
    actions: [
      {
        id: 0,
        urlScheme: 'kakaopay://',
        description: 'Open KakaoPay',
      },
    ],
  },
  {
    id: 14,
    name: 'Calendar',
    actions: [
      {
        id: 0,
        urlScheme: 'calshow://',
        description: 'Open Calendar',
      },
    ],
  },
  {
    id: 38,
    name: 'Coupang',
    actions: [
      {
        id: 0,
        urlScheme: 'coupang://	',
        description: 'Open Coupang',
      },
    ],
  },
  {
    id: 40,
    name: 'Tabling',
    actions: [
      {
        id: 0,
        urlScheme: 'tabling://',
        description: 'Open Tabling',
      },
    ],
  },
  {
    id: 2,
    name: 'Toss',
    actions: [
      {
        id: 0,
        urlScheme: 'supertoss://',
        description: 'Open Toss',
      },
      {
        id: 1,
        urlScheme: 'supertoss://stock',
        description: 'Open Toss Invest',
      },
      {
        id: 2,
        urlScheme: 'supertoss://send',
        description: 'Transfer Money with Toss',
      },
    ],
  },
  {
    id: 10,
    name: 'Files',
    actions: [
      {
        id: 0,
        urlScheme: 'sharedDocuments://',
        description: 'Open iCloud Drive',
      },
    ],
  },
  {
    id: 37,
    name: 'Hyundai Card',
    actions: [
      {
        id: 0,
        urlScheme: 'hyundaicardappcard://	',
        description: 'Open Hyundai Card',
      },
    ],
  },
  {
    id: 26,
    name: 'BAND',
    actions: [
      {
        id: 0,
        urlScheme: 'bandapp://',
        description: 'Open BAND',
      },
    ],
  },
  {
    id: 44,
    name: 'Chrome',
    actions: [
      {
        id: 0,
        urlScheme: 'googlechrome://',
        description: 'Open Chrome',
      },
    ],
  },
  {
    id: 35,
    name: 'Facebook',
    actions: [
      {
        id: 0,
        urlScheme: 'fb://	',
        description: 'Open Facebook',
      },
    ],
  },
  {
    id: 8,
    name: 'FaceTime',
    actions: [
      {
        id: 0,
        urlScheme: 'facetime://',
        description: 'Open FaceTime',
      },
      {
        id: 1,
        urlSchemeFunc: (param: string) => `facetime://${param}`,
        description: 'FaceTime with Your Friend',
        placeholder: 'Phone number',
        descriptionFunc: (param: string) => `FaceTime call to ${param}`,
      },
      {
        id: 2,
        urlSchemeFunc: (param: string) => `facetime-audio://${param}`,
        description: 'Audio FaceTime with Your Friend',
        placeholder: 'Phone number',
        descriptionFunc: (param: string) => `Audio FaceTime call to ${param}`,
      },
    ],
  },
  {
    id: 12,
    name: 'GitHub',
    actions: [
      {
        id: 0,
        urlScheme: 'github://',
        description: 'Open GitHub',
      },
    ],
  },
  {
    id: 45,
    name: 'Gmail',
    actions: [
      {
        id: 0,
        urlScheme: 'googlegmail://',
        description: 'Open Gmail',
      },
    ],
  },
  {
    id: 32,
    name: 'GoodNotes 5',
    actions: [
      {
        id: 0,
        urlScheme: 'goodnotes5://',
        description: 'Open GoodNotes 5',
      },
    ],
  },
  {
    id: 49,
    name: 'Google',
    actions: [
      {
        id: 0,
        urlScheme: 'google://',
        description: 'Open Google',
      },
    ],
  },
  {
    id: 21,
    name: 'Google Calendar',
    actions: [
      {
        id: 0,
        urlScheme: 'com.google.calendar://',
        description: 'Open Google Calendar',
      },
      {
        id: 1,
        urlScheme: 'com.google.calendar://?action=create',
        description: 'Create an Event on Google Calendar',
      },
    ],
  },
  {
    id: 50,
    name: 'Google Drive',
    actions: [
      {
        id: 0,
        urlScheme: 'googledrive://',
        description: 'Open Google Drive',
      },
    ],
  },
  {
    id: 39,
    name: 'Google Maps',
    actions: [
      {
        id: 0,
        urlScheme: 'googlemaps://',
        description: 'Open Google Maps',
      },
    ],
  },
  {
    id: 36,
    name: 'Mail',
    actions: [
      {
        id: 0,
        urlScheme: 'message://	',
        description: 'Open Mail',
      },
    ],
  },
  {
    id: 30,
    name: 'Netflix',
    actions: [
      {
        id: 0,
        urlScheme: 'nflx://',
        description: 'Open Netflix',
      },
    ],
  },
  {
    id: 48,
    name: 'Safari',
    actions: [
      {
        id: 0,
        urlScheme: 'x-web-search://',
        description: 'Open Safari',
      },
      {
        id: 1,
        urlSchemeFunc: (param: string) => `${param}`,
        description: 'Go to a Website Using Safari',
        placeholder: 'https://... or http://...',
        descriptionFunc: (param: string) => `Go to ${param}`,
      },
    ],
  },
  {
    id: 31,
    name: 'Spotify',
    actions: [
      {
        id: 0,
        urlScheme: 'spotify://',
        description: 'Open Spotify',
      },
    ],
  },
  {
    id: 46,
    name: 'TV',
    actions: [
      {
        id: 0,
        urlScheme: 'videos://',
        description: 'Open TV',
      },
    ],
  },
  {
    id: 3,
    name: 'YouTube',
    actions: [
      {
        id: 0,
        urlScheme: 'youtube://',
        description: 'Open YouTube',
      },
      {
        id: 1,
        urlScheme: 'youtube://shorts',
        description: 'Open YouTube Shorts',
      },
    ],
  },
  {
    id: 22,
    name: 'Youtube Music',
    actions: [
      {
        id: 0,
        urlScheme: 'youtubemusic://',
        description: 'Open YouTube Music',
      },
      {
        id: 1,
        urlSchemeFunc: (param: string) => `youtubemusic://watch?list=${param}`,
        description: 'Play Playlist on YouTube Music',
        placeholder: 'Playlist name',
        descriptionFunc: (param: string) => `Play ${param} playlist`,
      },
    ],
  },
  {
    id: CUSTOM_URL_SCHEME_ID,
    name: 'Custom URL Scheme',
    actions: [
      {
        id: 0,
        urlSchemeFunc: (param: string) => `${param}`,
        description: 'Open Custom URL Scheme',
        placeholder: 'URL scheme',
        descriptionFunc: (param: string) => `Go to ${param}`,
      },
    ],
  },
];
