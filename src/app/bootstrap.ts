/// <reference path="typings/_custom.d.ts" />

import {bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
import {DYK} from './Application';
import {Fetch} from './services/Fetch';
import {FactStore} from './services/FactStore';

/**
 * The main DYK app module.
 *
 * @type {angular.Module}
 * @author Wassim CHEGHAM <maneki.nekko@gmail.com>
 * @version 2.0.0
 */

bootstrap(DYK, [
	Fetch,
	FactStore,
	HTTP_PROVIDERS
]);