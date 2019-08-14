import { QuestionBase } from './question-base.class';
import { QuestionType } from '../constants/question-type.constant';

export class TextBoxQuestion extends QuestionBase<string> {
    controlType = QuestionType.TEXT_BOX;
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}
