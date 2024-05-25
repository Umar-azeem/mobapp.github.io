import React from "react";
import iphonex from "../img/iphonex.png";


export function Steps() {
    return (
        <>
            <section className="container m-auto bg-slate-100">
                <div className="container flex justify-between m-auto " >
                    <div className="container flex flex-col justify-start m-auto ">
                        <div className="container flex py-4 px-4">
                            <div className=" rounded-full border-white shadow-xl bg-white mt-14 w-28 h-28 flex justify-center py-8 px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className="font-samibold text-center text-4xl hover:text-white">1</h1></div><div className="container m-8"><h2 className="text-purple-900 text-5xl py-6">Create an Account</h2><p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                        <div className="container flex py-4 px-4">
                            <div className=" rounded-full border-white shadow-xl bg-white mt-14 w-28 h-28 py-8 px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className=" font-samibold text-center text-4xl hover:text-white">2</h1></div><div className="container m-8"><h2 className="text-purple-900 text-5xl py-6">Share with friend</h2><p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                        <div className="container flex py-4 px-4">
                            <div className=" rounded-full border-white shadow-xl bg-white mt-14 w-28 h-28 py-8 px-8 text-pink-700 hover:bg-pink-700 hover:text-white"><h1 className=" font-samibold text-center text-4xl hover:text-white">3</h1></div><div className="container m-8"><h2 className="text-purple-900 text-5xl py-6">Enjoy your life</h2><p className="text-gray-500 text-base">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati vel <br></br> exercitationem eveniet vero maxime ratione </p></div>
                        </div>
                    </div>
                    <img src={iphonex} className="py-36" ></img>
                </div>
            </section>
        </>
    );
}