import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../../services/paises.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {
  paises: any = [];
  constructor(private paisesServices: PaisesService) {
    if (localStorage.getItem('paises')){
      this.paises = JSON.parse(localStorage.getItem('paises'));
    }else {
      this.paisesServices.loadCountries().subscribe((res) => {
        this.paises = res;
        localStorage.setItem('paises', JSON.stringify(res));
      });
    }
   }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>): void {
    moveItemInArray(this.paises, event.previousIndex, event.currentIndex);
    localStorage.setItem('paises', JSON.stringify(this.paises));
  }

}
