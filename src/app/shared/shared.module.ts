import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './services/question-control.service';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [QuestionFormComponent, DynamicFormQuestionComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    exports: [
        QuestionFormComponent,
        DynamicFormQuestionComponent
    ],
    providers: [
        QuestionControlService
    ]
})
export class SharedModule {
}
