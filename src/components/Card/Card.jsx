import React from 'react'
import { Link } from 'react-router-dom';
import './index.scss'

const Card = ({data}) => {
    return (
        <div>
            <div className="home__card">
            {data && data.imgPath && (<img src={data.imgPath} alt="model" />)}
                    <p>{data.title}</p>
                    <button>
                        <Link to={`/pay/${data.id}`}>Adicionar</Link>
                    </button>
                </div>
        </div>
    )
}

export default Card