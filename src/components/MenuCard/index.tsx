import { Box, Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import {useRouter} from 'next/router'

export const MenuCard = () => {
  const router = useRouter()
  const cardOnClick = () => {
    // レシピページに遷移
    router.push('/search')
  }

  return (
    <Card 
    sx={{height: '300px', width: '250px', margin: '20px', display: 'flex', justifyContent: 'center'}}>
        <div>
          <Box onClick = {cardOnClick}>
          <Image 
            src="/okashiSumple1.jpeg" // {imageOfCurries} propsにする
            alt="curry1"
            width={250}  // 幅（必須）
            height={250}/>
          </Box>    
        </div>
    </Card>
  )
}
