import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Header from './components/Header';
import {AuthProvider} from './components/context/AuthContext';
function App() {
  return (
 <div className='App'>
  <BrowserRouter>
  <AuthProvider>
  <Header/>
  <Routes>
    
    <Route  path='/' element={<HomePage/>} /> 
    <Route  path='/login' element={<LoginPage/>} />
    </Routes>
    </AuthProvider>
  </BrowserRouter>
  
 </div>
  );
}

export default App;