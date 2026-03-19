import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'> 
      <Header title={'Мой первый React-проект'}/>
      <p>текст</p>
      <Footer copyrightText={'© 2024 Все права защищены'}/>
    </div>
  );
}

export default App;
