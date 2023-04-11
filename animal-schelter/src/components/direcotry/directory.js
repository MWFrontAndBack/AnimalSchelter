import React from "react";
import './directory.css';
import { Card } from "../navbars/card/Card";

const Direcotry = () => {
    let categories = [
        {
            id: 1,
            title: 'dogs',
            img: 'https://thumbs.dreamstime.com/b/golden-retriever-dog-21668976.jpg'
        },
        {
            id: 2,
            title: 'cats',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWj4k6fAZAsbhKUkDCBy_EXKe79lhUglUhZA&usqp=CAU'
        },
        {
            id: 3,
            title: 'rabbits',
            img: 'https://thumbs.dreamstime.com/b/rabbit-14575137.jpg'
        },
        {
            id: 4,
            title: 'hamster',
            img: 'https://live.staticflickr.com/7065/14039139471_594ae1f6ff_b.jpg'
        },
        {
            id: 5,
            title: 'turtle',
            img: 'https://zoonews.pl/wp-content/uploads/2022/03/zolw-stepowy.jpg'
        }
    ]
    return (
        <div className='container'>
            {categories.map(cat => {
                return <Card key={cat.id} category={cat} />;
            })}
        </div>
    )
}
export { Direcotry }