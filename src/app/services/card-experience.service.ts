import { Injectable } from '@angular/core';
import { CardExperience } from '../interfaces/card-experience';

@Injectable({
  providedIn: 'root'
})
export class CardExperienceService {

  constructor() { }


  dataCards: CardExperience[] = [
    { 
      id: 'portifolio',
      project: "Portifolio LP-SSR",
      contribution: " Developer  FullStack",
      tecnologic: "Angular-17, Figma",
      link: 'https://josevicentedesousa.surge.sh/',
      linkGit: 'https://github.com/josevsousa/landing-page-ssr',
      linkFigma: 'https://www.figma.com/design/WmBl93CrSqL0GYZQq68dv2/loading-page?node-id=0-1&t=MhTR2tPuPrgPNdJc-1'
    },
    { 
      id: 'web2pay',
      project: "Framework FullStack",
      contribution: "Designer Layout ",
      tecnologic: "html, css, js",
      link: 'http://web2py.com.com',

    },
    { 
      id: 'nallubaby',
      project: "Company System",
      contribution: " Developer FullStack",
      tecnologic: "Angular-8, Firebase",
      link: 'https://sis-nallubaby.web.app/',
      linkGit: 'https://github.com/josevsousa/sis-nallubaby'
    },
    { 
      id: 'artesanalbaby',
      project: "Company System",
      contribution: " Developer FullStack",
      tecnologic: "Python, Web2py ",
      link: 'https://josevsousa.pythonanywhere.com/artesanalbaby/',
      linkGit: 'https://github.com/josevsousa/SIS_AB_FAB'
    },
    { 
      id: 'bitsol',
      project: "Company Control",
      contribution: " Developer FullStack",
      tecnologic: "Front-end, Bootstrap",
      link: 'http://bitsol.com.br/'
    }
  ]

  getCardExperiences(){
    return this.dataCards;
  }

}

