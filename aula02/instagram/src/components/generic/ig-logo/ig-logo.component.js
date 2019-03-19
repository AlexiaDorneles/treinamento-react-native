import React from 'react'
import { IgIcon } from '../igIcon/ig-icon.component'

export const IgLogo = ({ style, isWhite }) => (
  isWhite ? <IgIcon style={style} name="icon-instagram_lg_white" />
    : <IgIcon style={style} name="icon-instagram_lg_black" />
)
