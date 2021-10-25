import React, { useState } from 'react'
import { Account, NetworkType } from 'symbol-sdk'

const CreateFromPrivateKey = () => {
  const [privateKey, setPrivateKey] = useState('')
  console.log('秘密鍵', privateKey)

  const sampleUseState = () => {
    setPrivateKey(
      '7B20E0615755D6EEDA0DAB45E5D8A4331EC603F8702D7F4E6171FB81CF83CF78'
    )
  }

  const accountCreateFromPrivateKey = () => {
    const account = Account.createFromPrivateKey(
      privateKey,
      NetworkType.TEST_NET
    )
    console.log(
      'Your account address is:',
      account.address.pretty(),
      'and its private key',
      account.privateKey
    )
  }
  return (
    <div>
      <button onClick={accountCreateFromPrivateKey}>
        秘密鍵からアカウントを作成する
      </button>
      <br />
      <button onClick={sampleUseState}>useStateを試してみる</button>
    </div>
  )
}

export default CreateFromPrivateKey
