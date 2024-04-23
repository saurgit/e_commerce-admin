import React, { useState } from 'react'
import './newProduct.css'
import { Publish } from '@mui/icons-material'
import Topbar from '../../component/topbar/Topbar'
import Sidebar from '../../component/sidebar/Sidebar'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../../firebase'
import {addProduct} from '../../redux/apiCalls'
import {useDispatch} from "react-redux"


function NewProduct() {
    const [inputs, setInputs] = useState({ 'inStock': true })
    const [file, setFile] = useState(null)
    const [cat, setCat] = useState([])
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    const handleCat = (e) => {
        setCat(e.target.value.split(','))

    }

    const handleClick = (e) => {
        e.preventDefault();
        const fileName = new Date().getTime() + file.name;
        const storage = getStorage(app)
        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    // console.log('File available at', downloadURL);
                    const product = {...inputs,img:downloadURL,categories:cat}
                    console.log(product)
                    addProduct(dispatch,product);
                    // console.log(inputs)
                });
            }
        );



    }

    // console.log(file)


    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />


                <div className='newProduct'>
                    <h1 className="newProductTitle">
                        New Product
                    </h1>
                    <form className='newProductForm'>
                        <div className="newProductFormItem">
                            <label>
                                Product Image
                            </label>
                            <input name='img' type="file" id='file' onChange={(e) => setFile(e.target.files[0])} />
                        </div>

                        <div className="newProductFormItem">
                            <label>
                                Title
                            </label>
                            <input name='title' type="text" placeholder='Ladies top' onChange={handleChange} />
                        </div>
                        <div className="newProductFormItem">
                            <label>
                                Description
                            </label>
                            <input name='desc' type="text" placeholder='Description...' onChange={handleChange} />
                        </div>
                        <div className="newProductFormItem">
                            <label>
                                Price
                            </label>
                            <input name='price' type="Number" placeholder='1000' onChange={handleChange} />
                        </div>
                        <div className="newProductFormItem" >
                            <label>
                                Categories
                            </label>
                            <input name='categories' type="text" placeholder='Jeans,skirts' onChange={handleCat} />
                        </div>


                        <div className="newProductFormItem">
                            <label>Stock</label>
                            <select className='newProductSelect' name='inStock' id='stock' onChange={handleChange}>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                            <button className='newProductButton' onClick={handleClick}>
                                CREATE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default NewProduct