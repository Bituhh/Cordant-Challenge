import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: HttpClient){}

  // onTest() {
  //   return this.http.post('https://cordantchallenge.firebaseio.com/test/-LiGPWE5rJis-bQUNG7l.json', {id: 1, name: 'abcdef'}).subscribe(res => console.log(res));
  // }
}
