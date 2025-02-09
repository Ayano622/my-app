import { Box, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'
import { MenuCardProps } from './types'

export const MenuCard: React.FC<MenuCardProps> = (props) => {
  const {id, name} = props
  const router = useRouter()
  const cardOnClick = () => {
    // レシピページに遷移
    router.push(`search/${id}`)
  }

  return (
    <Card 
    className={name}
    sx={{height: '300px', width: '250px', margin: '20px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <Box onClick = {cardOnClick}>
          <Image 
            src="/okashiSumple1.jpeg" // {image} propsにする
            alt={name}
            width={250}  // 幅（必須）
            height={250}/>
          </Box>    
        </div>
    </Card>
  )
}
