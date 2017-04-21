import { TestBed, async, ComponentFixture } from '@angular/core/testing'
import { DebugElement, Component, NO_ERRORS_SCHEMA } from '@angular/core' // NO_ERRORS_SCHEMA 
import { SessionListComponent } from './session-list.component'
import { UpvoteComponent } from './upvote.component'
import { DurationPipe } from '../shared/duration.pipe'
import { CollapsibleWellComponent } from '../../common/collapsible-well.component'
import { AuthService } from '../../user/auth.service'
import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { By } from '@angular/platform-browser'


describe('SessionListComponent', () => {
    let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugEl: DebugElement

    beforeEach(async(() => {
        let mockAuthService = { 
            isAuthenticated: () => true,
            currentUser: {
                userName: 'Joe'
            }
         };
        let mockVoterService = { 
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                { provide: AuthService, useValue: mockAuthService },
                { provide: VoterService, useValue: mockVoterService }
            ],
            schemas: [
                //NO_ERRORS_SCHEMA
            ]
        }).compileComponents()        
    }))

    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;        
    })

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = [{id: 3, name: 'Session 1', presenter: 'Joe', duration: 1, level: 'beginner',
                                        abstract:'abstract', voters: ['john','bob']}];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            //RAW
            //expect(element.querySelector('[well-title]').textContent).toContain('Session 1');
            
            //Angular
            expect(debugEl.query(By.css('[well-title]')).nativeElement.textContent).toContain('Session 1');
        })

    })
})



