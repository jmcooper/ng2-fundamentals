 import { FormControl } from '@angular/forms'
 
 
 export function restrictedWords(words) {
      return (control: FormControl): { [key: string]: any } => {  

        if(!words) return null

        var invalidWords = words
                .map(w => control.value.includes(w) ? w : null)
                .filter(w => w != null)

        return invalidWords && invalidWords.length > 0 
           ? {'restrictedWords' : invalidWords.join(', ')}
           : null
      }
    }