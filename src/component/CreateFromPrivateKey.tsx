import React, { useState } from 'react'
import {
  Account,
  NetworkType,
  Address,
  RepositoryFactoryHttp,
  Mosaic,
} from 'symbol-sdk'

const CreateFromPrivateKey = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [address, setAddress] = useState('')
  const [publicKey, setPublicKey] = useState('')
  const [mosaics, setMosaics] = useState<Mosaic[]>([])
  const [importance, setImportance] = useState({
    lower: 0,
    higher: 0,
  })

  const mosaicList = () => {
    const items = []
    for (let i = 0; i < mosaics.length; i++) {
      items.push(
        <li key={mosaics[i].id.id.higher}>
          モザイクハイター{mosaics[i].amount.higher}<br/>
          モザイクローワ{mosaics[i].amount.lower}<br/>
          モザイクIDローワ{mosaics[i].id.id.lower}<br/>
          モザイクIDハイター{mosaics[i].id.id.higher}
        </li>
      )
    }
    return <ul>{items}</ul>
  }

  const accountInfo = () => {
    const accountAddress = Address.createFromRawAddress(address)
    const nodeUrl = 'http://ngl-dual-101.testnet.symboldev.network:3000'
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl)
    const accountHttp = repositoryFactory.createAccountRepository()
    accountHttp.getAccountInfo(accountAddress).subscribe(
      (accountInfo) => {
        console.log(accountInfo)
        setMosaics(accountInfo.mosaics)
        setImportance(accountInfo.importance)
      },
      (err) => console.error(err)
    )
  }

  const accountCreateFromPrivateKey = () => {
    const account = Account.createFromPrivateKey(
      privateKey,
      NetworkType.TEST_NET
    )
    setAddress(account.address.pretty())
    setPublicKey(account.publicKey)
  }
  return (
    <div>
      <input
        onChange={(e) => setPrivateKey(e.target.value)}
        className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
      />
      <br />
      <button onClick={accountCreateFromPrivateKey}>
        秘密鍵からアカウントを作成する
      </button>
      <p>アドレス: {address}</p>
      <p>公開鍵: {publicKey}</p>
      <button onClick={accountInfo}>アカウント情報を取得する</button>
      {mosaics && importance && (
        <>
          {mosaicList()}
          <p>インポータンスローワー{importance.lower}</p>
          <p>インポータンスハイター{importance.higher}</p>
        </>
      )}
    </div>
  )
}

export default CreateFromPrivateKey
