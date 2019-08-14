import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionType } from '../../constants/question-type.constant';
import { QuestionBase } from '../../types/question-base.class';

@Component({
    selector: 'app-dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html',
    styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent {
    @Input() form: FormGroup;
    @Input() question: QuestionBase<any>;

    textBox = QuestionType.TEXT_BOX;
    dropdown = QuestionType.DROP_DOWN;

    get isValid() {
        return this.form.controls[this.question.key].valid;
    }
}
