import { Component, OnInit } from '@angular/core';
import * as notes from '../../../assets/ReleaseNotes.json';
import { version } from 'package.json';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class cAboutComponent implements OnInit {
  nApplicationBuildNumber: any = '0.0.0';
  nPlatfromBuildNumber: any = '0.0.0';
  sBuildVersion : string;
  bDisplayBuildNumber : boolean =false;
  lReleaseNotes : any = [];
  nNotesPageSize = 5;
  nNotesCurrentpage = 1;
  bLoading: boolean = false
  constructor() { }

  ngOnInit(): void {
    this.sBuildVersion = version;
    this.lReleaseNotes = notes;
    console.log('AboutComponent : Release notes  ==> ',this.lReleaseNotes);
  }

}
