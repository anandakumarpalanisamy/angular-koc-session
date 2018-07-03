import { Component, OnInit, EventEmitter, Input, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit, OnDestroy {

  @Input() name: string;
  @Output() voted = new EventEmitter<boolean>();

  didVote = false;

  constructor() { }

  ngOnInit() {
    console.log('Inside Voter Component ngOnInit(...)');
  }

  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }

  ngOnDestroy() {
    console.log('Inside Voter Component ngOnDestroy(...)');
  }

}
