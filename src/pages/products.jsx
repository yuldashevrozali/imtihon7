import { Checkbox, Input, Select } from 'antd';
import React, { useState, useEffect } from 'react';

export default function Products(props) {
    const {checkbox} = props;
    const [selectedPrice, setSelectedPrice] = useState(100);
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedCompany, setSelectedCompany] = useState('all');
    const [selectedSort, setSelectedSort] = useState('a-z');
    const [freeShipping, setFreeShipping] = useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://strapi-store-server.onrender.com/api/products')
            .then((response) => response.json())
            .then((result) => setData(result.data))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);
    useEffect(() => {
        handleSearch();
    }, [selectedPrice, selectedProduct, selectedCategory, selectedCompany, selectedSort, freeShipping]);


    useEffect(() => {
        document.querySelector('h1').innerText = `selected price: ${selectedPrice}`;
    }, [selectedPrice]);

    const handleSearch = () => {
        const filteredData = data.filter((product) => {


            return (
                (selectedPrice >= product.attributes.price) &&
                (selectedProduct ? product.attributes.title.toLowerCase().includes(selectedProduct.toLowerCase()) : true) &&
                (selectedCategory === 'all' || selectedCategory === product.attributes.category) &&
                (selectedCompany === 'all' || selectedCompany === product.attributes.company) &&
                (!freeShipping || product.attributes.shipping)
            );
        });
        setData(filteredData);
    };

    const handleReset = () => {
        setSelectedPrice(100);
        setSelectedProduct('');
        setSelectedCategory('all');
        setSelectedCompany('all');
        setSelectedSort('a-z');
        setFreeShipping(false);
    };


    return (
        <div className='pt-100' style={checkbox ?{background:'#272935', color:'white'} :{background:'white'}}>
            <div style={checkbox ?{background:'#181920', color:'white'} :{background:'white'}} className="inputs ml-100 p-10 mr-100">
                <div style={checkbox ?{background:'#181920', color:'white'} :{background:'white'}} className="inputs flex">
                    <div>
                        <label htmlFor="product">search products</label><br />
                        <Input style={{ width: '250px' }} id='product' />
                    </div>

                    <div>
                        <label htmlFor="product">search category</label><br />
                        <Select placeholder='all' style={{ width: '250px' }} id='category'>
                            <option value="all">all</option>
                            <option value="tables">tables</option>
                            <option value="chairs">chairs</option>
                            <option value="kids">kids</option>
                            <option value="sofas">sofas</option>
                            <option value="beds">beds</option>
                        </Select>
                    </div>

                    <div>
                        <label htmlFor="product">search company</label><br />
                        <Select placeholder='all' style={{ width: '250px' }} id='category'>
                            <option value="all">all</option>
                            <option value="modenza">modenza</option>
                            <option value="luxora">chairs</option>
                            <option value="artifex">artifex</option>
                            <option value="comfora">comfora</option>
                            <option value="homestead">homestead</option>
                        </Select>
                    </div>

                    <div>
                        <label htmlFor="product">sort by</label><br />
                        <Select placeholder='a-z' style={{ width: '250px' }} id='category'>
                            <option value="a-z">a-z</option>
                            <option value="z-a">z-a</option>
                            <option value="low">low</option>
                            <option value="high">high</option>
                        </Select>
                    </div>
                </div>
                <div className='flex input-bottom'>
                    <div style={{ marginTop: '15px' }}>
                        <label htmlFor="input"><h1>select price: {selectedPrice}</h1></label>
                        <input
                            type="range"
                            name="price"
                            id='input1'
                            min="0"
                            max="100000"
                            className="range range-primary range-sm"
                            step="1"
                            value={selectedPrice}
                            onChange={(e) => setSelectedPrice(parseInt(e.target.value))}
                        />
                    </div>
                    <div style={{ marginLeft: '35px', marginTop: '15px' }} className='block'>
                        <label className='block' htmlFor="checkbox">free shipping</label>
                        <Checkbox
                            style={{ marginLeft: '35px', fontSize: '24px' }}
                            checked={freeShipping}
                            onChange={(e) => setFreeShipping(e.target.checked)}
                        />

                    </div>
                    <div>
                        <button onClick={handleSearch} style={{ width: '250px', height: '35px', background: '#057AFF', color: 'white', borderRadius: '10px', marginLeft: '100px' }}>search</button>
                    </div>
                    <div>
                        <button onClick={handleReset} style={{ width: '250px', height: '35px', background: '#C149AD', color: 'white', borderRadius: '10px', marginLeft: '20px' }}>reset</button>
                    </div>
                </div>
            </div>
            <div className="hero12">
                <h1 className='mb-5 mt-5'>22 products</h1>
                <hr />
                <div className='all-products'>

                    {data.map((product, index) => (
                        <div style={checkbox ?{background:'#272935', color:'white'} :{background:'white'}} key={index} className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={product.attributes.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{product.attributes.title}</h2>
                                <p>${product.attributes.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}



