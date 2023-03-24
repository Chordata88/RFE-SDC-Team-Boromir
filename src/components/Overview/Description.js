import React from 'react';
import {useState, useEffect} from 'react'


const Description = ({info}) => {

  return (
    <div className="flex flex-row box-border w-5/6 h-40 p-4">
      <div className="w-3/4">
        <div className="font-bold">{info ? (info.slogan) : (<></>)}</div>
        <div className="text-gray-400">
          {info ? (info.description) : (<></>)}
        </div>
      </div>
      <div className="border-l-2 border-black pl-4">
        {info && info.features ? (
        <div>
          {info.features.map((item, index) =>
            <div key={index} className="flex w-[250px]">
              <p className="text-green-400 mr-[6px]">✓</p>
              <p className="flex font-bold">{item.value} {item.feature}</p>
            </div>
          )}
        </div>
        ) : (
        <p></p>)}
      </div>
    </div>
  );
}

export default Description;