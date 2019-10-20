import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/core/store/reducers/app.reducers';
import { QuestionBase } from '../../../../shared/types/question-base.class';
import { TextBoxQuestion } from '../../../../shared/types/text-box-question.class';
import { signIn } from '../../store/actions/authentication.actions';

@Component({
  selector: 'app-sign-in-root',
  templateUrl: './sign-in-root.component.html',
  styleUrls: ['./sign-in-root.component.scss'],
})
export class SignInRootComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.questions = [
      new TextBoxQuestion({
        type: 'text',
        key: 'userName',
        label: 'User name',
        required: true,
        order: 1,
      }),
      new TextBoxQuestion({
        type: 'password',
        key: 'password',
        label: 'Password',
        required: true,
        order: 2,
      }),
    ];
  }

  onSave(payload: { userName: string; password: string }) {
    this.store.dispatch(signIn(payload));
  }
}
