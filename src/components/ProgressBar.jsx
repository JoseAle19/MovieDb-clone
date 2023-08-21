/* eslint-disable react/prop-types */
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css'
export const ProgressBar = ({ percent }) => {
    const percentage = percent * 10;
    return (
      <div className="w-10 h-10">
 
            <CircularProgressbar
              value={percentage}
              text={`${Math.round(percentage)}%`}
              background={true}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
  
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",
  
                // Text size
                textSize: "26px",
  
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,
  
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: "none",
  
                // Colors
                trailColor: `${
                  percentage > 50 && percentage < 70
                    ? "rgb(150, 50,0)"
                    : percentage <= 50
                    ? "rgb(50,0,0)"
                    : percentage >= 70 && "rgb(0,50,0)"
                } `,
                textColor: "#fff",
                pathColor: `${
                  percentage > 50 && percentage < 70
                    ? "rgb(255, 150,0)"
                    : percentage <= 50
                    ? "rgb(255,0,0)"
                    : percentage >= 70 && "rgb(0,255,0)"
                } `,
                backgroundColor: "rgb(2, 7, 48)",
              })}
            />
      </div>
    );
  };
  