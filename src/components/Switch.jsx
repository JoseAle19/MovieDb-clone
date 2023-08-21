/* eslint-disable react/prop-types */

export const Switch = ({setToday, setWeek, today, week}) => {
  return (
    <span className=" border border-black flex gap-2 rounded-full  relative   ">
    <span
      onClick={() => {
        setToday(true);
        setWeek(false);
      }}
      className={`px-2 cursor-pointer ${
        today
          ? "bg-blue-950  animate-switch_today text-white font-bold"
          : "bg-white text-gray-600 font-bold text"
      } rounded-full`}
    >
      <p className={`px-2  ${today && "gradient-text"} `}>Hoy</p>
    </span>

    <span
      onClick={() => {
        setToday(false);
        setWeek(true);
      }}
      className={` px-2 cursor-pointer ${
        week
          ? "bg-blue-950 animate-switch_week  text-white font-bold"
          : "bg-white  text-gray-600  font-bold "
      } rounded-full`}
    >
      <p className={`px-2   ${week && "gradient-text"} `}>
        Esta semana
      </p>
    </span>
  </span>  )
}
