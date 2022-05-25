import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 1, 2) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CHEESE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      56: '0xfB01CE6b28597daCc703A385865D4f637e104297',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.cake,
    isTokenOnly: true,
  },
  {
    pid: 1,
    lpSymbol: 'CHEESE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x3714c3dC40afe192bB12Ab1BECc9b9416a7c6280',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 3,
    lpSymbol: 'Hamster',
    lpAddresses: {
      97: '',
      56: '0x679D5b2d94f454c950d683D159b87aa8eae37C9e',
    },
    token: serializedTokens.hamster,
    quoteToken: serializedTokens.cake,
    isTokenOnly: true,
  },
  {
    pid: 4,
    lpSymbol: 'HAM-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x99bF9cC0154655C5e913b752984A92Ad391aFE32',
    },
    token: serializedTokens.hamster,
    quoteToken: serializedTokens.wbnb,
  },
]

export default farms
