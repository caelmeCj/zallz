import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'delete-confirm',
    template: `<div class="delete-confirm">
        <a href="javascript:void(0)" class="delete-confirm-btn" (click)="show = true">
            <div #ref><ng-content></ng-content></div>
            <i class="fa fa-trash" *ngIf="ref.childNodes.length == 0"></i>
        </a>
        <div class="delete-confirm-question" *ngIf="show === true">
            <button class='btn-x-sm' (click)='sendCancel()'><i class="fa fa-times"></i></button>
            <button class='btn-x-sm' (click)='sendConfirm()'><i class="fa fa-check"></i></button>
            <span [innerHTML]="question"></span>
        </div>
    </div>`,
    styles  : [`
        .delete-confirm {
            background-color: transparent;
        }
        .delete-confirm-btn {
        }
        .delete-confirm-question {
            color: white;
            background-color: red;
            float: left;
            position: absolute;
            z-index: 1;
            padding: 5px 5px 5px 8px;
            border-radius: 7px;
            margin: -5px;
        }
        .delete-confirm-question button {
            background-color: red;
        }
        .delete-confirm-question i {
            color: white;
        }
        .fa-times, fa-check {
            color: white;
        }`]
})
export class DeleteConfirmComponent {
    @Input('question') question: string = 'Are you sure?';
    @Output('onConfirm') onConfirm: EventEmitter<any> = new EventEmitter();
    @Output('onCancel') onCancel: EventEmitter<any> = new EventEmitter();
                         show: boolean = false;

    sendConfirm(): void {
        this.onConfirm.emit();
        this.show = false;
    }

    sendCancel(): void {
        this.onCancel.emit();
        this.show = false;
    }
}
