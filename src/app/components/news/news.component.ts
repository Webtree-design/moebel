import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  public news: any = [];
  constructor(public dataService: DataService) {
    this.getNews();
  }

  ngOnInit() {
    this.news = [];
  }

  public getNews() {
    this.dataService.getNews().subscribe((res: any) => {
      if (res.length <= 0 || res.length == undefined) return;
      res.forEach((el: any) => {
        this.news.push(el);
      });
    });
  }
  public formattedDateString(dateString: any) {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
}
