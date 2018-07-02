import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showHome = true;
  showRadioControlExample = false;
  showCheckBoxControlExample = false;
  showTemplateVsReactiveForms = false;

  // This is poor way to do this type of logic.... But, just setting-up this like below
  // for not introducing the Routing concept right now - and to save some time.
  // Later we will migrate this example with Routing (which doesn't  require this bad code)
  select(title) {
    if (title === 'TemplateVsReactiveForms') {
      this.showHome = false;
      this.showRadioControlExample = false;
      this.showCheckBoxControlExample = false;
      this.showTemplateVsReactiveForms = true;
    } else if (title === 'RadioControlExample') {
      this.showHome = false;
      this.showRadioControlExample = true;
      this.showCheckBoxControlExample = false;
      this.showTemplateVsReactiveForms = false;
    } else if (title === 'CheckBoxControlExample') {
      this.showHome = false;
      this.showRadioControlExample = false;
      this.showCheckBoxControlExample = true;
      this.showTemplateVsReactiveForms = false;
    } else {
      this.showHome = true;
      this.showRadioControlExample = false;
      this.showCheckBoxControlExample = false;
      this.showTemplateVsReactiveForms = false;
    }
  }
}
