import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="banner">
        {/* Title graphic */}
        <h1>RusticMonkey</h1>
      </header>

      <nav className="navigation">
        {/* Navigation menu */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className="content">
        {/* Content pane */}
        <h2>Welcome to my website!</h2>
        <p>This is the main content of the page.</p>
      </main>

      <footer className="footer">
        {/* Footer */}
        <p>&copy; 2023 RusticMonkey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;