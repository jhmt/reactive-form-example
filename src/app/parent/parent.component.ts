import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators, ValidatorFn} from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  public formGroup: FormGroup; 

  public addresses = [ 'address1', 'address2' ];

  public phone_numbers = [ 'phone_number1', 'phone_number2' ];

  constructor( private formBuilder: FormBuilder ) {

    setInterval( () => {
      console.log(this.formGroup);
    }, 3000);

    this.formGroup = this.formBuilder.group( { 
      addresses: this.formBuilder.array( [] ),
      phone_numbers: this.formBuilder.array( [] )
    } );

    this.formGroup.addControl( 'name', new FormControl( { value: '' /* option */ }, [ /* validator */ ] ) );

    this.formGroup.addControl( 'age', new FormControl( {},
      // [ this.range(0, 100) ]
    ) );

    this.addresses.map( () => {
      const child_form_group = this.formBuilder.group({});
      child_form_group.addControl( 'street', new FormControl( {}, [] ) );
      child_form_group.addControl( 'city', new FormControl( {}, [] ) );
      ( this.formGroup.get( 'addresses' ) as FormArray ).push( child_form_group );
    });
  }

  // public range = ( min: number, max: number ): ValidatorFn => {
  //   return  ( control: AbstractControl ): null | string => {
  //     const value = control.value;
  //     if ( value === null || value === undefined ) {
  //       return null;
  //     }

  //     return [
  //       ( ( value >= min ) && ( value <= max) ) ? null : `input the value between ${min} and ${max}`
  //     ];
  //   };
  // };

  public getFormArrayOfString = ( str: string ): FormArray => {
    return ( this.formGroup.get( str ) as FormArray );
  };
}
