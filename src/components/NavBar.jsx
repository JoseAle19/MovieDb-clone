/* eslint-disable react/prop-types */
import { iconClose, iconMenu } from "../svgs/icons";
import { removeOverflow } from "../utils/overflowbody";
import "../App.css";
export const NavBar = ({ isOpen, setIsOpen }) => {
  removeOverflow(isOpen);
  return (
    <>
      <header className="relative">
        <div
          className={
            isOpen
              ? " md:hidden xl:hidden 2xl:hidden fixed z-20  right-[0px] font-epilogue flex  animate-openmenu w-56  flex-col bg-sky-950/90     h-screen"
              : " md:hidden xl:hidden 2xl:hidden fixed z-20 animate-closemenu right-[-224px] flex w-56  flex-col   h-screen bg-sky-950/90   "
          } 
        >
          {/* Cerrar la navegacion */}
          <div className="flex flex-col items-end m-2 ">
            <span
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className=" block xl:hidden md:hidden"
            >
              {iconClose}
            </span>
          </div>
          <div className="h-full m-5 flex flex-col text-white items-end  text-2xl font-bold">
            <p className="mt-2 hover:scale-125 duration-300" >Peliculas</p>
            <p className="mt-2 hover:scale-125 duration-300" >Favoritos</p>
            <p className="mt-2 hover:scale-125 duration-300" >Ajustes</p>
            <p className="mt-2 hover:scale-125 duration-300" >Cuenta</p>
            <p className="mt-2 hover:scale-125 duration-300" >Más</p>
          </div>
        </div>
        <nav className="fixed  z-10 w-full p-2 bg-sky-950 flex flex-row  justify-between md:justify-between items-center ">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div className="w-14 md:w-40 xl:w-40 mx-4 ">
            <img
              className="hidden md:block xl:block"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
            />
            <img
              className="block z-10 md:hidden xl:hidden"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt=""
            />
          </div>
          <div className=" hidden  md:flex gap-8 items-center  text-white  font-bold text-sm ">
            <p>Películas </p>
            <p>Programas de televisión</p>
            <p>Personas</p>
            <p>Más</p>
          </div>
          <span
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className=" block xl:hidden md:hidden"
          >
            {iconMenu}
          </span>
        </nav>
      </header>
    </>
  );
};
