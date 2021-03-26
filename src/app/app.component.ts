import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = "Bài tập chương 2";
  test = " "
  like = 45;
  state = 'off';

  like_function() {
    if(this.state === 'off')
    {
      this.like +=1;
      this.state = 'on';
      this.test = "Hứa Linh Quang đã thích ảnh này!";
    }
    else if(this.state === 'on')
    {
      this.like -=1;
      this.state = 'off';
      this.test = " ";
    }
  }
  currentItem = 'Television';
}
