import { LeftCircleOutlined, LeftOutlined } from '@ant-design/icons';
import {Button, Image, Tag} from 'antd'
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './Vmist';

export default function ProductInfo() {

    const { key } = useParams();
    const navigate = useNavigate();
    const [item, setItem] = useState(null);

    useEffect(() => {
            setItem(data.find(i => i.key == key));
        
    }, []);

    // const item = {
    //     key: 6,
    //     title: "Карієс",
    //     time: '45 хв',
    //     discount: 100,
    //     price: 600
    // }

    return (
        <>
        <Button onClick={() => navigate(-1)} color="default" variant="text" icon={<LeftCircleOutlined/>}></Button>

       {item ?
        (<div>
              <h2>{item.title}</h2>
                    <p>{item.categoryName}</p>
                    <hr />
                    <Image
                        width={200}
                        src={item.imageUrl}
                    />
                    <p>Price: {item.price}$</p>
                    <p>Discount: {item.discount}%</p>
                    <p>Availability: {item.quantity > 0 ?
                        <Tag color="green">{item.quantity}</Tag>
                        :
                        <Tag color="volcano">Out of Stock</Tag>}</p>

                    <p>{item.description}</p>
        </div>)
        :
        (<p>Loading...</p>)}
        </>
    );
}


