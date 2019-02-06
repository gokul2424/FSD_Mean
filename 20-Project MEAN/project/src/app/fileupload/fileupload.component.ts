import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import { UsersService } from './../users.service';
import {saveAs} from 'file-saver';

const uri = 'http://localhost:4000/file/upload';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent  {

  
  uploader:FileUploader = new FileUploader({url:uri});

    attachmentList:any = [];

    constructor(private _fileService:UsersService){

        this.uploader.onCompleteItem = 
        (item:any, response:any ,status:any, headers:any) => {
            this.attachmentList.push(response);
        }
    }

    download(index){
        var filename = this.attachmentList[index].uploadname;

        this._fileService.downloadFile(filename)
        .subscribe(
            data => saveAs(data, filename),
            error => console.error(error)
        );
    }
}
