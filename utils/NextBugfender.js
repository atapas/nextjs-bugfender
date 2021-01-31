import { Bugfender } from '@bugfender/sdk'

const NextBugfender = {
    init: () => {
        Bugfender.init({
            appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
        })
    },

    log: (...messages) => {
        Bugfender.log(messages.join( ))
    },

    warn: (...messages) => {
        Bugfender.warn(messages.join( ))
    },

    error: (...messages) => {
        Bugfender.error(messages.join( ))
    },

    sendUserFeedback: (key, value) => {
        Bugfender.sendUserFeedback(key, value)
    },

    sendIssue: (key, value) => {
        Bugfender.sendIssue(key, value)
    },

    sendCrash: (key, value) => {
        Bugfender.sendCrash(key, value)
    }

}

export default NextBugfender;