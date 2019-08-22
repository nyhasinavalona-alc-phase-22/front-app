import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionControlService } from './services/question-control.service';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FormQuestionComponent } from './components/form-question/form-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataListComponent } from './components/data-list/data-list.component';
import { CdkTableModule } from '@angular/cdk/table';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SortableColumnComponent } from './components/sortable-column/sortable-column.component';

@NgModule({
    declarations: [
        DynamicFormComponent,
        FormQuestionComponent,
        DataListComponent,
        PaginatorComponent,
        SortableColumnComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CdkTableModule
    ],
    exports: [
        DynamicFormComponent,
        FormQuestionComponent,
        DataListComponent,
        PaginatorComponent
    ],
    providers: [
        QuestionControlService
    ]
})
export class SharedModule {
}
