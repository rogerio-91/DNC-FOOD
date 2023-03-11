import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu'
import Card from '../../components/Card/Card'


const Home = ({data}) => {
  return (
    <div className='home'>
        <HeaderMenu />
        <div className='home__products'>
                {
                    data.map(product => (<Card key={product.id} data={product} />))
                }
            </div>
    </div>
  )
}

export default Home