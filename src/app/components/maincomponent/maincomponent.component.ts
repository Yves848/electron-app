import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-maincomponent',
  templateUrl: './maincomponent.component.html',
  styleUrls: ['./maincomponent.component.scss']
})
export class MaincomponentComponent implements OnInit {

  constructor(private _electronService: ElectronService) { }

  ngOnInit(): void {
    console.log('send');
    this._electronService.ipcRenderer.emit('test',{data: 'coucou'});
  }

}
