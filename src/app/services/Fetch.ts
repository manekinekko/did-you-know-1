/// <reference path="../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {Config} from '../AppConfig';

interface IFetch {
	fetch(): Observable<any>;
}

@Injectable()
export class Fetch implements IFetch {
	
	private http: Http;
	private cache: Observable<any>;

	constructor(http: Http) {
		this.http = http;
		this.cache = null;
	}

	public fetch(): Observable<any> {
		if (!this.cache) {
			this.cache = this.http.get(Config.DATA_URL).map((res: Response) => <any[]>res.json());
		}
		return this.cache;
	}
}