import { Component } from "@angular/core"
/*
1. class
2. template
3. metadata
*/


@Component({
    selector:'hello-comp',
    template: `
        <div>
            <h1>Welcome to Angular</h1>
        </div>    
    `
})
export class HelloComponent {

}