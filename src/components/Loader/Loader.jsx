import {ProgressBar} from  'react-loader-spinner'

 const Loader = () => {
  return(
    <ProgressBar
  height="80"
  width="50"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass="progress-bar-wrapper"
  borderColor = '#333433'
  barColor = '#519235'
/>
  )
 }

 export default Loader;
