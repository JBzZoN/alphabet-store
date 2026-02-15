import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/alphaService'
import './Dashboard.css'
import Title from '../../components/Title/Title'
import {toast} from 'react-toastify'

function Dashboard() {

    const [data, setData] = useState(null)

    useEffect(() => {
        async function getData() {
            const myData = await getAll()
            setData(myData)
        }
        getData()
    },[])

    const onAddToCart = () => {
        toast.success("Added to cart")
    }

    return (
        <div>
            <Title title="AlphaStore" subTitle="HOME" />

            <div className="cards-grid">
                {data
                ? data.map((item, index) => (
                    <div className="card" key={index}>

                    <div className="alphabet-box">
                        <span className="alphabet">{item.alphabet}</span>
                    </div>

                    <h3 className="owners-title">Owners</h3>

                    <div className="owners">
                        {item.ownerName == null? "None": item.ownerName}
                    </div>

                    <button className="cart-btn" onClick={onAddToCart}>Add To Cart</button>

                    </div>
                ))
                : null}
            </div>
        </div>
        );

}

export default Dashboard
