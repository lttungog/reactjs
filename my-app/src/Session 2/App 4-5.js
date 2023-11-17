import logo from './logo.svg';
import './App.css';

function Welcome() {
    return (
        <section>
            <h1>Welcome World 🚄</h1>
        </section>
    );
  }

  class Welcome extends React.Component {
    render () {
        return <h1>Hello World 🌍</h1>
    }
  }

function App() {
    return (
        <div className="App">
            <Welcome />
            <Welcome />
            <Welcome />
        </div>
    );
}

class App extends React.Component {
    render () {
        return <Welcome />;
    }
}

export default App;