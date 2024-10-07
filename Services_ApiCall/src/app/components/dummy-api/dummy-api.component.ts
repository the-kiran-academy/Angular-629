import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css'],
})
export class DummyApiComponent {
  quote: any = '';
  id: any = '';
  author: any = '';

  allPost: any;

  constructor(private dummyApiService: DummyApiService) {}

  getQuote() {
    this.dummyApiService.getQuote().subscribe((response) => {
      this.quote = response.quote;
      this.id = response.id;
      this.author = response.author;
      console.log(response);
    });
  }

  getAllPosts() {
    this.dummyApiService.getAllPosts().subscribe((response) => {
      this.allPost = response;
    });
  }
}
