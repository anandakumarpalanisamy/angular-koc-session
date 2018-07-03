import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-votetaker',
  templateUrl: './votetaker.component.html',
  styleUrls: ['./votetaker.component.css']
})
export class VotetakerComponent implements OnInit, OnDestroy {

  agreed = 0;
  disagreed = 0;
  voters = ['Mr. IQ', 'Ms. Universe', 'Bombasto'];

  constructor() { }

  ngOnInit() {
    console.log('Inside VoterTakerComponent ngOnInit(...)');
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

  ngOnDestroy(): void {
    console.log('Inside VoterTakerComponent ngOnDestroy(...)');
  }
}
