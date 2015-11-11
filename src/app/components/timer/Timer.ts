/*module DYK {
	'use strict';
	
	let animationIterationEvent: string = 'animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration';

	export function dykTimer($rootScope: ng.IRootScopeService,  $interval: ng.IIntervalService, FactsService: FactsService): ng.IDirective {
		return {
			template: '<div></div>',
			link: ($scope: IFact, element: JQuery, attributes) => {
				
				$scope.$on('fact.update', () => {
					element
						.addClass('animate')
						.on(animationIterationEvent, () => FactsService.randomize());	
				});
				
			}
		}
	}
}
*/
import { Component } from 'angular2/angular2';

@Component({
	selector: 'dyk-timer',
	template: `<div></div>`
})
export class Timer {
	constructor() {
		setInterval(() => {
			
		}, 3000);
	}
}