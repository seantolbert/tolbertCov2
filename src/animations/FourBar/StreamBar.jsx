export default function StreamBar({ color }) {
  return (
    <div className="flex flex-col">
      <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 290">
        <path
          fill={color}
          // fillOpacity="0.74"
          fillOpacity="1"
          stroke={color}
          str
          d="M0,288L120,288C240,288,480,288,720,261.3C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
      {/* <div className="h-10 w-full" style={{background: color}}></div> */}
      <svg className="rotate-180 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 270">
        <path
          fill={color}
          fill-opacity='1'
          d="M0,288L120,288C240,288,480,288,720,261.3C960,235,1200,181,1320,154.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}
