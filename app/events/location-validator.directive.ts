import { Directive } from '@angular/core';
import { Validator, FormControl, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Directive({
  selector: '[validateLocation]',
  providers: [{provide: NG_VALIDATORS, useExisting: LocationValidator, multi: true}]
})
export class LocationValidator implements Validator {
  validate(control: FormGroup): { [key: string]: any } {
    console.log(control)
    let formGroup = <FormGroup>control
    let addressControl = formGroup.controls['address']
    let cityControl = formGroup.controls['city']
    let countryControl = formGroup.controls['country']
    let onlineUrlControl = (<FormGroup>formGroup.root).controls['onlineUrl']
    
    if ((addressControl && addressControl.value && cityControl && cityControl.value && countryControl && countryControl.value) || (onlineUrlControl && onlineUrlControl.value)) {
      console.log('returning null')
      return null
    }
    return {validateLocation: false} 
  }
}