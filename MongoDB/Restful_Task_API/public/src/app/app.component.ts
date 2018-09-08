import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  tasks= [];
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
    this.getTaskbyIDFromService();
   
  }

  getTasksFromService(){
    this._httpService.getTasks();
    let Observable = this._httpService.getTasks();
    Observable.subscribe(data => {
      console.log("Got our tasks!", data)
      this.tasks = data['tasks'];
    });
  }

  getTaskbyIDFromService(){
    this._httpService.getTasksbyID('5b8b7f1462900c5c40c38614');
    let IDObservable = this._httpService.getTasksbyID('5b8b7f1462900c5c40c38614');
    IDObservable.subscribe(data => {
      console.log("Got our single task!", data)
    });
  }
}
