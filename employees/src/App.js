import './App.css';
import EmployeeApp from './application/EmployeeApp';

function App() {

  return (
    <div id='maintab'>
      <>
        <h1>Employees Pair Ups</h1>
        <p>find out which pair has worked the most time together</p>                     
        <EmployeeApp/>
      </>
    </div>
  );
  
}

export default App;