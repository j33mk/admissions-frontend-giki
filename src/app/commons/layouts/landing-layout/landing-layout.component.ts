import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-layout',
  templateUrl: './landing-layout.component.html',
  styleUrls: ['./landing-layout.component.scss'],
})
export class LandingLayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const _loader = document.getElementById('loader');
    
    (async () => {

      await this.delay(2000);

      if (_loader !== null) {
        _loader.style.display = 'none';
      }

    })();
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

