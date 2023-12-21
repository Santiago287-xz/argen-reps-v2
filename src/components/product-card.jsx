import React from "react";

export default function ProductCard({ data }) {
  return (
    <div
      key={data.id}
      className="m-4 p-4 w-full sm:w-auto rounded-xl bg-white dark:bg-[#1a2430]"
    >
      <div className="font-medium inline m-auto text-center text-white">
        <p className="uppercase text-m tracking-[0.16em]">{data.name}</p>
        <h3 className="text-2xl font-normal">{data.description}</h3>
      </div>
      <a
        className="relative mt-8 bg-foreground/10 rounded-2xl sm:w-[19rem] h-64 sm:h-72 w-full justify-center block"
        href={data.link}
      >
        <b
          className="bg-[#15191d] text-white border-[#1a2430] border-[5px]
          py-1 px-4 rounded-3xl flex items-center translate-x-[-50%] translate-y-[-50%] absolute top-[-.5rem] left-[50%] z-30"
        >
          <span>¥{data.price}</span>
        </b>
        <img
          alt={data.name}
          src={data.image_url}
          className="z-0 h-full w-full object-cover rounded-xl bg-slate-50"
        />
      </a>
    </div>
  );
}
