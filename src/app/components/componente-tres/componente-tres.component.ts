import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-tres',
  templateUrl: './componente-tres.component.html',
  styleUrls: ['./componente-tres.component.scss'],
})
export class ComponenteTresComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  ciudades:any[]=[
    {idc:1,ciudad:"alameda"},
    {idc:2,ciudad:"antonio varas"},
    {idc:3,ciudad:"maipu"},
    {idc:4,ciudad:"melipilla"},
    {idc:5,ciudad:"plaza norte"},
    {idc:6,ciudad:"plaza oeste"},
    {idc:7,ciudad:"vespucio"},
    {idc:8,ciudad:"vinna del mar"},
  ]
  dato: any={
    desde:"",
    hasta:""
  }




}
