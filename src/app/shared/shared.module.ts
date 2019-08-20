import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './services/question-control.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataListComponent } from './components/data-list/data-list.component';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
    declarations: [
        DynamicFormComponent,
        FormQuestionComponent,
        DataListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CdkTableModule
    ],
    exports: [
        DynamicFormComponent,
        FormQuestionComponent,
        DataListComponent
    ],
    providers: [
        QuestionControlService
    ]
})
export class SharedModule {
}
