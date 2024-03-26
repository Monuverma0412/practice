import {   Component, ViewChildren,  } from '@angular/core';
import { PostService } from 'src/all-services/post/post.service';
import { ViewChild } from '@angular/core';
import { ContactComponent } from 'src/app/contact/contact.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent {
  name: string = '';
  email: string = '';
  phone: string = '';


  @ViewChild(ContactComponent) test: ContactComponent | undefined

  ngAfterViewInit() {
    console.log("data come to contact component ", this.test?.post)
  }


  constructor(private api: PostService) { }

  postData() {
    if (this.name && this.email && this.phone) {
      const data = {
        "name": this.name,
        "email": this.email,
        "phone": this.phone
      };

      this.api.postData(data);
    } else {
      console.log('Please fill in all fields');

    }
  }
}

