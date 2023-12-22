import React from "react";
import Image from "next/image";

interface Widget7Props {
  eventTitle: string;
  eventTime: string;
  avatars: string[];
  location: string;
}

const Widget7: React.FC<Widget7Props> = ({
  eventTitle,
  eventTime,
  avatars,
  location,
}: Widget7Props) => {
  return (
    <div className="py-[25px] px-[25px] bg-white rounded-xl border-2 border-zinc-100 w-full">
      <h5 className="text-[14px] text-[#FF5959] font-semibold mb-[12px]">
        EVENT
      </h5>
      <h4 className="text-[18px] text-gray-950 font-semibold">{eventTitle}</h4>
      <p className="text-[14px] text-[#9CA3AF] font-normal mt-[25px]">
        {eventTime}
      </p>

      <div className="flex mt-[50px] items-center justify-between">
        <div className="flex -space-x-2">
          {avatars.map((avatar, index) => (
            <Image
              key={index}
              className="inline-block rounded-full ring-2 ring-white dark:ring-gray-800"
              src={avatar}
              width={37}
              height={37}
              alt={`Avatar ${index + 1}`}
            />
          ))}
        </div>
        <div className="py-[34] px-[10px] bg-[#EEF2FF] h-fit rounded-full w-[125px] items-center justify-center border-[1px] border-[#676FA3]">
          <p className="text-[#676FA3] text-center">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Widget7;
