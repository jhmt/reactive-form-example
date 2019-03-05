import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit {

  @Input() formArray: FormArray; // FormArray input from the parent component
  public childFormGroup: FormGroup; 
  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit() {
    // init form group
    this.childFormGroup = this.formBuilder.group({});

    this.childFormGroup.addControl( 'phone_number1', new FormControl( {}, [] ) );
    this.childFormGroup.addControl( 'phone_number2', new FormControl( {}, [] ) );

    this.formArray.push( this.childFormGroup );
  }

}
