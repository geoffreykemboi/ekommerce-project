import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      
      <footer style={App.footer}>
        <p>&copy; {new Date().getFullYear()} My React App</p>
      </footer>
    </>
  );
}

export default App;
