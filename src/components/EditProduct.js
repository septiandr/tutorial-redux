import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts, productSelector, updateProducts } from '../feature/productSlice'
import { useParams, useNavigate } from 'react-router-dom'

const EditProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams()

    const product = useSelector((state)=> productSelector.selectById(state, id));

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    useEffect(() => {
        if(product){
            setTitle(product.title);
            setPrice(product.price);
        }
    },[product])

    const handleUpdate = async(e) =>{
        e.preventDefault();
        await dispatch(updateProducts({id, title, price}));
        navigate("/")
    }
  return (
    <div>
        <h1>Edit Data</h1>
        <form  onSubmit={handleUpdate} className='box mt-5'>
            <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                    <input type="text" className="input" 
                    placeholder="Title"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Price</label>
                <div className='control'>
                    <input type="text" 
                    className="input" 
                    placeholder="Price"
                    value={price}
                    onChange={(e)=> setPrice(e.target.value)}
                    />
                </div>
            </div>
            <div className='field'>
                <button type='submit' className='button is-success'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default EditProduct