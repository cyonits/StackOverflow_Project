import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { styled } from 'styled-components';
import Header from './components/Header';
import Questions from './components/Questions/Questions';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import AskPage from './Pages/AskPage/AskPage';
import Login from './components/Logins/Login';
import Signup from './components/Logins/Signup';

const MainContainer = styled.div`
  display: flex;
`;

const DefaultLayout = () => {
  return (
    <MainContainer>
      <Sidebar />
      <Questions />
    </MainContainer>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ paddingTop: '52px' }}>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/ask" element={<AskPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
