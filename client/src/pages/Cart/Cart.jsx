import React, { useState } from 'react'
import Title from '../../components/Title/Title'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../slices/cart'
import { toast } from 'react-toastify'
import { buyAlphas } from '../../services/alphaService'

function Cart() {

    const data = useSelector(store => store.cart)

    const [name, setName] = useState("")
        
    const navigate = useNavigate()

    const dispatcher = useDispatch()

    const buyAlpha = async () => {

        if (!name.trim()) {
            toast.error("Enter your name");
            return;
        }

        await buyAlphas(data.map(e => e.id), name.charAt(0).toUpperCase() + name.slice(1))
        toast.success("Purchased!")
        dispatcher(clearCart())
        navigate('/')
    }

    return (
        <div>
            <Title title="AlphaStore" subTitle="CART"/>

            {data.length == 0 ? <div className="empty-cart mt-3">
                    <div className="empty-icon">🛒</div>
                    <h2>Your cart feels lonely</h2>
                    <p>Add some alphabets to get started</p>
                </div> : null}

            <div className="cart-cards-grid">

                {data.length == 0 ? 
                null
                : 
                data.map((item, index) => (
                    <div className="cart-card" key={index}>
                        <span className="alphabet">{item.alphabet}</span>
                    </div>
                    ))
                }

            </div>
            {data.length === 0 ? null : (
                <div className="buy-section">

                    <div className="buy-row">

                    {/* INPUT */}
                    <div className="buy-input">
                        <div className="form-floating">
                        <input
                            type="text"
                            className="form-control big-input"
                            id="buyerName"
                            placeholder=""
                            autoComplete='off'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="buyerName">Enter your name</label>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <div className="buy-button">
                        <button
                        className="buy-btn"
                        onClick={buyAlpha}
                        disabled={!name.trim()}
                        >
                        Buy Now
                        </button>
                    </div>

                    </div>
                </div>
            )}



            
            
        </div>
    )
}

export default Cart
