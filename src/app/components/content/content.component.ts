import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../services/content.service'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  List: any ;
  constructor(private ContactService:ContentService) { }

  ngOnInit(): void {
    this.getdata();
  }
getdata() {
    this.ContactService.getContentList().subscribe((alldata: any) => {
      this.List = alldata;
    });
  }
}
