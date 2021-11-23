import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Doctor } from '../models/doctor.model';

@Injectable()
export class DoctorService {
  selectedDoctor: Doctor;
  doctors: Doctor[];
  readonly baseURL = 'http://localhost:3000/doctors';

  constructor(private http: HttpClient) { }

  postDoctor(doct: Doctor) {
    return this.http.post(this.baseURL, doct);
  }

  getDoctorList() {
    return this.http.get(this.baseURL);
  }

  putDoctor(doct: Doctor) {
    return this.http.put(this.baseURL + `/${doct._id}`, doct);
  }

  deleteDoctor(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
