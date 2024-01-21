import { Component } from '@angular/core';
import { MovieserviceService } from '../service/movieservice.service';

@Component({
  selector: 'app-moviefilter',
  templateUrl: './moviefilter.component.html',
  styleUrls: ['./moviefilter.component.scss'],
  providers:[MovieserviceService]
})
export class MoviefilterComponent {
 constructor(public movieservice:MovieserviceService){}
}
