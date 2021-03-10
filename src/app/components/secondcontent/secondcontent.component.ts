import { Component, OnInit } from '@angular/core';
import { SecondcontentService } from '../../services/secondcontent.service'
@Component({
  selector: 'app-secondcontent',
  templateUrl: './secondcontent.component.html',
  styleUrls: ['./secondcontent.component.css']
})
export class SecondcontentComponent implements OnInit {
  contentList: any ;
  constructor(private SecondcontentService:SecondcontentService) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata() {
    this.SecondcontentService.getContentList().subscribe((alldata: any) => {
      this.contentList = alldata;
    });
  }
}
