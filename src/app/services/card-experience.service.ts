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
      project: "Landing Page",
      contribution: " Developer  FullStack",
      tecnologic: "Angular-17, Figma"
    },
    { 
      id: 'web2pay',
      project: "Framework FullStack",
      contribution: "Designer Layout ",
      tecnologic: "html, css, js"
    },
    { 
      id: 'nallubaby',
      project: "Company System",
      contribution: " Developer FullStack",
      tecnologic: "Angular-9, Firebase"
    },
    { 
      id: 'artesanalbaby',
      project: "Company System",
      contribution: " Developer FullStack",
      tecnologic: "Python, Web2py "
    }
  ]

  getCardExperiences(){
    return this.dataCards;
  }

}

