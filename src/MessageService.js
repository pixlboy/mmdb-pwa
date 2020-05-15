import {Subject} from 'rxjs';

const subscriber = new Subject();

const messageService = {
    send: (msg) => {
        subscriber.next(msg)
    },
    invokeSpeech: () =>{
        subscriber.next()
    },
    sendSpeech: (msg) => {
        subscriber.next(msg)
    }
}

export {
    messageService,
    subscriber
}