import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShareService } from '../share.service';
import { StateService } from '../state.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childMessage: any;
  public childOwnMessage = 'I am from Child Component';
  @Output() messageEvent = new EventEmitter<string>();
  constructor(
    private shareService: ShareService,
    private state: StateService
    ) { }

  clickFunction() {
    this.messageEvent.emit('message emitted from child');
    this.shareService.changeMessage('button clicked so trigger emission');

    console.log(this.state.get(this.state.data.username));
  }
  ngOnInit() {
    this.shareService.currentMessage.subscribe(data => {
      console.log('Share Child message', data);
    });
  }

}
