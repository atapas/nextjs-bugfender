import { Bugfender } from '@bugfender/sdk'

const BugfenderComp = props => {
    console.log('Loading BugfenderComp');
    
    console.log('Initializing BugfenderComp');
    Bugfender.init({
        appKey: process.env.NEXT_PUBLIC_BUGFENDER_API_KEY,
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
