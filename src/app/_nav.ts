export const navigation = [
  {
    name: 'Home',
    url: '/homes',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: '7'
    }
  },
  {
    title: true,
    name: 'APPS'
  },
  {
    name: 'Zfm',
    url: '/zfm',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'ok'
    },
    children: [
      {
        name: 'Look',
        url: '/zfm',
        icon: 'icon-puzzle',
        children:[
          {
            name:'Search',
            url:'/zfm'
          }
        ]
      }      
    ]
  },
  {
    name: 'Golden Book',
    url: '/zhb',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'yet'
    }
  },
  {
    name: 'Zhb',
    url: '/zhb',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'yet'
    }
  },
  {
    name: 'Songs',
    url: '/songs',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'yet'
    }
  },
  {
    name: 'Mcmc',
    url: '/mcmc',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'yet'
    }
  },
  {
    name: 'Wellbing',
    url: '/wellbing',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'yet'
    }
  }
];
