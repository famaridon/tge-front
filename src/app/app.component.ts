import { Component, OnInit } from '@angular/core';
import { TegService } from './services/teg.service';
import { Observable } from 'rxjs';
import { RxStompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'teg-front';

  constructor() { }

  public ngOnInit() {
  }

}
