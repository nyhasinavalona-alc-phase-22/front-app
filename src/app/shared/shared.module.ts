import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './services/question-control.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DynamicFormComponent,
        FormQuestionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        DynamicFormComponent,
        FormQuestionComponent
    ],
    providers: [
        QuestionControlService
    ]
})
export class SharedModule {
}
