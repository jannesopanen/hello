import './App.css';
import Employee from './components/Employee';

function App() {
  const showEmployees = true;

  return (
    <div className='App'>
      {
        showEmployees ? (
          <>          
            <Employee name="Janne Sopanen" role="God"/>
            <Employee name="Chuck Norris"/>
            <Employee name="Marilyn Manson"/>
          </>
        ) : (
          <>
            <p><b>you do not have access to list the employees</b></p>
          </>
        )
      }
    </div>
  )
  

}

export default App;
