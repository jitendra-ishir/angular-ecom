import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Page } from './../../interfaces/page';
import { ContentPagesService } from '../../services/content-pages.service';

@Component({
  selector: 'app-content-pages',
  templateUrl: './content-pages.component.html',
  styleUrls: ['./content-pages.component.css']
})
export class ContentPagesComponent implements OnInit {
  pageId: any;
  page: Page;
  constructor(
    private route: ActivatedRoute,
    private contentPage: ContentPagesService
  ) { }

  ngOnInit() {
    this.pageId = this.route.snapshot.data['pageid'];
    // console.log(this.pageId);
    this.getContentPageDetails(this.pageId);
  }

  getContentPageDetails(id): void {
    this.contentPage.getPageDetails(id).subscribe((contentPage: Page) => {
      this.page = contentPage;
      // console.log(this.page);
    });
  }
}
