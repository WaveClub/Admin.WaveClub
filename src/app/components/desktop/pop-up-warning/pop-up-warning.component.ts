import { Component, trigger, transition, style, animate } from '@angular/core';
import { ObservableService } from 'app/services';

@Component({
    selector: 'pop-up-warning',
    styleUrls: [
        './pop-up-warning.component.less'
    ],
    templateUrl: './pop-up-warning.component.html',
    animations: [
        trigger(
            'fade',
            [
                transition(':enter', [
                    style({ width: '100%' }),
                    animate(2000, style({ width: '0%' }))
                ])
            ]
        )
    ]
})
export class PopUpWarningComponent {
    public warnings: Array<{ Message: string }>;

    constructor(private observableService: ObservableService) {
        this.warnings = new Array<{ Message: string }>();

        this.observableService.onErrorOccurred.subscribe((warning) => {
            this.warnings.push( { Message: warning });
            setTimeout(() => this.warnings.pop(), 1900);
        });
    }
}
