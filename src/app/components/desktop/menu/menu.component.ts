import { Component } from '@angular/core';

import { ObservableService } from 'app/services';

@Component({
    selector: 'menu',
    styleUrls: [
        './menu.component.less'
    ],
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    constructor(private observableService: ObservableService) {}

    public changeMenuItem(value: string) {
        this.observableService.menuItem = value;
    }
}
