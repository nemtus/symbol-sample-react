import React from 'react'
import Github from '../images/logo-github.png'
import Symbol from '../images/logo-symbol-color.png'
import NumTus from '../images/logo-nemtus-color.png'
import Twitter from '../images/logo-twitter-color.png'

const Home = () => {
  return (
    <>
      <div className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        Home
      </div>
      <div className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        <div className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-2 rounded inline-flex items-center">
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
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </svg>
          <span className="ml-6">Note</span>
        </div>

        <p>
          ・ブロックチェーンSymbolとSPAフレームワークReactを用いて作成しているWebアプリケーションのサンプルです。
        </p>
      </div>
      <div className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        <div className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-2 rounded inline-flex items-center">
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
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </svg>
          <span className="ml-6">Disclaimer</span>
        </div>
        <p>
          ・本サイトのご利用に際しては以下の点にご注意ください。
          <br />
          ・本サイトではSymbolを用いたWebアプリケーションの実装例を示すことに主眼をおいています。
          <br />
          ・本サイトでの実装は十分にテストされていない可能性があることを踏まえ、本サイトのご利用は、実装例を参考にしたり少額のXYMでの動作確認にとどめ、多額のXYMやクリティカルな情報を扱う操作を実行なさならいことを推奨します。
          <br />
          ・本サイトのご利用を通じて生じ得るいかなる問題に対してもNEMTUSとして一切の責任を取ることはできませんのでご注意ください。
          <br />
        </p>
      </div>
      <div className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        <div className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-2 rounded inline-flex items-center">
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
              d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
            />
          </svg>
          <span className="ml-6">Reference</span>
        </div>
        <a
          href="https://github.com/nemtus/symbol-sample-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 rounded w-full flex flex-grow items-center px-3">
            <img src={Github} alt="github" />
            <span className="ml-6">リポジトリ</span>
          </button>
        </a>
        <a
          href="https://docs.symbolplatform.com/ja/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full flex flex-grow items-center px-3 mt-2">
            <img src={Symbol} alt="github" />
            <span className="ml-6">Symbolドキュメント</span>
          </button>
        </a>
        <a
          href="https://nemtus.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full flex flex-grow items-center px-3 mt-2">
            <img src={NumTus} alt="github" className="w-6" />
            <span className="ml-6">nemtus</span>
          </button>
        </a>
        <a
          href="https://twitter.com/NemtusOfficial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full flex flex-grow items-center px-3 mt-2">
            <img src={Twitter} alt="github" />
            <span className="ml-6">Twitter</span>
          </button>
        </a>
      </div>
    </>
  )
}

export default Home
