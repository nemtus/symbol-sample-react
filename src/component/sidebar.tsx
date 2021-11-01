import React from 'react'

const sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-64 px-4 border-r bg-white">
      <div className="px-8">
        <div className="h-16 w-full flex items-center text-white">
          symbol-react
        </div>
        <ul className="mt-12">
          <li className="flex w-full justify-between text-white hover:text-gray-500 cursor-pointer items-center mb-6">
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
          <li className="flex w-full justify-between text-white hover:text-gray-500 cursor-pointer items-center">
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
      </div>
    </div>
  )
}

export default sidebar
