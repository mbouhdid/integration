import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  needPackaging: boolean | undefined = undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  togglePackaging(value: boolean): void {
    this.needPackaging = value;
  }

  goToAddItem(): void {
    this.router.navigate(['add-item']);
  }

}
