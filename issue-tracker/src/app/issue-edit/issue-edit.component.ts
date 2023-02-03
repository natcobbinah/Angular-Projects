import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html',
  styleUrls: ['./issue-edit.component.css']
})

export class IssueEditComponent {

  @Input() issue: Issue | undefined;
  @Output() formClose = new EventEmitter();
  issueForm: FormGroup | undefined;

   constructor(private builder: FormBuilder, 
    private issueService: IssuesService){}

    ngOnInit(): void{
      this.issueForm = this.builder.group({
        title: [this.issue?.title, Validators.required],
        description: [this.issue?.description],
        priority: [this.issue?.priority, Validators.required]
      })
    }

    save(){
      if(this.issue){
        this.issueService.updateIssue(this.issue.issueNo, this.issueForm?.value)
        this.formClose.emit();
      }
    }
}
