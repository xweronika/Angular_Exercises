import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-kurs1';

  //__________________________________________________________________________________________________________________________________________________________________________
  tekst1 = "Pole tekstowe";
  tekst2 = '';
  przycisk = true;
  pokazClick = '';

  click(event) {
    this.pokazClick = "Aktywny";
    this.przycisk = false;
  }

  //_______________________________________

  color_Class = 'kolor';
  logo_url = '';
  max_length = 5;
  input_text = 'tekst';

  is_disable = true;

  //constructor() {
  //  this.is_disable = false;
  //}

  change() {
    this.input_text = 'Zmiana tekstu i koloru';
    this.logo_url = "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/02/shutterstock_552102910-796x531.jpg";
    this.max_length = 10;
    this.color_Class = 'kolor2';
  }

  //________________________________________________________--

  input_text1 = '';
  color_class1 = 'kolor2';
  is_disable1 = true;

  on_focus1() {
    this.color_class1 = 'kolor1';
  }
  on_click1(event) {
    console.log(event);
  }
  on_mouse_move1(event) {
    console.log('x: ' + event.clientX + ', y: ' + event.clientY);
  }
  on_paste1() {
    this.input_text1 = 'Wpisz!';
  }
  change1() {
    this.is_disable1 = false;
  }
  //____________________________________

  bol = true;
  nazwa_moj = 'Tak';

  moj() {
    if (this.bol == true) {
      this.bol = false;
      this.nazwa_moj = 'Nie';
    }
    else {
      this.bol = true;
      this.nazwa_moj = 'Tak';
    }

  }
  //__________________________________________________________________________________________________________________________________________________________________________
}
