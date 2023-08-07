import { Routes, Route } from 'react-router-dom';

import IndexPage from './templates/pages/IndexPage.tsx';
import './App.css';
import LoginPage from './templates/pages/LoginPage.tsx';
import Layout from './templates/Layout.tsx';
import RegisterPage from './templates/pages/RegisterPage.tsx';
import axios from 'axios';
import {UserContextProvider} from './templates/pages/Contest.tsx';
import AccountPage from './templates/pages/Account.tsx';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  
  return (
    <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/account/:subpage?" element={<AccountPage />} />
            <Route path="/account/:subpage/:action" element={<AccountPage />} />
          
          </Route>
        </Routes>
      </UserContextProvider>
  );
}

export default App;
