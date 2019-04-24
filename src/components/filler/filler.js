import { customElement } from 'aurelia-framework';
import './filler.css';

@customElement('filler')
export class Filler {
    randomText = (new Date()).toUTCString();
}