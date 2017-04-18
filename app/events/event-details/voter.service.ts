import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model'
@Injectable()
export class VoterService{
    deleteVoter(session: ISession, voterName: string){
        session.voters = session.voters.filter(voter => voter !== voterName);
    }

    addVoter(sessoin: ISession, voterName: string){
        sessoin.voters.push(voterName);
    }

    userHasVoted(session: ISession, voterName: string){
        return session.voters.some(voter => voter === voterName);
    }
}