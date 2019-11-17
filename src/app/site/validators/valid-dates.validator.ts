import { ValidatorFn, FormGroup } from '@angular/forms';

export function validDates(controlStartDate: string, controlEndDate: string) {
    return (formGroup: FormGroup) => {
        const controlSD = formGroup.controls[controlStartDate];
        const controlED = formGroup.controls[controlEndDate];

        if (controlSD.value == null || controlED.value == null) {
            controlSD.setErrors({validDates: true});
            controlED.setErrors({validDates: true});
        } else if (controlSD.value > controlED.value || controlSD.value === controlED.value) {
            controlSD.setErrors({validDates: true});
            controlED.setErrors({validDates: true});
        } else if (controlSD.value.length !== 16 || controlED.value.length !== 16) {
            controlSD.setErrors({validDates: true});
            controlED.setErrors({validDates: true});
        } else {
            const sdYear = controlSD.value.slice(0, controlSD.value.indexOf('-'));
            const edYear = controlED.value.slice(0, controlED.value.indexOf('-'));
            if (sdYear < 1900 || edYear < 1900) {
                controlSD.setErrors({validDates: true});
                controlED.setErrors({validDates: true});
            } else {
                controlSD.setErrors(null);
                controlED.setErrors(null);
            }
        }
    }
}
