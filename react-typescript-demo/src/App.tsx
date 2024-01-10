import React from 'react';
import './App.css'
import Application from './components/application/application';
import Comp1 from './components/Comp1';
import Counter from './components/counter/counter';
import Greet from './components/Greet';
import MuiMode from './components/mui/mui-mode';
import Person from './components/Person';
import AppProviders from './components/providers/App-providers';
import UseContextDemo from './components/UseContextDemo';
import User from './components/User';
import UserData from './components/UserData';
import UseReducerDemo from './components/UseReducerDemo';
import FormDemo from './components/UseForm_Hook/FormDemo';

function App() {
  const personName = {
    first: 'Shiva',
    last: 'Kuduru'
  }
  const personList = [
    {
      first: 'Shiva',
      last: 'Kuduru'
    },
    {
      first: 'Hari',
      last: 'Krishna'
    },
    {
      first: 'John',
      last: 'Berg'
    }
  ]
  return (
    <div className="App">
      {/* <p> learn react</p>
      <Application />
      <Greet name='Shiva' count={77} isloggedin={false} person={personName}/>
      <Counter />
      <AppProviders>
        <MuiMode />
      </AppProviders> */}
      {/* <UserData /> */}
      {/* <Person list={personList} name='Shiva'/>
      <User />
      <UseReducerDemo />

      <UseContextDemo>
        <Comp1 />
      </UseContextDemo> */}
      <FormDemo />
    </div>
  );
}

export default App;
