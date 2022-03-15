import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "./AirTraffic.css";
import plane_1 from "../images/planes/planeAsset 1.svg";
import plane_2 from "../images/planes/planeAsset 2.svg";
import plane_3 from "../images/planes/planeAsset 3.svg";
import plane_4 from "../images/planes/planeAsset 4.svg";
import plane_5 from "../images/planes/planeAsset 5.svg";
import plane_6 from "../images/planes/planeAsset 6.svg";

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const planeListDay = [plane_1, plane_2, plane_3, plane_4, plane_5, plane_6];

function AirTraffic() {
  const [airTraffic, setAirTraffic] = useState<Array<object>>([]);
  const [airTrafficIndex, setAirTrafficIndex] = useState(0);
  const timeout = useRef<any>();

  const togglePlaneImageLeftOrRight: () => boolean = () => {
    if (airTrafficIndex % 2 == 0) return true;
    else return false;
  };

  useEffect(() => {
    const getRandomNumberToString = (min: number, max: number) => {
      const result = Math.random() * (max - min) + min;
      return result.toString();
    };

    const getRandomNumberToString2 = (min: number, max: number) => {
      const result = Math.random() * (max - min) + min;
      return result.toString();
    };

    setAirTrafficIndex(airTrafficIndex + 1);

    const Plane = styled.div`
      animation-duration: ${getRandomNumberToString(25, 40)}s;
      position: relative;
      top: ${getRandomNumberToString2(50, 200)}px;
    `;

    const handleRemovePlane = (
      e: React.AnimationEvent<HTMLDivElement>
    ): void => {
      setAirTraffic((airTraffic) =>
        airTraffic.filter((item: object, i: number) => i !== 0)
      );
    };

    timeout.current = setInterval(() => {
      if (airTraffic.length < 5)
        setAirTraffic([
          ...airTraffic,
          <Plane
            key={airTrafficIndex}
            className={
              togglePlaneImageLeftOrRight() ? "plane__left" : "plane__right"
            }
            onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) =>
              handleRemovePlane(e)
            }
          >
            <img
              src={
                planeListDay[Math.floor(Math.random() * planeListDay.length)]
              }
              alt=""
              className={
                togglePlaneImageLeftOrRight() ? "traffic__reverse" : undefined
              }
            />
          </Plane>,
        ]);
      else clearTimeout(timeout.current);
    }, getRandomNumber(500, 7000));

    console.log("Plane Index: " + airTrafficIndex);
    console.log(airTraffic);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [airTraffic]);

  return <div className="air__traffic--container">{airTraffic}</div>;
}

export default AirTraffic;
