import {Image, Tag} from 'antd'
import React from 'react';

export default function ProductInfo() {
    const item = {
        key: 6,
        title: "Карієс",
        time: '45 хв',
        discount: 100,
        price: 600
    }

    return (
        <div>
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
        </div>
    );
}


