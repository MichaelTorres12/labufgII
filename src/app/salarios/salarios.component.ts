import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent  implements OnInit {

  salario: number = 0
  renta: number = 0

  constructor() {}

  ngOnInit(): void {
      
  }

  pressKey(miVariable: any) {
    console.log("test")
    this.salario =+miVariable.target.value

    if (this.salario >= 0.01 && this.salario <= 487.60) {

      this.renta = 0
    }

    else if (this.salario >= 487.61 && this.salario <= 642.85) {

      this.renta = this.salario * 0.1
    }

    else if (this.salario >= 642.86 && this.salario <= 915.81) {

      this.renta = this.salario * 0.1
    }

    else if (this.salario >= 915.82 && this.salario <= 2058.67) {

      this.renta = this.salario * 0.2
    }

    else if (this.salario >= 2058.68) {

      this.renta = this.salario * 0.3
    }
  }

}
