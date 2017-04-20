import { VoterService } from './voter.service'
import { ISession } from '../shared/event.model'
import { Observable } from 'rxjs/Rx'

describe('VoterService', () => {

    let voterService: VoterService, mockHttp
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp',['delete','post'])
        voterService = new VoterService(mockHttp);
    })

    describe('deleteVoter', () => {
        it('should remove the voter from the list voters', () => {
            var session = { id: 6, voters: ["joe","john"] };

            voterService.deleteVoter(3, <ISession>session, "joe");
        })
    })
    
})