
import Home from './components/home/Home';
import Header from './components/Header/Header';
import { Box } from '@mui/material';
import Cart from './components/cart/Cart';
import DataProvider from './context/DataProvider';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailView from './components/details/DetailView';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            < Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/Cart' element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
