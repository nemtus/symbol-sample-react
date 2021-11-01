import React, { useState, useEffect, useCallback } from 'react'
import {
  Account,
  NetworkType,
  Address,
  RepositoryFactoryHttp,
  Mosaic,
} from 'symbol-sdk'

const CreateFromPrivateKey = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [address, setAddress] = useState(
    'TCUKQQFP6XTIIA2WLHUUGHVFPE62OIMGWUP7SHY'
  )
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
        <li key={mosaics[i].id.id.lower}>
          モザイクID: {mosaics[i].id.id.toHex()}<br/>モザイクの総量:{' '}
          {mosaics[i].amount.toString()}
        </li>
      )
    }
    return <ul>{items}</ul>
  }

  const accountInfo = useCallback(() => {
    const accountAddress = Address.createFromRawAddress(address)
    const nodeUrl = 'http://ngl-dual-101.testnet.symboldev.network:3000'
    const repositoryFactory = new RepositoryFactoryHttp(nodeUrl)
    const accountHttp = repositoryFactory.createAccountRepository()
    accountHttp.getAccountInfo(accountAddress).subscribe(
      (accountInfo) => {
        console.log(accountInfo)
        setPublicKey(accountInfo.publicKey)
        setMosaics(accountInfo.mosaics)
        setImportance(accountInfo.importance)
      },
      (err) => console.error(err)
    )
  }, [address])

  useEffect(() => {
    accountInfo()
  }, [address, accountInfo])

  function accountCreateFromPrivateKey() {
    const account = Account.createFromPrivateKey(
      privateKey,
      NetworkType.TEST_NET
    )
    setAddress(account.address.pretty())
    setPublicKey(account.publicKey)
  }
  return (
    <div>
      <div className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        Account
      </div>
      <input
        onChange={(e) => setPrivateKey(e.target.value)}
        className="shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline mt-5"
        placeholder="enter the privateKey"
      />
      <br />
      <button
        onClick={accountCreateFromPrivateKey}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        秘密鍵からアカウントを作成する
      </button>
      <div className="mt-5 shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
        <p>アドレス: {address}</p>
        <p>公開鍵: {publicKey}</p>
      </div>
      {mosaics && importance && (
        <div className="mt-5 shadow rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
          {mosaicList()}
          <p>インポータンス: {importance.toString()}</p>
        </div>
      )}
    </div>
  )
}

export default CreateFromPrivateKey
