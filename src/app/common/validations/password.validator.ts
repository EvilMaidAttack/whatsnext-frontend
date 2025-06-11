import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static passwordRequirementsMustMeet(control: AbstractControl): ValidationErrors | null {
        if (!control) return null;

        let value = control?.value;
        let errors: ValidationErrors = {}
        let requiredLength = 8

        if (value.length < 8) {
            errors['minLength'] = {required: requiredLength, actual: value.length};
            }

        if (!/[A-Z]/.test(value)) {
            errors['uppercase'] = 'Password must contain at least one uppercase letter';
        }

        if (!/[a-z]/.test(value)) {
            errors['lowercase'] = 'Password must contain at least one lowercase letter';
        }

        if (!/[0-9]/.test(value)) {
            errors['digit'] = 'Password must contain at least one number';
        }

        return errors;


    }
}