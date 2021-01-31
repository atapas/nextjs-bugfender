import '../styles/global.css'
/*import dynamic from 'next/dynamic'
const BugfenderComp = dynamic(
    () => {
      return import("../components/BugfenderComp");
    },
    { ssr: false }
);*/



export default function App({ Component, pageProps }) {
    
    return <Component {...pageProps} />
}

const sendAnalytics = async ({ name, value }) => {
    const NextBugfender = (await import('../utils/NextBugfender.js')).default 
    NextBugfender.init();
    if (name === 'FCP') {
        if (value >=0 && value <=2000) {
            NextBugfender.log(`${name} value ${value} is in range and the speed is fast.`);
        } else if (value >2000 && value <=4000) {
            NextBugfender.warn(`${name} value ${value} is in a bit out of range and the speed is moderate.`);
            NextBugfender.sendUserFeedback('FCP Warning', 'The speed of loading this page may be moderate.');
        } if (value >4000) {
            NextBugfender.warn(`${name} value ${value} is completly out of range and the speed is slow.`);
            NextBugfender.sendIssue('Issue with FCP','The speed of loading this page may be slow. Creating an issue.');
        }
    } else {
        NextBugfender.log(`${name} value ${value} is in range and the speed is fast.`);
    }
    
};

export function reportWebVitals(metric) {
    switch (metric.name) {
      case 'FCP':
        // handle FCP results
        sendAnalytics(metric);
        break
      case 'LCP':
        sendAnalytics(metric);
        break
      case 'CLS':
        sendAnalytics(metric);
        break
      case 'FID':
        sendAnalytics(metric);
        break
      case 'TTFB':
        sendAnalytics(metric);
        break
      case 'Next.js-hydration':
        sendAnalytics(metric);
        break
      case 'Next.js-route-change-to-render':
        sendAnalytics(metric);
        break
      case 'Next.js-render':
        sendAnalytics(metric);
        break
      default:
        break
    }
}