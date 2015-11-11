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

	private facts: {facts:string[]}[];
	private fact: string;
	
	constructor(private store: FactStore) {
		this.fact = 'Loading facts...';
	}

	onInit() {
		//this.fact = this.store.fetch();
		//this.update();
	}

	update(){
		setInterval(() => this.fact = this.store.fetch(), 3000);
	}

}