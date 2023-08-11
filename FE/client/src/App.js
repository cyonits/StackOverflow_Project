import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { styled } from 'styled-components';
import Header from './components/Header';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Login from './components/Logins/Login';
import Signup from './components/Logins/Signup';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DefaultLayout = () => {
  return (
    <MainContainer>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Questions />
      </div>
      <Footer />
    </MainContainer>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
        <div style={{ paddingTop: '52px' }}>
          <Routes>
            <Route path="/" element={<DefaultLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
