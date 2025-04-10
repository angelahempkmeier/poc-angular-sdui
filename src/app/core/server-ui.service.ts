import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { uiConfigs } from './ui-configs';

@Injectable({
  providedIn: 'root'
})

interface UiComponent {
  type: string;
  text?: string;
  label?: string;
  action?: string;
  src?: string;
  content?: {
    logo: string;
    menu: {
      label: string;
      route: string
    }[];
  };
}

interface PageConfig {
  page: string;
  components: UiComponent[];
}

export class ServerUiService {
  
  getPageConfig(page: string): Observable<PageConfig> {
    const configs: { [key: string]: PageConfig } = {
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
    };
    return of(configs[page] || { page, components: [] });
  }
}
