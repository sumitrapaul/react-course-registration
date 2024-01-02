/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({selectedCourse,remaining,totalCredit}) => {
    let serial=1;
    return (
        <div className='pr-8 text-center'>
           <div className='ml-4 border-2 rounded-xl mb-2'>
            <h3 className='text-xl font-bold text-blue-500 mb-4'>Credit Hour Remaining {remaining} hr</h3>
            <hr className='mb-2 w-3/4 p-2 mx-auto'></hr>
           
           <h2 className='text-xl font-bold mb-2'>Course Name</h2>
           <ol>
           {
            selectedCourse.map((course) => (
                <li key={course.id}>{serial++} {course.title}</li>
               ))
           }
           </ol>
           <hr className='mb-2 w-3/4 p-2 mx-auto'></hr>
           <h4 className='text-base font-medium text-gray-500 mb-2'>Total Credit Hour :{totalCredit}</h4>
           <hr className='mb-2 w-3/4 p-2 mx-auto'></hr>
           
           </div>

          
        </div>
    );
};


export default Cart;