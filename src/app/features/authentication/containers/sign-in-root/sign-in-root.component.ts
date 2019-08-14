import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../../../shared/types/question-base.class';
import { TextBoxQuestion } from '../../../../shared/types/text-box-question.class';

@Component({
    selector: 'app-sign-in-root',
    templateUrl: './sign-in-root.component.html',
    styleUrls: ['./sign-in-root.component.scss']
})
export class SignInRootComponent implements OnInit {
    questions: QuestionBase<any>[];

    constructor() {
    }

    ngOnInit() {
        this.questions = [
            new TextBoxQuestion({
                type: 'email',
                key: 'email',
                label: '',
                required: true,
                order: 1
            }),
            new TextBoxQuestion({
                type: 'password',
                key: 'password',
                required: true,
                order: 2
            })
        ];
    }

    onSave() {
        /* */
    }
}
