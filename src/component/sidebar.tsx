import React, { useState } from 'react'
import CreateFromPrivateKey from './CreateFromPrivateKey'

const SideBar = () => {
  const [isClosed, setClosed] = useState(false)
  return (
    <div className="flex bg-gray-100 w-full">
      {!isClosed && (
        <aside
          aria-hidden={isClosed}
          className="bg-gray-800 w-64 min-h-screen flex flex-col text-white"
        >
          <div className="border-r border-b px-4 h-10 flex items-center justify-between">
            <span className="text-blue py-2">Symbol-React</span>
          </div>

          <div className="border-r py-4 flex-grow relative">
            <nav>
            <ul className="mt-12">
          <li className="flex w-full justify-between text-white hover:text-gray-500 cursor-pointer items-center mb-6 m-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="text-sm  ml-2">Home</span>
            </div>
          </li>
          <li className="flex w-full justify-between text-white hover:text-gray-500 cursor-pointer items-center  m-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm  ml-2">Account</span>
            </div>
          </li>
        </ul>
            </nav>
          </div>
        </aside>
      )}

      <main className="flex-grow flex flex-col min-h-screen w-full">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {isClosed ? (
            <button
              tabIndex={1}
              className="w-10 p-1"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setClosed(false)}
            >
              <svg
                aria-hidden="true"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          ) : (
            <button
              tabIndex={1}
              className="w-10 p-1"
              aria-label="Close menu"
              title="Close menu"
              onClick={() => setClosed(true)}
            >
              <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}

          <div className="flex flex-grow items-center justify-between px-3">
            <h1 className="text-lg">Home</h1>
            <button className="text-blue-700 underline">Log in</button>
          </div>
        </header>
        <CreateFromPrivateKey></CreateFromPrivateKey>
      </main>
    </div>
  )
}

export default SideBar
