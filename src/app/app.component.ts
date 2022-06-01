import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // https://www.codechef.com/LP1TO201/problems/MAX_DIFF
  name = 'Angular';
  ngOnInit() {
    let obj = [
      {
        n: 2,
        s: 3,
      },
      {
        n: 3,
        s: 1,
      },
      {
        n: 4,
        s: 4,
      },
    ];
    obj.forEach((response) => {
      let max = response.n;
      let min = 0;
      let finalArray = [];
      for (let i = 0; i < response.n + 1; i++) {
        for (let j = max; j >= 0; j--) {
          if (i + j == response.s) {
            // console.log(i,j);
            finalArray.push(Math.abs(i - j));
          }
        }
      }
      console.log(Math.max(...finalArray));
    });
  }
}
