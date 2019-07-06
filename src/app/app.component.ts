import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { ShareService } from './share.service';
import { StateService } from './state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'final-app';
  public message = 'Message from Parent Component';
  public childMessage = '';
  @ViewChild(ChildComponent, {static: false}) child;
  constructor(
    private shareService: ShareService,
    private state: StateService
    ) { }

  ngAfterViewInit() {
    this.shareService.currentMessage.subscribe((data) => {
      console.log('Parent Share Message:', data);
    });
    this.state.set(this.state.data.username, 'Elango');
  }

  receiveMsg($event){
    console.log($event);
  }
}
