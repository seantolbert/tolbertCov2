import React from "react";
import { useContext } from "react";
import { AppState } from "../../main";

export default function Experience() {
  const { chosen, highlight } = useContext(AppState);

  return (
    <div className="w-full flex justify-center my-10">
      <div className="w-4/5 flex justify-start dark:text-light text-dark text-xl">
        <div className="flex flex-col gap-10">
          <div id="DAI" className="flex flex-col gap-3">
            <p>
              <a
                style={{ color: chosen.value }}
                rel="noreferrer"
                target="_blank"
                href="https://www.dai.com/our-work/solutions/digital-acceleration"
                className="text-2xl font-extrabold"
              >
                DAI - Center for Digital Acceleration
              </a>
            </p>
            <p className="text-sm">May 2022 - Present</p>
            <p className="ml-5 font-bold">Associate</p>
            <p className="ml-10">
              Accepting Django projects and contributing to existing projects on
              a contract basis from DAI employees/clients.
            </p>
            <p className="ml-10">
              Vetting opportunities to either take on their contract myself or
              pass to senior developers, based on complexity.
            </p>
          </div>

          <div id="Zoom" className="flex flex-col gap-3">
            <p>
              <a
                style={{ color: chosen.value }}
                rel="noreferrer"
                target="_blank"
                href="https://zoom.us/"
                className="text-2xl font-extrabold"
              >
                Zoom Video Communications
              </a>
            </p>
            <p className="text-sm">September 2017 - March 2021</p>
            <p className="ml-5 font-bold">Online Accout Executive</p>
            <p className="ml-10">
              Served as as full-cycle Sales account holder with experience
              before and after public IPO and Unicorn status achievement
            </p>
            <p className="ml-10">
              Engaged with an average of 50 customers/clients daily and gained
              strong problem-solving skills and enhanced verbal and written
              communication skills to ensure a positive customer experience with
              Zoom
            </p>
            <p className="ml-10">
              Facilitated Saas sales, internal cultural events including Zoom
              Olympics, and multiple annual Sales Kickoffsom
            </p>
            <p className="ml-10">
              Conducted an average of 60 outbound calls daily to prospective
              customers on behalf of Enterprise Sales Representatives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
