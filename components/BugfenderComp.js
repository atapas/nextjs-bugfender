import { Bugfender } from '@bugfender/sdk'

const BugfenderComp = props => {
    console.log('Loading BugfenderComp');
    
    console.log('Initializing BugfenderComp');
    Bugfender.init({
        appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
    })

    if (props.type === 'log') {
        Bugfender.log(props.message);
    }
    
    

    return(
        <>
        </>
    )

}

export default BugfenderComp;
