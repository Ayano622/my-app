import { Box, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'
import { MenuCardProps } from './types'

export const MenuCard: React.FC<MenuCardProps> = (props) => {
  const {id, name, image, handleCardOnClick} = props
  const router = useRouter()
  const cardOnClick = () => {
    // レシピページに遷移
    router.push(`search/${id}`)
  }

  return (
    <Card 
    className={name}
    sx={{height: '320px', width: '370px', margin: '20px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <Box onClick = {handleCardOnClick}>
          <Image 
            src={image} // {image} propsにする
            alt={name}
            width={350}  // 幅（必須）
            height={250}/>
          </Box>    
        </div>
    </Card>
  )
}
