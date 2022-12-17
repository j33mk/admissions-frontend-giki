import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor() { }

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
