/// <reference path="../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {Config} from '../../AppConfig';

interface ILoader {
	fetch(): Observable<any>;
}

@Injectable()
export class Loader implements ILoader {
	
	private http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	public fetch(): Observable<any> {
		return this.http.get(Config.DATA_URL).map((res: Response) => res.json());
	}
}