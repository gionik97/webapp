import { Token, tokens } from '@consts/static'
import { PoolWithAddress } from '@reducers/pools'
import { createSelector } from 'reselect'
import { IPositionsStore, positionsSliceName } from '../reducers/positions'
import { keySelectors, AnyProps } from './helpers'
import { pools } from './pools'

const store = (s: AnyProps) => s[positionsSliceName] as IPositionsStore

export const { positionsList } = keySelectors(store, ['positionsList'])

export const positionsWithPoolsData = createSelector(
  pools,
  positionsList,
  (allPools, { list }) => {
    const tokensByKey: Record<string, Token> = tokens.reduce((prev, token) => {
      return {
        [token.address.toString()]: token,
        ...prev
      }
    }, {})

    const poolsByKey: Record<string, PoolWithAddress> = allPools.reduce((prev, pool) => {
      return {
        [pool.address.toString()]: pool,
        ...prev
      }
    }, {})

    return list.map((position) => ({
      ...position,
      poolData: poolsByKey[position.pool.toString()],
      tokenX: tokensByKey[
        poolsByKey[position.pool.toString()].tokenX.toString()
      ],
      tokenY: tokensByKey[
        poolsByKey[position.pool.toString()].tokenY.toString()
      ]
    }))
  }
)

export const positionsSelectors = { positionsList }

export default positionsSelectors
