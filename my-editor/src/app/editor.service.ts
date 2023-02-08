import { Inject, Injectable } from '@angular/core';
import { ElectronWindow, WINDOW } from './window';

@Injectable({
  providedIn: 'root'
})
export class EditorService {

  constructor(@Inject(WINDOW) private window: ElectronWindow) { }

  //returns the IPC renderer object from the electron module
  private get ipcRenderer(): Electron.IpcRenderer{
    return this.window.require('electron').ipcRenderer;
  }

  //get content form the text editor
  getContent(): Promise<string>{
    return this.ipcRenderer.invoke('getContent');
  }

  //save the content of the editor to the filesystem
  setContent(content: string){
    this.ipcRenderer.invoke('setContent',content);
  }
}
