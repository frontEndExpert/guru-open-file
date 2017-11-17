import { FormControl } from '@angular/forms';


export class FilenameValidator{
    static notValidFileName(control: FormControl){
        // normal file name
        var regEx = /^[\w\d\.]+\.(txt)$|[\w\d]+\.(log)$/;
        // the file name of our test range file.txt, smallfile.txt, largefile.txt
        var regEx = /^(file.txt)$|^(smallfile.txt)$|^(largefile.txt)$/;
        var valid = regEx.test(control.value);
        return valid ? null : { notValidFileName: true };
    }

    
}