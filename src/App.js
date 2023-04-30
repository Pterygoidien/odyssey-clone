
import './assets/scss/main.scss'
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './views/routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <AppRoutes />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
