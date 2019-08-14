import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../../../shared/types/question-base.class';
import { TextBoxQuestion } from '../../../../shared/types/text-box-question.class';
import { Store } from '@ngrx/store';
import { AuthenticationState } from '../../store/reducers/authentication.reducers';
import { signIn } from '../../store/actions/authentication.actions';

@Component({
    selector: 'app-sign-in-root',
    templateUrl: './sign-in-root.component.html',
    styleUrls: ['./sign-in-root.component.scss']
})
export class SignInRootComponent implements OnInit {
    questions: QuestionBase<any>[];

    constructor(private authenticationStore: Store<AuthenticationState>) {
    }

    ngOnInit() {
        this.questions = [
            new TextBoxQuestion({
                type: 'text',
                key: 'userName',
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

    onSave(payload: { email: string, password: string }) {
        this.authenticationStore.dispatch(signIn(payload));
    }
}
