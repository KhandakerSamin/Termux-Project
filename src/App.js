import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header Section */}
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Home Page</h1>
        <p>Your journey starts here 🚀</p>

        <div className="btn-group">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </header>

  {

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
