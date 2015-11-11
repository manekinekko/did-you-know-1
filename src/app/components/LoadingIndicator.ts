/// <reference path="../typings/_custom.d.ts" />

import {Component} from 'angular2/angular2';
import {Config} from '../AppConfig';

@Component({
	selector: 'dyk-timer',
	styles: [`
		.host {
			width: 100%;
		  height: 4px;
		  top: 0;
		  position: fixed;
		  left: 0px;
		}
		.host div {
			background: orange;
			height: 100%;
			width: 0;
			border-radius: 0 4px 4px 0;
			box-shadow: 0 0 20px orange;
			-webkit-transition: all 1s linear;
			-moz-transition: all 1s linear;
			-ms-transition: all 1s linear;
			transition: all 1s linear;
		}
		.host.animate div {
			animation: timer 0s linear infinite;
			animation-direction: reverse;
			animation-duration: ${Config.TIMER+650}ms;

			-webkit-animation: timer 0s linear infinite;
			-webkit-animation-direction: reverse;
			-webkit-animation-duration: ${Config.TIMER+650}ms;

			-moz-animation: timer 0s linear infinite;
			-moz-animation-direction: reverse;
			-moz-animation-duration: ${Config.TIMER+650}ms;

			-ms-animation: timer 0s linear infinite;
			-ms-animation-direction: reverse;
			-ms-animation-duration: ${Config.TIMER+650}ms;
		}
	`],
	template: `
	<div class="host" [class.animate]="isNext">
		<div></div>
	</div>
`
})
export class LoadingIndicator {
	private isNext: boolean = true;
	constructor() {}
}