import { customElement, bindable } from "aurelia-framework";
import './row-item.css';

@customElement('row-item')
export class RowItem {

    @bindable()
    item;
}

