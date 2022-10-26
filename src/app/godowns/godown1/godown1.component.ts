import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-godown1',
  templateUrl: './godown1.component.html',
  styleUrls: ['./godown1.component.css']
})
export class Godown1Component implements OnInit {

  constructor(private oFormBuilder: FormBuilder,private modalService: NgbModal) { }
  mdbEditor: true
  ngOnInit(): void {
  }
  openModal(targetModal) {
    this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static',
        size: 'md'
    });
    
    $('.dataTables_length').addClass('bs-select');

}

}
