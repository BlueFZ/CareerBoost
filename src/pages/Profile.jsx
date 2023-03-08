import React from "react";
import { Link, Outlet } from "react-router-dom";
import WebLayout from "../layout/WebLayout";
import avatar2 from '../assets/profile/avatar2.svg'

const Profile = () => {
  return (
    <WebLayout>
      <div className="flex flex-col xl:flex-row p-6 gap-8">
        <div className="flex flex-col basis-3/12">
          <div className="flex flex-col gap-8 bg-neutral-50 py-6 xl:py-10 px-8 rounded-xl shadow-xl mb-4 xl:mb-8">
            <img className=" md:w-3/12 xl:w-5/12 mx-auto" src={avatar2} alt="" />
            <div className="flex flex-col gap-4 justify-center items-start">
              <h1 className="font-bold h5">Pengaturan Akun</h1>
              <Link to="data" className="h6 hover:font-bold hover:text-primary400 transition-all duration-300">
                Data Pribadi
              </Link>
              <Link to="pengalaman" className="h6 hover:font-bold hover:text-primary400 transition-all duration-300">
                Pengalaman
              </Link>
              <Link to="langganan" className="h6 hover:font-bold hover:text-primary400 transition-all duration-300">
                Langganan
              </Link>
            </div>
          </div>
          <Link>
            <button className="bg-red-500 text-white py-4 md:py-8 rounded-xl w-full shadow-md shadow-red-800 hover:shadow-lg hover:shadow-red-800 transition-all duration-300">
              <p className="h5 font-bold">Log out</p>
            </button>
          </Link>
        </div>
        <div className=" p-5 md:p-10 xl:py-16 xl:px-8 bg-neutral-50 rounded-xl shadow-xl basis-9/12 h-max xl:mt-0">
          <Outlet />
        </div>
      </div>
    </WebLayout>
  );
};

export default Profile;
