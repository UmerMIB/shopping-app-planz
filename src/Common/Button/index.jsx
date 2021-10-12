import React from 'react'
import ReactLoading from 'react-loading'
import './style.scss'
import { Button } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

export const BtnPrimary = ({
  title,
  backgroundColor,
  type,
  loader,
  color,
  onClick,
  disabled,
  loaderColour,
  className,
  border,
}) => {
  return (
    <Button
      style={{
        backgroundColor: backgroundColor ? backgroundColor : '#1181F2',
        color: color ? color : '#fff',
        border: border,
      }}
      className={className ? className + ' Button' : 'Button'}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {loader ? (
        <div className="loader-span">
          <ReactLoading
            type="bars"
            color={loaderColour ? loaderColour : '#fff'}
            width={40}
            height={40}
          />
        </div>
      ) : (
        <div className="title">
          {title}
          <span className="icon">
            &nbsp;
            {<ArrowForwardIcon style={{ fontSize: '15px' }} />}
          </span>
        </div>
      )}
    </Button>
  )
}
