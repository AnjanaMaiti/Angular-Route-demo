import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  repos:any;
  constructor(http: HttpClient){
    // const path="https://api.github.com/search/repositories?q=angular"
    //   this.repos = http.get<any>(path).pipe(
    //       map(result => result.items)
    //   )
  }
}
