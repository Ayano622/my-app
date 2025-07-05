import { SxProps, Theme } from '@mui/material/styles'
import { ReactNode } from 'react'

export type Props = {
  children?: ReactNode
  sx?: SxProps<Theme>
}