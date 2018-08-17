import {Component} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService,
              public authService: AuthService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe((res: Response) => {
        console.log(res);
      });
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }
  onLogout() {
    this.authService.logout();
  }
}
