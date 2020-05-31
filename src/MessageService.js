import {Subject} from 'rxjs';

const subscriber = new Subject();

const messageService = {
    send: (query, type = 'search') => {
        subscriber.next({query, type});
    }
}

export {
    messageService,
    subscriber
}