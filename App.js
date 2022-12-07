import './App.css';
import {Routes, Route} from 'react-router-dom';
import Createstudent from './comp/Createstudent'
import Displaystudent from './comp/Displaystudent'
import Header from './comp/Header'
import Login from './comp/Login'
import Logout from './comp/Logout';
import UpdateStudent from './comp/UpdateStudent';
function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={ <Displaystudent/> } exact />
      <Route path='/AddStudent' element={ <Createstudent/>  } exact />
      <Route path='/UpdateStudent/:id' element={<UpdateStudent/> } exact />
      <Route path='/Login' element={ <Login/>  } exact />
      <Route path='/Logout' element={<Logout/> } exact />
      <Route path='*' element={<Displaystudent/> } exact />
      
      </Routes>
     
    </div>
  );
}

export default App;
