import React from 'react'
import { Account, NetworkType } from 'symbol-sdk'

const GenerateNewAccount = () => {
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
    <div>
      <button onClick={accountCreate}>アカウントの作成</button>
    </div>
  )
}

export default GenerateNewAccount
