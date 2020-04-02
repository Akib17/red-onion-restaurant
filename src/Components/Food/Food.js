import React from 'react';
import Foods from '../../FakeData/FakeData'
import { useState } from 'react';
import { useEffect } from 'react';
import SingleFoodItem from '../SingleFoodItem/SingleFoodItem';
import './Food.scss'

const Food = () => {
    const [activeCategory, setActiveCategory] = useState({
        breakfastActive: true,
        lunchActive: false,
        dinnerActive: false,
    })
    const [activeItems, setActiveItems] = useState('breakfast')
    const [items, setItems] = useState([])
    useEffect(() => {
        const selectedItems = Foods.filter(item => item.category === activeItems)
        setItems(selectedItems)
    }, [activeItems])
    const categoryHandler = category => {
        if (category === 'breakfast') {
            let pastActiveItems = activeCategory
            pastActiveItems.breakfastActive = true
            pastActiveItems.lunchActive = false
            pastActiveItems.dinnerActive = false
            setActiveCategory(pastActiveItems)
        } else if (category === 'lunch') {
            let pastActiveItems = activeCategory
            pastActiveItems.breakfastActive = false
            pastActiveItems.lunchActive = true
            pastActiveItems.dinnerActive = false
            setActiveCategory(pastActiveItems)
        } else if (category === 'dinner') {
            let pastActiveItems = activeCategory
            pastActiveItems.breakfastActive = false
            pastActiveItems.lunchActive = false
            pastActiveItems.dinnerActive = true
            setActiveCategory(pastActiveItems)
        }
        setActiveItems(category)
    }
    const { breakfastActive, lunchActive, dinnerActive } = activeCategory
    
    return (
        <div className="container Food">
            <div className="row">
                <nav className="FoodNav">
                    <ul>
                        <li className={breakfastActive ? 'active navItem' : 'navItem'} onClick={() => categoryHandler('breakfast')} >Breakfast</li>
                        <li className={lunchActive ? 'active navItem' : 'navItem'} onClick={() => categoryHandler('lunch')} >Lunch</li>
                        <li className={dinnerActive ? 'active navItem' : 'navItem'} onClick={() => categoryHandler('dinner')} >Dinner</li>
                    </ul>
                </nav>
            </div>
            <div className="row justify-content-md-center">
                {
                    items.map(item => <SingleFoodItem key={item.id} data={item} ></SingleFoodItem>)
                }
            </div>
        </div>
    );
};

export default Food;