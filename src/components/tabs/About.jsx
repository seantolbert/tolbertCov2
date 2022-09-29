import { useContext } from "react";
import { AppState } from "../../main";
import PersonalPhoto from "../../assets/lady_and_me.jpg";

export default function About() {
  const { chosen, highlight } = useContext(AppState);

  return (
    <div className="w-full flex justify-center my-10 ">
      <div className="w-4/5 flex justify-start dark:text-light text-dark text-xl">
        <div className="flex gap-20 items-center flex-col md:flex-row">
          <div className="overflow-hidden inline-block rounded-lg">
            <img className="w-full h-full scale-150" src={PersonalPhoto} alt="Lady+Me" />
          </div>
          <div className="flex flex-col gap-10">
            <p>
              My background in software sales is what drew me to becoming a
              software engineer.
            </p>
            <p>
              I love the process of building apps and writing lean code,
              experimenting with different frameworks and researching how teams
              operate as I earn my place in the industry.
            </p>
            <p>
              August, 2021, I graduated from the{" "}
              <a
                href="https://generalassemb.ly/"
                style={{ color: highlight.value }}
                target="_blank"
                rel="noreferrer"
              >
                General Assembly
              </a>{" "}
              <a
                style={{ color: chosen.value }}
                target="_blank"
                rel="noreferrer"
                href="https://generalassemb.ly/education/software-engineering-immersive/washington-dc?ga_campaign=immersive-remote&ga_variation=sei-tile"
              >
                Software Engineering Immersive Program.
              </a>
            </p>
            <p>I have been building websites on a contract basis ever since.</p>
            <p>Thank you for looking into my experience!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
