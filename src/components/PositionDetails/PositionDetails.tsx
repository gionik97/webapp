import React from 'react'
import SinglePositionInfo, { ILiquidityItem } from '@components/PositionDetails/SinglePositionInfo/SinglePositionInfo'
import SinglePositionPlot from '@components/PositionDetails/SinglePositionPlot/SinglePositionPlot'
import { Grid } from '@material-ui/core'
import useStyles from './style'

interface IProps {
  detailsData: Array<{ x: number; y: number }>
  style?: React.CSSProperties
  leftRangeIndex: number
  rightRangeIndex: number
  midPriceIndex: number
  currentPrice: number
  tokenY: string
  tokenX: string
  positionData: ILiquidityItem
  onClickClaimFee: () => void
  closePosition: () => void
  tokenXLiqValue: number
  tokenYLiqValue: number
  tokenXClaimValue: number
  tokenYClaimValue: number
  onZoomOutOfData: (min: number, max: number) => void
}

const PositionDetails: React.FC<IProps> = ({
  detailsData,
  style,
  leftRangeIndex,
  rightRangeIndex,
  midPriceIndex,
  currentPrice,
  tokenY,
  tokenX,
  positionData,
  onClickClaimFee,
  closePosition,
  tokenXLiqValue,
  tokenYLiqValue,
  tokenXClaimValue,
  tokenYClaimValue,
  onZoomOutOfData

}) => {
  const classes = useStyles()
  return (
    <Grid className={classes.wrapperContainer}>
      <Grid className={classes.positionDetails}>
        <SinglePositionInfo
          data={positionData}
          onClickClaimFee={onClickClaimFee}
          closePosition={closePosition}
          tokenXLiqValue={tokenXLiqValue}
          tokenYLiqValue={tokenYLiqValue}
          tokenXClaimValue={tokenXClaimValue}
          tokenYClaimValue={tokenYClaimValue}
        />
      </Grid>
      <Grid>
        <SinglePositionPlot
          data={detailsData}
          leftRangeIndex={leftRangeIndex}
          rightRangeIndex={rightRangeIndex}
          midPriceIndex={midPriceIndex}
          style={style}
          currentPrice={currentPrice}
          tokenY={tokenY}
          tokenX={tokenX}
          onZoomOutOfData={onZoomOutOfData}
        />
      </Grid>
    </Grid>
  )
}

export default PositionDetails