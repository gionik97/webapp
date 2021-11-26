import React, { useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import useStyles from './style'
import classNames from 'classnames'
import { sleep } from '@invariant-labs/sdk'
import { ContactSupportOutlined } from '@material-ui/icons'

interface Props {
  content: string
  disabled?: boolean
}

const AnimatedButton: React.FC<Props> = ({
  content,
  disabled = false
}) => {
  const [animation, setAnimation] = useState<boolean>(false)
  const classes = useStyles()
  const elRef = useRef() as React.MutableRefObject<HTMLInputElement>
  return (
    <Button
      disabled={disabled}
      variant='contained'
      className={animation ? `${classes.button} ${classes.buttonRelease}` : classes.button}
      onClick={() => {
        setAnimation(true)
        setTimeout(() => {
          setAnimation(false)
        }, 5000)
      }}
      // onMouseLeave={() => {
      //   elRef.current.style.left = '-100%'
      // }}
    >
      <div className={animation ? classes.backgroundRelease : classes.background} ref={elRef}>
      </div>
      <p className={classes.buttonContent}>{animation ? 'in progress' : content}</p>
    </Button>
  )
}

export default AnimatedButton