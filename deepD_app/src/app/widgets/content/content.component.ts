import { Component } from '@angular/core';
import { MyServiceService } from 'src/app/service/my-service.service';
import { Feedback } from 'src/app/models.data'


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  searchQuery: string = '';
  feedbacks: Feedback[] = [];
  count_m5: number = 0;
  count_m4: number = 0;
  count_m3: number = 0;
  count_m2: number = 0;
  count_m1: number = 0;
  mean_rating: number = 0.0;
  dataLoaded = false;

  constructor(private service: MyServiceService) { }

  post_data(): void {
    this.service.get_feedbacks('/get_data').subscribe((response) => {
      if (response.address) {
        console.log(response.feedbacks[0].text);
        this.feedbacks = response.feedbacks;
        this.searchQuery = response.address;
        this.count_m5 = this.feedbacks.filter(feedback => feedback.mark === 5).length;
        this.count_m4 = this.feedbacks.filter(feedback => feedback.mark === 4).length;
        this.count_m3 = this.feedbacks.filter(feedback => feedback.mark === 3).length;
        this.count_m2 = this.feedbacks.filter(feedback => feedback.mark === 2).length;
        this.count_m1 = this.feedbacks.filter(feedback => feedback.mark === 1).length;
        const sum = this.feedbacks.reduce((total, feedback) => total + feedback.mark, 0);
        this.mean_rating = sum / this.feedbacks.length;
        this.dataLoaded = true;
      } else {
        console.error('Неверный формат данных в ответе сервера');
      }
    }, (error) => {
      console.error('Произошла ошибка при запросе данных', error);
    });
  }


  executeSearchOnEnter() {
    this.post_data();
  }

}
