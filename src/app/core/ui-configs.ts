export const uiConfigs = {
    home: {
        page: 'home',
        components: [
          {
            type: 'header',
            content: {
              logo: 'assets/logo.png',
              menu: [
                { label: 'Home', route: '/home' },
                { label: 'Recursos', route: '/recursos' },
                { label: 'Preço', route: '' },
                { label: 'Começar agora', route: '' },
                { label: 'Entrar', route: '' }
              ]
            }
          },
          { type: 'title', text: 'Nunca mais esqueça uma data importante.' },
          { type: 'paragraph', text: 'Receba lembretes no WhatsApp para aniversários, consultas e eventos importantes.' },
          { type: 'button', label: 'Comece de graça', action: 'startFree' },
          { type: 'image', src: 'assets/big-image.png' }
        ]
      },
      recursos: {
        page: 'recursos',
        components: [
          {
            type: 'header',
            content: {
              logo: 'assets/logo.png',
              menu: [
                { label: 'Home', route: '/home' },
                { label: 'Recursos', route: '/recursos' },
                { label: 'Preço', route: '' },
                { label: 'Começar agora', route: '' },
                { label: 'Entrar', route: '' }
              ]
            }
          },
          { type: 'title', text: 'Recursos do nosso app' },
          { type: 'paragraph', text: 'Aqui você encontra todas as funcionalidades incríveis!' }
        ]
      }
}