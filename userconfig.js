const CONFIG = new Config({
  crypto: {
    coin: 'ETH',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Kolkata, India',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: ['todo-list','crypto-rate'],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'work',
      background_url: 'src/img/banners/bg-4.gif',
      categories: [
        {
          name: 'quick access',
          links: [
            {                                                                                                                                                                                               
              url: 'https://web.whatsapp.com/',
              icon: 'brand-whatsapp',
              icon_color: '#25d366'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: 'red'
            },
            {
              url: 'https://reddit.com',
              icon: 'brand-reddit',
              icon_color: '#ff5700'
            },
            {
              url: 'https://drive.google.com',
              icon: 'brand-google-drive',
              icon_color: '#4285f4'
            },
            {
              url: 'https://github.com',
              icon: 'brand-github',
              icon_color: '#545464'
            },
            {
              url: 'https://discord.gg',
              icon: 'brand-discord',
              icon_color: '#5865f2'
            },
          ]
        },
        {
          name: 'work links',
          links: [
            {
              name: 'linkedin',
              url: 'https://www.linkedin.com/in/pronay-dutta-2a6304213/',
              icon: 'brand-linkedin',
              icon_color: '#0A66C2'
            },
            {
              name: 'mail',
              url: 'https://proton.me/mail',
              icon: 'mail',
              icon_color: '#6d4aff'
            },
            {
              name: 'Gmail',
              url: 'https://mail.google.com',
              icon: 'mail',
              icon_color: '#b22222'
            }
          ]
        }
      ]
    },
    {
      name: 'boards',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            url: 'https://4chan.org/wsg/',
            name: '/wsg/'
          },
          {
            name: '/out/',
            url: 'https://4chan.org/out',
            icon: 'leaf',
            icon_color: '#64876d'
          },
          {
            url: 'https://4chan.org/s4s/',
            name: '/s4s/',
            icon: 'mood-confuzed',
            icon_color: 'yellow'
          },
          {
            name: '/wg/',
            url: 'https://4chan.org/wg/',
          },
          {
            name: '/lit/',
            url: 'https://4chan.org/lit/',
            icon: 'book'
          },
          {
            name: '/v/',
            url: 'https://4chan.org/v/',
            icon: 'device-gamepad',
            icon_color: '#8b647b'
          },
          {
            name: '/p/',
            url: 'https://4chan.org/p/',
            icon: 'camera'
          }
        ]
      },
      {
        name: 'Comfy',
        links: [
          {
            name: '/lounge/',
            url: 'https://sushigirl.us/lounge/catalog.html'
          },
          {
            name: '/comfy/',
            url: 'https://anon.cafe/comfy/catalog.html'
          }
        ]
      },
      {
        name: 'Technology',
        links: [
          {
            name: '/g/',
            url: 'https://4chan.org/g/',
          },
          {
            name: '/Δ/',
            url: 'https://legacy.arisuchan.jp/%CE%94/catalog.html'
          },
          {
            name: '/λ/',
            url: 'https://www.lainchan.org/%CE%BB/catalog.html'
          },
          {
            name: '/sec/',
            url: 'https://www.lainchan.org/sec/catalog.html'
          },
          {
            name: '/prog/',
            url: 'https://boards.420chan.org/prog/',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'music',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [
        {
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
            },
            {
              url: 'https://open.spotify.com/',
              icon: 'brand-spotify',
              icon_color: '#1ED760'
            },
            {
              url: 'https://r-a-d.io/',
              icon: 'radio'
            },
          ]
        },
        {
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'linux docs',
              url: 'https://linux.die.net/',
              icon: 'prompt',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
