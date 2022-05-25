import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xbe20cc5d3B886e9f7aD70F94D36C66204Dd943ff',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '600',
    sortOrder: 1,
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.hamster,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x16e1D8Ed68464E483fB8Cf069d896E90B618200E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '40',
    sortOrder: 2,
    isFinished: false,
  },
]

export default pools
