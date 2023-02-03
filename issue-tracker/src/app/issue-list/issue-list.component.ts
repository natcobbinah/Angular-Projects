import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { Issue } from '../issue';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {
  
  issues: Issue[] = [];
  showReportIssue = false;
  selectedIssue: Issue | null = null;
  editIssue: Issue | null = null;

  constructor(private issueService: IssuesService){}

  ngOnInit(): void{
    this.getIssues();
  }

  onConfirm(confirmed: boolean){
    if(confirmed && this.selectedIssue){
      this.issueService.completeIssues(this.selectedIssue);
      this.getIssues();
    }
    this.selectedIssue = null;
  }

  private getIssues(){
    this.issues = this.issueService.getPendingIssues();
  }

  onCloseReport(){
    this.showReportIssue = false;
    this.getIssues();
  }

  onCloseEdit(){
    this.editIssue = null;
    this.getIssues();
  }
}
