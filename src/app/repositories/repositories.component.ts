import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repos;
  constructor(http: HttpClient){
    const path="https://api.github.com/search/repositories?q=angular"
      this.repos = http.get<any>(path).pipe(
          map(result => result.items)
      )
  }

  ngOnInit(): void {
  }

}
