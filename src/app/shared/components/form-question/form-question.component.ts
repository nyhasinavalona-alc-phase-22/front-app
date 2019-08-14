import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionType } from '../../constants/question-type.constant';
import { QuestionBase } from '../../types/question-base.class';

@Component({
    selector: 'app-form-question',
    templateUrl: './form-question.component.html',
    styleUrls: ['./form-question.component.scss']
})
export class FormQuestionComponent {
    @Input() form: FormGroup;
    @Input() question: QuestionBase<any>;

    textBox = QuestionType.TEXT_BOX;
    dropdown = QuestionType.DROP_DOWN;

    get isValid() {
        return this.form.controls[this.question.key].valid;
    }
}
