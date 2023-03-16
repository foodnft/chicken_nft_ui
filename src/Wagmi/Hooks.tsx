import { useAccount, useEnsName } from 'wagmi'

export default function Account() {
  const { address } = useAccount()
//   const { data: ensName } = useEnsName({ address })
console.log("address", address)
  return (
    <div>
      {address}
      {/* {ensName ? ` (${address})` : null} */}
    </div>
  )
}
