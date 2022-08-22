import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  showPincode: boolean = false;
  header_variable = false;
  dropdownMenu: boolean = false;
  dropdownMenuTwo: boolean = false;
  dropdownMenuThree: boolean = false;

  ngOnInit(): void {}
  @HostListener('document:scroll')
  scrollfunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      this.header_variable = true;
    } else {
      this.header_variable = false;
    }
  }

  showOrhidePincodeform() {
    this.showPincode = !this.showPincode;
  }
  dropdown() {
    this.dropdownMenu = !this.dropdownMenu;
  }
  dropdownTwo() {
    this.dropdownMenuTwo = !this.dropdownMenuTwo;
  }
  dropdownThree() {
    this.dropdownMenuThree = !this.dropdownMenuThree;
  }
  manuicons: boolean = false;
  show() {
    if (this.manuicons == false) {
      this.manuicons = true;
    } else {
      this.manuicons = false;
    }
  }
}
