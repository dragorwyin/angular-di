import { Component, OnInit } from '@angular/core';
import { LazyServiceService } from '../lazy-service.service';
import { MyClass } from '../my-class';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  providers: [MyClass],
})
export class LazyComponent implements OnInit {
  constructor(private lazy: LazyServiceService, private myClass: MyClass) {}

  ngOnInit(): void {
    this.lazy.log('loaded');
    this.myClass.doSomething();
  }
}
