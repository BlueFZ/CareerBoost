import React from "react";
import { Link } from "react-router-dom";
import course from "../../data/Courses.json";

const Card = () => {
  return (
    <>
      {course.map((data, index) => {
        return (
          <Link to='/courseDetail' key={index} className="flex flex-col justify-center bg-neutral-50 p-5 w-10/12 md:w-5/12 xl:w-3/12 2xl:w-2/12 rounded-3xl shadow-lg">
            <div className="flex justify-center">
              <img className="" src={data.img} />
            </div>
            <div className="flex flex-col mt-3 justify-center items-center">
              <h5 className="text-primary600 font-bold text-base md:text-lg">
                {data.title}
              </h5>
              <div className="flex gap-2 my-3">
                <p className="text-xl md:text-2xl">{data.star}</p>
                <div className="flex items-center gap-1">
                  <p className="text-secondary500 text-base md:text-lg">{data.rating}</p>
                  <p className="text-neutral-400 text-sm md:text-base">
                    {data.vote}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <p className="text-sm md:text-base text-justify xl:text-left">
                  {data.desc}
                </p>
              </div>
              <div className="self-start mt-3">
                <p className="text-secondary500 font-bold self-start md:text-lg">
                  {data.price}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Card;
