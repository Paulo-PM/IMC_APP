import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public altura:string;
  public peso: string;
  public calculo: string;
  public resultado: number;


  calculoImc(){
    let a = parseFloat(this.altura);
    let p = parseFloat(this.peso);
    this.resultado = p/(a*a);

    if(this.resultado <18.5){
      this.calculo = "Abaixo do peso";
    }
    else if(this.resultado >= 18.5 && this.resultado <24.9){
      this.calculo ="Peso normal";
    }
    else if(this.resultado >= 24.9 && this.resultado <=29.9){
      this.calculo ="Sobrepeso";
    }
    else if(this.resultado >= 30 && this.resultado <=34.9){
      this.calculo ="Obesidade grau I";
    }
    else if(this.resultado >= 35 && this.resultado <=39.9){
      this.calculo ="Obesidade grau II";
    }
    else if(this.resultado >= 40 ){
      this.calculo ="Obesidade grau III";
    }

  }
}
