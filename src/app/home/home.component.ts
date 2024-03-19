import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 service1 = ['Banner','Posters','Stickers','Display systems','Arches','Blow ups']
 service2 = ['Translite','Sunpack sheets','Hoardings','Designing','Visual Ad creation','Acrylic'];
 promotions = [ 'Product Photography','Inshop Promotion','School,College','Telemarketing','Product management','Mailers',
              'Mobile Marketing','Market Research','Marketsurvey','Rural,Movie','Product demonstration','Home to Home',]
}
