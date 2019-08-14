import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionBase } from '../../types/question-base.class';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
    selector: 'app-question-form',
    templateUrl: './question-form.component.html',
    styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
    form: FormGroup;
    @Input() questions: QuestionBase<any>[] = [];
    @Input() buttonLabel: string;
    @Output() save: EventEmitter<object> = new EventEmitter<object>();

    constructor(private questionControlService: QuestionControlService) {
    }

    ngOnInit(): void {
        this.form = this.questionControlService.toFormGroup(this.questions);
    }

    onSubmit() {
        this.save.emit(this.form.value);
    }
}
