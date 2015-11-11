/// <reference path="../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {Fetch} from './Fetch';
import {Config} from '../AppConfig';

@Injectable()
export class FactStore {
	
	private stream: Observable<any>;

	constructor(loader: Fetch) {
		this.stream = Observable.interval(Config.TIMER)
														.startWith(1)
														.flatMap(_ => loader.fetch())
														.map((facts: any) => this.randomize(facts.data))
	}

	fetch() {
		return this.stream;
	}

	randomize(data: any[]) {
		let catIndex = (Math.random() * data.length-1) | 0;
		if (data[catIndex]) {
			let factIndx = (Math.random() * data[catIndex].facts.length - 1) |  0;
			return data[catIndex].facts[factIndx];
		}
		return '';
	}

}