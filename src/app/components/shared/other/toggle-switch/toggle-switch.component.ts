import { Component, Input } from '@angular/core';

@Component({
    selector: 'toggle-switch',
    styleUrls: [
        './toggle-switch.component.less'
    ],
    templateUrl: './toggle-switch.component.html'
})
export class ToggleSwitchComponent {
    @Input() public isActive: boolean;
}
