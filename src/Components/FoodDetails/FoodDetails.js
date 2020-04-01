import React from 'react';
import { useParams } from 'react-router-dom';
import BreakfastData from '../../fakeData/BreakfastData';
import DinnerData from '../../fakeData/DinnerData';
import LunchData from '../../fakeData/LunchData';

const FoodDetails = () => {
    const { itemKey } = useParams()
    const allFoods = [...BreakfastData, ...DinnerData, ...LunchData]
    const getItem = allFoods.find(pd => pd.id === itemKey)
    console.log(getItem);
    return (
        <div>
            <h2> {itemKey} Food Details</h2>
        </div>
    );
};

export default FoodDetails;