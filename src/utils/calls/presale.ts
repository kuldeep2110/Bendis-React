import BigNumber from 'bignumber.js'
import { BIG_TEN } from 'utils/bigNumber'
import { ethers } from 'ethers'
import { parseEther } from "@ethersproject/units";
import { DEFAULT_GAS_LIMIT } from 'config'
import getGasPrice from 'utils/getGasPrice'
import { getSigner } from 'utils'

const options = {
  gasLimit: DEFAULT_GAS_LIMIT,
}

export const contributePresale = async (presaleContract, amount) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.buyTokens({ ...options, value: parseEther(amount), gasPrice })
  const receipt = await tx.wait()
}

export const claimPresale = async (presaleContract) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.claimTokens({ ...options, gasPrice })
  const receipt = await tx.wait()
}

export const refundPresale = async (presaleContract) => {
  const gasPrice = getGasPrice()
  const tx = await presaleContract.refund({ ...options, gasPrice })
  const receipt = await tx.wait()
}
