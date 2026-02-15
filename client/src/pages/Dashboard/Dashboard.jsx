import React, { useEffect, useState } from 'react'
import { getAll } from '../../services/alphaService'
import './Dashboard.css'
import Title from '../../components/Title/Title'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../slices/cart'

function Dashboard() {

    const [data, setData] = useState(null)

    const dispatcher = useDispatch()

    const cart = useSelector(store => store.cart)
    console.log(cart)


    useEffect(() => {
        async function getData() {
            const myData = await getAll()
            setData(myData)
        }
        getData()
    },[])

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

                    <h3 className="owners-title">Owner</h3>

                    <div className="owners">
                        {item.ownerName === null? "None": item.ownerName}
                    </div>

                    <button className={"cart-btn" + (cart.some(c => c.id == item.id) ? "-red" : "")} onClick={() => {
                        dispatcher(addToCart(item))
                    }}>{cart.some(c => c.id == item.id) ? "Remove From Cart" : "Add To Cart"}</button>

                    </div>
                ))
                : null}
            </div>
        </div>
        );

}

export default Dashboard
