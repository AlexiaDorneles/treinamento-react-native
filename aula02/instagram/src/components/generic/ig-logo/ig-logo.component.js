import React from 'react'
import { IgIcon } from '../ig-icon/ig-icon.component'

export const IgLogo = ({ style, isWhite }) => (
  isWhite ? <IgIcon style={style} name="instagram_lg_white" />
    : <IgIcon style={style} name="instagram_lg_black" />
)
