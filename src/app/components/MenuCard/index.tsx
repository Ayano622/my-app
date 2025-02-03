import { Card } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const MenuCard = () => {
  return (
    <Card sx={{height: '300px', width: '250px', margin: '20px', display: 'flex', alignItems:'center'}}>
        <div>
            <Image 
            src="/curry1.jpg" // {imageOfCurries} propsにする
            alt="curry1"
            width={200}  // 幅（必須）
            height={200}  />
        </div>
    </Card>
  )
}
