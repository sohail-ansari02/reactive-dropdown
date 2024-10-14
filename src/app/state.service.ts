import { District } from './interfaces/districts';
import { IndianStates } from './constants/indianStats';
import { Injectable } from '@angular/core';
import { districts } from './constants/districs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor() { }
  get stats(){
    return of(IndianStates);
  }

  districtByStateId(idList: Number[]){
    const res: District[] = [];
    idList.forEach((id)=>{
      districts.forEach((dist)=>{
        if(id == dist.stateId){
          res.push(dist);
        }
      })
    });
    
    return of(res);
  }
  
}
