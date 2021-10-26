import logo from './logo.svg'
import './App.css'
import CreateFromPrivateKey from './component/CreateFromPrivateKey'
// import GenerateNewAccount from './component/GenerateNewAccount'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CreateFromPrivateKey></CreateFromPrivateKey>
        {/* <GenerateNewAccount></GenerateNewAccount> */}
      </header>
    </div>
  )
}

export default App
