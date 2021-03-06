import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(private readonly authService: AuthService,
              private readonly navCtrl: NavController) {
  }

  async logout() {
    this.authService.logout().subscribe(() => this.navCtrl.navigateRoot('/login'));
  }

}
