/* eslint-disable @next/next/no-img-element */
'use client';

import React, { ButtonHTMLAttributes } from 'react';

export type ServerLogoProps = {
  image?: string;
  isNotification?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ServerLogo = ({
  isNotification,
  image,
  ...rest
}: ServerLogoProps) => {
  return (
    <button
      {...rest}
      className="group justify-center w-[72px] hover:cursor-pointer transition-all "
    >
      <div className="flex justify-center flex-row-reverse">
        <img
          className="h-12 border rounded-[50px] transition-all group-hover:rounded-[16px] group-focus:rounded-[16px] group-active:translate-y-[2px]"
          src={image}
          alt="server logo"
        />

        {isNotification && (
          <div className="relative max-w-full">
            <div className="relative top-[50%] left-[-12px]">
              <div className=" absolute w-1 h-2 rounded-full bottom-1/2  bg-slate-50 group-hover:h-5 transition-all"></div>
              <div className="w-1 h-2 rounded-full transition-all  bg-slate-50 group-hover:h-4"></div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};

export type ServerLogoIconProps = {
  isNotification?: boolean;
  isSideBottomBar?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const ServerLogoIcon = ({
  isNotification,
  children,
  isSideBottomBar,
  ...rest
}: ServerLogoIconProps) => {
  return (
    <button
      {...rest}
      className="group justify-center w-[72px] hover:cursor-pointer transition-all"
    >
      <div className="flex justify-center flex-row-reverse rounded-[50px]">
        <div className="relative h-12 w-12 border rounded-[50px] transition-all group-hover:rounded-[16px] group-focus:rounded-[16px]  group-active:translate-y-[2px]">
          <div className="absolute bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 ">
            {children}
          </div>

          {isSideBottomBar && (
            <div className="absolute -bottom-[10px] left-1/2 -translate-x-1/2 bg-white h-[2px] w-8 rounded-full"></div>
          )}
        </div>
        {isNotification && (
          <div className="relative max-w-full">
            <div className="relative top-[50%] left-[-12px]">
              <div className=" absolute w-1 h-2 rounded-full bottom-1/2  bg-slate-50 group-hover:h-5 transition-all"></div>
              <div className="w-1 h-2 rounded-full transition-all  bg-slate-50 group-hover:h-4"></div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
};
