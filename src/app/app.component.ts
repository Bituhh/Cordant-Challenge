import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInterface} from './shared/interfaces/user.interface';
import {hasOwnProperty} from 'tslint/lib/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const test = {value: {a: 1, b: 2}};
    let temp: { id: string, a: number, b: number };
    for (const key in test) {
      if (test.hasOwnProperty(key)) {
        temp = {id: key, ...test.value};
      }
    }
    console.log(temp);
  }

  onTest() {
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res: UserInterface[]) => {
    //   res.forEach(user => {
    //     this.http.post('https://cordantchallenge.firebaseio.com/users.json', user).subscribe(response => console.log(response));
    //   });
    // });
    this.http.get<UserInterface[]>('https://cordantchallenge.firebaseio.com/users.json').subscribe(res => {
      const temp: UserInterface[] = [];
      for (const key in res) {
        if (res.hasOwnProperty(key)) {
          temp.push({...res[key], id: key});
        }
      }
    });
  }
}
