import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chilren-vite',
  template: `
    <micro-app
      name="vite"
      url="http://localhost:7002/micro-app/vite/"
      iframe
    ></micro-app>
  `,
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViteComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
