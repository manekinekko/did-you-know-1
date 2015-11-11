/// <reference path="../../typings/_custom.d.ts" />

import {Injectable} from 'angular2/angular2';
import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import {Loader} from './Loader';

@Injectable()
export class FactStore {
	
	private facts: any = [];
	private load: Observable<any>;

	constructor(loader: Loader) {
		this.load = loader.fetch();
		this.load.subscribe(
			(facts) => this.facts = facts.data,
      (err) => this.logError(err),
      () => console.log('Facts loaded.')
    )
	}

	fetch() {
		return this.randomize();
	}

	logError(err) {
		console.error('There was an error when loading facts: ' + err);
	}

	randomize() {
		let catIndex = (Math.random() * this.facts.length-1) | 0;
		
		if (this.facts[catIndex]) {
			let factIndx = (Math.random() * this.facts[catIndex].facts.length-1) | 0;
			return this.facts[catIndex].facts[factIndx];
		}
		return '';
	}

}