import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // moduleId: module.id,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private _showHeading = true;
  public heroes: string[] = ['Magneta', 'Bombasto', 'Magma', 'Tornado'];

  toggleHeading() {
    this._showHeading = !this._showHeading;
  }

  get showHeading(): boolean {
    return this._showHeading;
  }
}
