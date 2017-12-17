import { Injectable } from '@angular/core';
import {Root, data} from './roots';

@Injectable()
export class DataService {



  constructor() {

  }

  getByLetter(letter): Array<Root> {
    return data[letter];
  }

}
