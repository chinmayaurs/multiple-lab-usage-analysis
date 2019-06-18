import {HttpModule} from '@angular/http';
import {Http, Response,Headers,RequestOptions} from '@angular/http';
import {Injectable,Inject} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
// import{Router} from '@angular/router'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientService {
 options:any;

constructor(private http: Http, @Inject('apiBase') private _api:string){
     var headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: headers });

  }

  getdata(model:any, objectType:string){    
    return this.http.post(this._api +"/getData/"+objectType,model,this.options);
  }


}