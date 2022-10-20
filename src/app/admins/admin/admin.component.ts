import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private oFormBuilder: FormBuilder,private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModal(targetModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static',
        size: 'md'
    });

}

}
