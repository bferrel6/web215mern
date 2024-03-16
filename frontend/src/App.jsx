import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddRecord from './pages/AddRecord';
import LookUpRecord from './pages/LookUpRecord';
import EditRecord from './pages/EditRecord';
import DeleteRecord from './pages/DeleteRecord';

const App = () => {
  return (
    <Routes>
      <Route path = '/' element = { <Home /> }/>
      <Route path = '/records/add' element = { <AddRecord /> }/>
      <Route path = '/records/details/:id' element = { <LookUpRecord /> }/>
      <Route path = '/records/edit/:id' element = { <EditRecord /> }/>
      <Route path = '/records/delete/:id' element = { <DeleteRecord /> }/>
    </Routes>
  )
}

export default App