import CreateFromPrivateKey from './component/CreateFromPrivateKey'
import Sidebar from './component/sidebar'
// import GenerateNewAccount from './component/GenerateNewAccount'

function App() {
  return (
    <div>
      <div className="flex flex-no-wrap">
        <Sidebar></Sidebar>
        <CreateFromPrivateKey></CreateFromPrivateKey>
      </div>
    </div>
  )
}

export default App
