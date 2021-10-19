import logo from './logo.svg'
import './App.css'
import { Account, NetworkType } from 'symbol-sdk'

function App() {
  const accountCreate = () => {
    const account = Account.generateNewAccount(NetworkType.TEST_NET)
    console.log(
      'Your new account address is:',
      account.address.pretty(),
      'and its private key',
      account.privateKey
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={accountCreate}>アカウントの作成</button>
      </header>
    </div>
  )
}

export default App
