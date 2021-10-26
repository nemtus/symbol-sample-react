import React, { useState } from 'react'
import { Account, NetworkType } from 'symbol-sdk'

const CreateFromPrivateKey = () => {
  const [privateKey, setPrivateKey] = useState('')
  const [address, setAddress] = useState('')
  const [publicKey, setPublicKey] = useState('')
  console.log('秘密鍵', privateKey)

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
    </div>
  )
}

export default CreateFromPrivateKey
