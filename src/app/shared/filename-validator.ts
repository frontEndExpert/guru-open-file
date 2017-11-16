import { FormControl } from '@angular/forms';


export class FilenameValidator{
    static notValidFileName(control: FormControl){
        var regEx = /^[\w\d\.]+\.(txt)|[\w\d]+\.(log)$/;
        var valid = regEx.test(control.value);
        return valid ? null : { notValidFileName: true };
    }

    
}