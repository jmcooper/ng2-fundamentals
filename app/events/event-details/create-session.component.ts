import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ISession, restrictedWords } from '../shared/index'
@Component({
    templateUrl:'/app/events/event-details/create-session.component.html',
    styles:[`
        em { float:right; color:#E05C65; padding-left:10px; }
        .error input, .error select, .error textarea { background-color:#E3C3C5; }
        .error ::-webkit-input-placeholder{color: #999; }
        .error ::-moz-placeholder{ color:#999; }
        .error :-moz-placeholder{ color:#999; }
        .error : ms-input-placeholder { color: #999; }
    `]
})
export class CreateSessionComponent implements OnInit{
    newSessionForm: FormGroup
    name: FormControl
    presenter: FormControl
    duration: FormControl
    level: FormControl
    abstract: FormControl    
    ngOnInit(){
        this.name = new FormControl('', Validators.required)
        this.presenter = new FormControl('', Validators.required)
        this.duration = new FormControl('', Validators.required)
        this.level = new FormControl('', Validators.required)
        this.abstract= new FormControl('', [Validators.required, 
                Validators.maxLength(400),
                restrictedWords(['foo','bar'])])
        
        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        })
    }

   

    saveSession(formValues){
      
        let session:ISession = {
            id: undefined,
            name: formValues.name,
            duration: +formValues.duration,
            level: formValues.level,
            presenter: formValues.presenter,
            abstract: formValues.abstract,
            voters: []            
        }

        console.log(session);
    }

}