/* eslint-disable @next/next/no-img-element */
'use client';

import React, { ReactComponentElement } from 'react';

export type ServerLogoProps = {
  image?: string;
  isNotification?: boolean;
};

export const ServerLogo = ({ image, isNotification }: ServerLogoProps) => {
  return (
    <div className="group justify-center w-[72px] hover:cursor-pointer transition-all active:translate-y-[2px]">
      <div className="flex justify-center flex-row-reverse">
        <img
          className="h-12 border rounded-[50px] transition-all group-hover:rounded-[16px] group-focus:rounded-[16px] "
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
    </div>
  );
};

export type ServerLogoIconProps = {
  isNotification?: boolean;
  children: React.ReactNode;
};

export const ServerLogoIcon = ({
  isNotification,
  children,
}: ServerLogoIconProps) => {
  return (
    <div className="group justify-center w-[72px] hover:cursor-pointer transition-all active:translate-y-[2px]">
      <div className="flex justify-center flex-row-reverse">
        {children}
        {isNotification && (
          <div className="relative max-w-full">
            <div className="relative top-[50%] left-[-12px]">
              <div className=" absolute w-1 h-2 rounded-full bottom-1/2  bg-slate-50 group-hover:h-5 transition-all"></div>
              <div className="w-1 h-2 rounded-full transition-all  bg-slate-50 group-hover:h-4"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
