/// <reference path="../../typings/_custom.d.ts" />

import {Observable} from '@reactivex/rxjs/dist/cjs/Rx';
import { Component } from 'angular2/angular2';
import { FactStore } from './FactStore';

@Component({
	providers: [FactStore],
	selector: 'dyk-random-facts',
	template: `
<div>
	<h1>{{ fact }}</h1>
	<!--<h4>-- in category: {{ fact.category }}</h4>-->	
</div>	
	`
})
export class Fact {

	private fact: string;
	
	constructor(private store: FactStore) {
		this.fact = 'Loading facts...';
		this.store.fetch().subscribe(fact => this.fact = fact);
	}

	onInit() {
	}

}