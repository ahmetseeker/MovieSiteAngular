import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetailResult: any;
  movieVideoResult: any;
  movieCastResult: any;

  constructor(private movieService: MovieApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["id"];
      this.getMovie(id);
      this.getCast(id);
      this.getVideo(id);
    })
  }

  getMovie(id: any) {
    this.movieService.getMovieDetails(id).subscribe(result => {
      console.log(result);
      this.movieDetailResult = result;
    })
  }

  getVideo(id: any) {
    this.movieService.getMovieVideo(id).subscribe(result => {
      console.log(result);
      result.results.forEach((element: any) => {
        if(element.type == "Trailer" && element.name == "Official Trailer") {
          this.movieVideoResult = element.key;
        }
      });
    });
  }

  getCast(id: any) {
    this.movieService.getMovieCast(id).subscribe(result => {
      console.log(result);
      this.movieCastResult = result.cast;
    })
  }

}
