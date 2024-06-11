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
      project: "José Vicente de Sousa",
      contribution: " Developer  FullStack",
      tecnologic: "Python, Web2py "
    },
    { 
      id: 'web2pay',
      project: "Framework FullStack",
      contribution: "Designer Layout ",
      tecnologic: "html, css, js"
    },
    { 
      id: 'nallubaby',
      project: "Company M System",
      contribution: " Developer FullStack",
      tecnologic: "Python, Web2py"
    },
    { 
      id: 'artesanalbaby',
      project: "Company M System",
      contribution: " Developer FullStack",
      tecnologic: "Python, Web2py "
    }
  ]

  getCardExperiences(){
    return this.dataCards;
  }

}

