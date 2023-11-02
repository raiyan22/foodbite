import { Card } from '@mui/material'
import React from 'react'

const RestaurantCard = ({item}) => {
  const navigate = useNavigate();
  return (
    <Card className='m-5 w-[18rem] productCard'>
          <div onClick={navigate(`/restaurant/${item.location}/${item.name}/${item.id}`)}>
          {/* https://youtu.be/iPrKCB5IKPM?t=4769   */}
          </div>
    </Card>
  )
}

export default RestaurantCard