import React from 'react'
import { Account, NetworkType } from 'symbol-sdk'

const CreateFromPrivateKey = () => {
  const accountCreateFromPrivateKey = () => {
    const account = Account.createFromPrivateKey(
      '7B20E0615755D6EEDA0DAB45E5D8A4331EC603F8702D7F4E6171FB81CF83CF78',
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
      </button>{' '}
      {/* ここが追加されるよ！！ */}
    </div>
  )
}

export default CreateFromPrivateKey
