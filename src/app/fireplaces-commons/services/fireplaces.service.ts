import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Fireplace } from '../models/fireplaces.model';

@Injectable()
export class FireplacesService {

  constructor(private angularFire: AngularFireDatabase) { }

  public getFireplaces(): Observable<Fireplace[]> {
    return this.angularFire.list<Fireplace>('fireplaces').valueChanges();
  }

}
