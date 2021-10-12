import Logo from '../src/Compontents/HeaderComponent'
import TopContent from './Compontents/TopContent'
import ImageGallery from './Compontents/ImageGallery';
import {ToastContainer} from 'react-toastify';

function App() {
  return (
      <header>
        <Logo></Logo>
        <TopContent />
        <ImageGallery />
        <ToastContainer />
      </header>
  );
}

export default App;
