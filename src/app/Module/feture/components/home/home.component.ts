import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lehngacholiPage2 } from 'src/Data/Saree/lenghaCholiPage2';
import { mensShoesPage1 } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menJeans: any;
  womenGouns: any;
  lenghaCholi: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 5);
    this.womenGouns = gounsPage1.slice(0, 5);
    this.lenghaCholi = lehngacholiPage2.slice(0, 5);
    this.mensShoes = mensShoesPage1.slice(0, 5);
    this.mensKurta = mens_kurta.slice(0, 5);
  }
}
