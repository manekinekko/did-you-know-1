/// <reference path="typings/_custom.d.ts" />

import {bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DYK} from './Application';

bootstrap(DYK, [
	HTTP_PROVIDERS
]);