import React from "react";
import ComponentCard from "./ComponentCard";
// import { useContext } from "react";
import { useSignal } from "@preact/signals-react";
// import { useState } from "react";
import { useCollection } from "../../../hooks/useCollection";

export default function Gallery() {
  const { documents: pens } = useCollection("pens");


  console.log(pens)

  const activePen = useSignal("");
  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-4/5 flex justify-center flex-col dark:text-light text-dark text-xl">
        <iframe
          height="300"
          style={{ width: "100%" }}
          scrolling="no"
          title="Nav Menu 2D Square with Search"
          src="https://codepen.io/stolbert/embed/LYdbaXE?default-tab=&theme-id=dark"
          // frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowFullScreen={true}
        >
          See the Pen{" "}
          <a href="https://codepen.io/stolbert/pen/LYdbaXE">
            Nav Menu 2D Square with Search
          </a>{" "}
          by stolbert4150@gmail.com (
          <a href="https://codepen.io/stolbert">@stolbert</a>) on{" "}
          <a href="https://codepen.io">CodePen</a>.
        </iframe>
        <div className="flex flex-wrap gap-10 ">
          {pens &&
            pens.map((pen) => {
              return (
                <>
                  <p key={pen.id} className="text-rose-500">
                    success
                    {pen.url}
                  </p>
                  <ComponentCard url={pen.url} />
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
