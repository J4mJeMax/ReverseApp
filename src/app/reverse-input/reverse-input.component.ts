import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-reverse-input',
  templateUrl: './reverse-input.component.html',
  styleUrls: ['./reverse-input.component.scss']
})
export class ReverseInputComponent implements OnInit {
  @Input() stringToReverse: string | undefined;
  reversedString: string | undefined;

  reverseString = (string: any) => {
    if(string) {
      this.reversedString = string.split('').reverse().join('');
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.reverseString(this.stringToReverse);
  }

}
