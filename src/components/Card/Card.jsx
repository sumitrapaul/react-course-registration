/* eslint-disable no-unused-vars */
/*eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { BsBook } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelectClick = (course) => {
   
    const isRemaining = selectedCourse.find((topic) => topic.id == course.id);
    let creditCount = course.credit;
    if (isRemaining) {
      toast("Course name already added");
    } else {
      selectedCourse.forEach((topic) => {
        creditCount += topic.credit;
      });
      const totalRemaining = 20 - creditCount;

      if (totalRemaining < 0 && creditCount > 20) {
        return toast("No extra credit");
      } else {
        setRemaining(totalRemaining);
        setTotalCredit(creditCount);

        if(!isRemaining){
          setSelectedCourse([...selectedCourse, course]);
        }
        }
       
    }
  };
  // console.log(selectedCourse)

  return (
    <div>
      <div className="flex">
        <div className="grid grid-cols-3 gap-4 w-3/4 px-8">
          {courses.map((course) => (
            <div key={course.id} className="border-2 p-4 rounded-xl">
              <img
                className="w-full h-52 mx-auto mb-4 rounded-xl"
                src={course.image}
                alt=""
              />
              <h3 className="text-xl font-semibold mb-4">{course.title}</h3>
              <p className="text-sm mb-4 h-30">{course.description}</p>

              <div className="flex gap-4 mb-4">
                <div className="flex">
                  <h4 className="text-2xl text-gray-900">
                    <PiCurrencyDollarLight />
                  </h4>
                  <p className="text-base font-medium">Price:{course.price}</p>
                </div>
                <div className="flex gap-2">
                  <h4 className="text-2xl text-gray-400">
                    <BsBook />
                  </h4>
                  <p className="text-base font-medium">
                    Credit:{course.credit}hr
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => handleSelectClick(course)}
                  className="bg-blue-500 rounded-lg w-full h-10 text-white"
                >
                  Select
                </button>
                <ToastContainer />
              </div>
            </div>
          ))}
        </div>
        <div className="w-1/4">
          <Cart
            selectedCourse={selectedCourse}
            remaining={remaining}
            totalCredit={totalCredit}
          ></Cart>
        </div>
      </div>
    </div>
  );
};

export default Card;
