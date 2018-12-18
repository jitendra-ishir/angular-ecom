import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpHeaders, HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';

@Injectable()
export class HttpService {
    private headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    constructor(
        private http: HttpClient,
        private titleService: Title
    ) { }
    private handleError(error: any) {
        return Observable.throw(error || '500 internal server error');
    }
    private extractData(response: Response) {
        let body;
        try {
            body = response.json();
        } catch (ex) { }
        return body || {};
    }
    public getBaseUrl() {
        return environment.apiUrl;
    }

    httpGet(path, token, params?: HttpParams) {
        let headers = null;
        let param = null;
        if (token !== null) {
            headers = new HttpHeaders().set('token', token);
        }
        if (params) {
            param = params;
        }
        return this.http
            .get(environment.apiUrl + path, { headers: headers, params: param })
            .catch(this.handleError);
    }

    httpPost(path, body, token) {
        const data = JSON.stringify(body);
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append('token', token);
        }
        const options = { headers: headers };

        return this.http
            .post(environment.apiUrl + path, data, options)
            .map((response: HttpResponse<any>) => response)
            .catch(this.handleError);
    }

    httpPut(path, body, token) {
        const data = JSON.stringify(body);
        let headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append('token', token);
        }
        const options = { headers: headers };
        return this.http
            .put(environment.apiUrl + path, data, options)
            .catch(this.handleError);
    }

    httpDelete(path, token, params?: HttpParams) {
        let headers: HttpHeaders = new HttpHeaders();
        let param = null;
        headers = headers.append('Content-Type', 'application/json');
        if (token !== null) {
            headers = headers.append('token', token);
        }
        if (params) {
            param = params;
        }
        const options = { headers: headers, params: param };
        return this.http
            .delete(environment.apiUrl + path, options)
            .catch(this.handleError);
    }
}
