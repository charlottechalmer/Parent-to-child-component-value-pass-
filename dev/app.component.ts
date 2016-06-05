import {Component} from 'angular2/core';
import {ChildComponent} from './child.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Input and Output</h1>
        <div class="parent">
            <div class=""parent-inner>
              <h2>Parent Component</h2>
              <h4>Parent Value entered in child component. {{childValue}}</h4>
               <input type="text" #inputParent (keyup)="0" />
               <br>
            </div>
            <div class="child">
               <child-app [ParentValue]="inputParent.value" (childChanged)="childValue=$event" ></child-app>
            </div>
        </div>
        <p>Hello World!</p>
    `,
    directives: [ChildComponent],
    inputs: ['childValue']
})
export class AppComponent {
   childValue: string;
}