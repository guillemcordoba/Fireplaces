import { FireplaceHome } from './../models/home.model';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Fireplace } from '../models/fireplaces.model';

@Injectable()
export class FireplacesService {
  constructor(private angularFire: AngularFireDatabase) {}

  public getFireplaces(): Observable<Fireplace[]> {
    return this.angularFire.list<Fireplace>('fireplaces').valueChanges();
  }

  public getFireplacesHome(fireplaceId: string): Observable<FireplaceHome> {
    return Observable.of(<FireplaceHome>{
      fireplace: {
        name: fireplaceId,
        icon: '',
        location: {
          latitude: 41.603907,
          longitude: 2.300671
        },
        type: 'Associació'
      },
      tabs: {
        home: {
          name: 'Home',
          icon: 'home'
        },
        custom: [
          {
            name: 'Cartells'
          }
        ]
      }
    });
  }
}
