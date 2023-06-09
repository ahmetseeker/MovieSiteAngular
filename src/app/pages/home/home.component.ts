import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { MovieApiService } from 'src/app/services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerResult:any = [];
  trendingMoviesResult:any = [];
  actionMovieResult: any = [];
  adventureMovieResult: any = [];
  animationMovieResult: any = [];
  comedyMovieResult: any = [];
  documentaryMovieResult: any = [];
  scienceFictionMovieResult: any = [];
  thrillerMovieResult: any = [];

  constructor(private movieService: MovieApiService) { }

   // Carousel

    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 3
      },
      400: {
        items: 7
      },
      740: {
        items: 10
      },
      940: {
        items: 13
      }
    },
    nav: true
  }

  ngOnInit(): void {
    this.getBannerData();
    this.getTrendingMovies();
    this.getActionMovies();
    this.getAdventureMovies();
    this.getComedyMovies();
    this.getAnimationMovies();
	  this.getDocumentaryMovies();
    this.getScienceFictionMovies();
    this.getThrillerMovies();
  }

  getBannerData() {
    this.movieService.getBannerApiData().subscribe(result => {
      console.log(result);
      this.bannerResult = result.results;

    })
  } 

  getTrendingMovies() {
    this.movieService.getTrendingMoviesApiData().subscribe(result => {
      console.log(result);
      this.trendingMoviesResult = result.results;
    })
  }

  getActionMovies() {
    this.movieService.fetchActionMovies().subscribe(result => {
      this.actionMovieResult = result.results;
    })
  }

  getAdventureMovies() {
    this.movieService.fetchAdventureMovies().subscribe(result => {
      this.adventureMovieResult = result.results;
    })
  }

  getAnimationMovies() {
    this.movieService.fetchAnimationMovies().subscribe(result => {
      this.animationMovieResult = result.results;
    })
  }

  getComedyMovies() {
    this.movieService.fetchComedyMovies().subscribe(result => {
      this.comedyMovieResult = result.results;
    })
  }

  getDocumentaryMovies() {
    this.movieService.fetchDocumentaryMovies().subscribe(result => {
      this.documentaryMovieResult = result.results;
    })
  }

  getScienceFictionMovies() {
    this.movieService.fetchScienceFictionMovies().subscribe(result => {
      this.scienceFictionMovieResult = result.results;
    })
  }
  
  getThrillerMovies() {
    this.movieService.fetchThrillerMovies().subscribe(result => {
      this.thrillerMovieResult = result.results;
    })
  }

}


