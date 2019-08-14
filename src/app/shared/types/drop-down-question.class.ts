import { QuestionBase } from './question-base.class';
import { QuestionType } from '../constants/question-type.constant';

export class DropDownQuestion extends QuestionBase<string> {
    controlType = QuestionType.DROP_DOWN;
    options: { key: string, value: string };

    constructor(options: {} = {}) {
        super(options);
        this.options = (options as any).options || [];
    }
}
