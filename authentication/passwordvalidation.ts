import { AbstractControl, ValidatorFn } from "@angular/forms";
 export function match(controlName: string, checkControlName: string): ValidatorFn 
 { return (controls: AbstractControl) => 
    { const control = controls.get(controlName);
         const checkControl = controls.get(checkControlName); 
         if (checkControl?.errors && !checkControl.errors['matching']) 
         { return null; } 
         if (control?.value < 8) 
         { controls.get(controlName)?.setErrors({ minLength: true }); }
          if (control?.value !== checkControl?.value) 
          { controls.get(checkControlName)?.setErrors({ matching: true }); 
          return { matching: true }; } else { return null; } }; }