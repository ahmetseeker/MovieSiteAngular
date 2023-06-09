import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResult: any;
  constructor(private movieService: MovieApiService) { }

  ngOnInit(): void {
  }

  searchMovie(movieName: FormsModule) {
    console.log(movieName);
    this.movieService.getSearchMovie(movieName).subscribe(result => {
      console.log(result);
      this.searchResult = result.results;
    })
  }

}
