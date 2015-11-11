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


/*import {Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Request, RequestMethods, Headers} from 'angular2/http';

@Component({
  selector: 'dyk',
  viewProviders: [Http, ConnectionBackend, RequestOptions, BaseRequestOptions, Request, RequestMethods],
  template: '{{ people | json }}'
})
export class DYK {
  public people;
  constructor(http: Http) {
    http.request('', new Request({
      url: 'http://localhost:3000/data/ALL.json',
      method: '',
      headers: new Headers(null),
      body: '',
      search: null,
      merge: null
    }))
      // Call map on the response observable to get the parsed people object
      .map(res => res.json())
      // Subscribe to the observable to get the parsed people object and attach it to the
      // component
      .subscribe(people => this.people = people);
  }
}*/