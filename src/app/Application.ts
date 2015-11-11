/// <reference path="typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {Fact} from './components/Fact';
import {LoadingIndicator} from './components/LoadingIndicator';

@Component({
    selector: 'dyk',
    template: `
    <header>
			<dyk-timer></dyk-timer>
			<img src="images/dyk.png" width="423" height="220" alt="Did you know logo">
		</header>
		<article>
			<dyk-random-facts></dyk-random-facts>
		</article>
    `,
    directives: [Fact, LoadingIndicator]
})
export class DYK {}