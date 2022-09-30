import React from "react";
import ComponentCard from "./ComponentCard";

export default function Gallery() {
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-4/5 flex justify-center dark:text-light text-dark text-xl">
        <div className="grid grid-rows-2 grid-cols-4 gap-10">
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
          <ComponentCard />
        </div>
      </div>
    </div>
  );
}
