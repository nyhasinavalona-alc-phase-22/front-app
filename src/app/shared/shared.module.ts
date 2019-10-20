import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { UrlPipe } from './pipes/url.pipe';
import { QuestionControlService } from './services/question-control.service';

@NgModule({
  declarations: [DynamicFormComponent, FormQuestionComponent, UrlPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DynamicFormComponent, FormQuestionComponent, UrlPipe],
  providers: [QuestionControlService],
})
export class SharedModule {}
