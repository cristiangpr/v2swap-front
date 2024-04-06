import { BrowserProvider, ethers } from 'ethers'
import { writeContract } from '@wagmi/core'

const CONTRACT_ADDRESS ='0xf8E7a2B4EA090ea1B139403bF4dC1679Bf89b581'

export const swapTokens = async (tokenIn: string, tokenOut:string, amount: string, setError: ((e: any) => void)) =>{
     if (window.ethereum) {
    try {
      //@ts-ignore
     await window.ethereum.enable()
      //@ts-ignore
     const provider =  new BrowserProvider(window.ethereum)
     const signer = await provider.getSigner()


    const Iapprove = new ethers.Interface(['function approve(address spender, uint amount)'])
    const approveData = Iapprove.encodeFunctionData('approve', [CONTRACT_ADDRESS, amount])
    const approveTx = {
      to: tokenIn,
      data: approveData
    }
    await signer.sendTransaction(approveTx)
    const ISwapTokens = new ethers.Interface(['function swapTokens(address tokenIn, address tokenOut, uint amountIn, uint amountOutMin, uint deadline)'])
    const data = ISwapTokens.encodeFunctionData('swapTokens', [tokenIn, tokenOut, BigInt(amount), 1, Math.round(Date.now() / 1000) + 3600])
    const tx = {
      to: CONTRACT_ADDRESS,
      data
    }

    const txResponse = await signer.sendTransaction(tx)
    txResponse.wait()
   
} catch (e: any) {
  console.error(e);
  setError(e.message)
}
     }

}