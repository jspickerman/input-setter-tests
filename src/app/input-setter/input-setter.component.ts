import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-setter',
  templateUrl: './input-setter.component.html',
  styleUrls: ['./input-setter.component.css']
})
export class InputSetterComponent implements OnInit {

  @Input()
  set test(val: string) {
    console.log(val);
    this.testVal = val;
    console.log(this.testVal);
  }

  testVal: string;
  yeet: string = 'yeet';

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  detectChanges(): void {
    console.log('changes!');
    this.cdRef.detectChanges();
  }

  updateYeet(): void {
    console.log('updating yeet!');
    this.yeet = 'yolo';
  }
}