import './App.css';
import Employee from './components/Employee';

function App() {
  console.log("Im gonna print the list of the employees");
  const showEmployees = true;

  return (
    <div className='App'>
      {
        showEmployees ? (
          <>
          { console.log('inside the return of App()') }
            <Employee />
            <Employee />
            <Employee />
            <Employee />
            <Employee />
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
