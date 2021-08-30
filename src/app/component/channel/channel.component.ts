import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {
  @Input() name: string;
  @Input() isSubscribed: boolean;
  @Input() picture: string;

  constructor() {}

  ngOnInit() {}
}
