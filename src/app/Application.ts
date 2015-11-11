/// <reference path="typings/_custom.d.ts" />

/**
 * The main DYK app module.
 *
 * @type {angular.Module}
 * @author Wassim CHEGHAM <maneki.nekko@gmail.com>
 * @version 2.0.0
 */
import {Component} from 'angular2/angular2';
import {Fact} from './components/fact/Fact';
import {Loader} from './components/fact/Loader';

@Component({
    providers: [Loader],
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
    directives: [Fact]
})
export class DYK {}