import './App.css';
import TimeEntry from './component/TimeEntry';
import TimeConvert from './component/TimeConvert';
import TimeSplit from './component/TimeSplit';

function App() {

  return (
      <>
        <TimeEntry timeTransform={TimeConvert} timeYear={TimeSplit}/>
      </>
  );
}

export default App;