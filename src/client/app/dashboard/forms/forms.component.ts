import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'form-cmp',
    templateUrl: './forms.component.html',
    directives: [ROUTER_DIRECTIVES]
})

export class FormComponent {}
