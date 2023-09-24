import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salarios',
  templateUrl: './salarios.component.html',
  styleUrls: ['./salarios.component.css']
})
export class SalariosComponent  implements OnInit {

  salario: number = 0
  renta: number = 0
  afp: number = 0
  isss:number = 0
  calculoisss:number = 0
  salarioFinal = 0
  constructor() {}

  ngOnInit(): void {
      
  }

  //Impuesto sobre la renta
  pressKey(miVariable: any) {
    console.log("test")
    this.salario =+miVariable.target.value
    this.afp =+miVariable.target.value
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

    //calculo de la AFP.
      this.afp = this.salario * 0.0725

    //Calculo del ISSS.
      this.calculoisss = this.salario * 0.03
      if(this.calculoisss <= 30.00){
        this.isss = this.salario * 0.03
      }else{
        this.isss = 30.00
      } 
    
     //Salario liquido a cancelar
     this.salarioFinal = this.salario - this.afp - this.isss - this.renta 

  }



}
