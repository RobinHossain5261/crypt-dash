import React from "react";
import "material-symbols";
import { notifications } from "../../../../public/data/notificationsData";
import Image from "next/image";

const Notifications = () => {
  return (
    <div className="bg-Primary-bg p-3 lg:p-6 min-h-screen">
      <section className="grid grid-cols-12">
        <div className="bg-Primary-3 p-2 lg:px-7 lg:py-6 rounded-xl col-span-12 lg:col-span-11">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined  text-white">
              notifications
            </span>
            <h4 className="text-base text-white font-bold leading-[24px]">
              Notifications
            </h4>
          </div>
          <p className="text-lg text-Neutral-6 leading-[27px] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
          </p>
          <div>
            {notifications.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center justify-between border-Neutral-10 border-t"
              >
                <div className="flex flex-wrap items-center gap-3 my-5">
                  <Image
                    src={item.img}
                    alt="buyer"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div>
                      <span className="text-white text-sm font-bold">
                        {item.name}
                      </span>
                      <span className="text-Neutral-6 text-sm ml-1">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-Neutral-6 text-xs leading-[18px] ">
                      {item.des}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-Neutral-6 text-xs leading-[18px]">
                    {item.time}
                  </span>
                  <span className="material-symbols-outlined text-white cursor-pointer">
                    more_vert
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Notifications;
