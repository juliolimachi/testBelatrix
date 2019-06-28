import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { formatNumber } from '@angular/common';
import { FormatoNumeroPipe } from '../shared/pipes/formato-numero.pipe';
import { Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
  providers: [ FormatoNumeroPipe ]
})
export class CurrencyComponent implements OnInit {

  

 
  rate = {};
  rates = [];
  rateKeys = [];
  symbol = {};
  symbols = [];
  symbolKeys = [];
  monto:string;

  message;
  constructor(public dataService: DataService,private capitalize: FormatoNumeroPipe) {}

  ngOnInit() {
    
  
  }

   numberWithCommas(n) {

    while (n.toString().indexOf(",") != -1)
    {
        n = n.replace(",", "");
    }
    var parts = n.toString().split(".");
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

  onConvertir(){

    this.dataService.currencyRate().subscribe(
      data => {
        debugger;
        this.rate = data["rates"];
        this.rateKeys = Object.keys(this.rate);
        for (var i = 0; i < this.rateKeys.length; i++) {
          this.rates.push({
            code: this.rateKeys[i],
            text: this.rate[this.rateKeys[i]]
          });
        }

    
        var euro = <HTMLInputElement>document.getElementById('euro');

        let ratio =this.rates[149].text/this.rates[46].text;
        let cal= ratio*euro.valueAsNumber;
        this.monto=this.numberWithCommas(cal);
       

      },
      err => {}
    );


    
  }


}
