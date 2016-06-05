import {Component, EventEmitter} from 'angular2/core';
// import {} from 'angular2'

@Component({
    selector: 'child-app',
    template: `
        <h2>Child Component</h2>
        <h4>Child Value entered in parent component. {{ParentValue}}</h4>
        <p><input type="text" value="" #inputChild (keyup)="0" (keyup)="onChange(inputChild.value)" /></p>
    `,
    inputs: ['ParentValue'],
    outputs: ['childChanged']
})

export class ChildComponent {

  ParentValue: string;
  childChanged = new EventEmitter<string>();
   
   onChange(value: string){
       this.childChanged.emit(value);
   }
}