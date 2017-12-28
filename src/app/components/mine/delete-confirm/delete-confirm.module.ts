import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DeleteConfirmComponent } from './delete-confirm.component';

@NgModule({
    declarations: [
        DeleteConfirmComponent
    ],
    imports     : [
        CommonModule,
        FormsModule
    ],
    exports     : [
        DeleteConfirmComponent
    ],
    entryComponents: [
        DeleteConfirmComponent
    ]
})
export class DeleteConfirmModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DeleteConfirmModule
        };
    }

}