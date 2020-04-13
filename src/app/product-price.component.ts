import { Component, Input } from "@angular/core";

@Component({
    selector: 'product-price',
    template: `
        \${{price}}
    `
})
export class productsPriceComponent {
    @Input() price: number;

    constructor(){
        
    }
}