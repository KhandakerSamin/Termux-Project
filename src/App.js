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

      {/* About Section */}
      <section className="about">
        <h2>About This Website</h2>
        <p>
          This is a simple React homepage created using functional components.
          You can customize it, add new pages, and connect APIs easily.
        </p>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>⚡ Fast and responsive design</li>
          <li>⚙️ Built with React Components</li>
          <li>🎨 Easy to customize</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} My React App. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default App;
