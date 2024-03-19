import { FC } from 'react'

interface WalletProps {
  imgLink: string
}

const Wallet: FC<WalletProps> = ({imgLink}) => {
  return (
    <div
      className="flex h-5 w-5 items-center justify-center rounded-3xl"
    >
      <img src={imgLink} className=" h-full w-full rounded-md" />
    </div>
  )
}

export default Wallet