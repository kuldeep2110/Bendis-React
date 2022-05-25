import BigNumber from 'bignumber.js'
import { createSlice } from '@reduxjs/toolkit'
import { LaunchState, AppThunk } from 'state/types'
import { fetchBalance, fetchStartTime, fetchEndTime, fetchSoftCapReached, fetchFinalized, fetchContribution } from './fetchLaunch'

const initialState: LaunchState = {
  start: null,
  end: null,
  balance: null,
  softCapReached: false,
  finalized: false,
  contribution: null
}

export const fetchLaunchDataAsync = (account): AppThunk => async (dispatch) => {
  let userContribution = new BigNumber(0)
  if (account) {
    userContribution = await fetchContribution(account)
  }
  const launchData = {
    start: await fetchStartTime(),
    end: await fetchEndTime(),
    balance: await fetchBalance(),
    softCapReached: await fetchSoftCapReached(),
    finalized: await fetchFinalized(),
    contribution: userContribution
  }

  dispatch(setLaunchData(launchData))
}

export const LaunchSlice = createSlice({
  name: 'Launch',
  initialState,
  reducers: {
    setLaunchData: (state, action) => {
      const launchData = action.payload
      if (!state.start) {
        state.start = launchData.start
      }
      if (!state.end) {
        state.end = launchData.end
      }      
      state.balance = launchData.balance
      state.softCapReached = launchData.softCapReached
      state.finalized = launchData.finalized
      state.contribution = launchData.contribution
    },
  },
})

// Actions
export const { setLaunchData } = LaunchSlice.actions

export default LaunchSlice.reducer