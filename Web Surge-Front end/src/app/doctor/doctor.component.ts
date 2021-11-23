import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor.model';
import {AuthService} from '../services/auth.service';



@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css'],
  providers: [DoctorService]
})
export class DoctorComponent implements OnInit {

  constructor(public doctorService: DoctorService,public _authService:AuthService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshDoctorList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.doctorService.selectedDoctor = {
      _id: "",
      name: "",
      address: "",
      mobile_no: "",
     email: ""
    }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.doctorService.postDoctor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDoctorList();

      });
    }
    else {
      this.doctorService.putDoctor(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshDoctorList();
  
      });
    }
  }

  refreshDoctorList() {
    this.doctorService.getDoctorList().subscribe((res) => {
      this.doctorService.doctors = res as Doctor[];
    });
  }

  onEdit(doct: Doctor) {
    this.doctorService.selectedDoctor = doct;
  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.doctorService.deleteDoctor(_id).subscribe((res) => {
        this.refreshDoctorList();
        this.resetForm(form);
      });
    }
  }
}
