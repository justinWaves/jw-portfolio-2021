import { useEffect, useState, useRef } from "react";
import "./Traffic.css";
import styled from "styled-components";
import car_1 from "../images/cars/cybertruck.svg";
import car_2 from "../images/cars/pink-lambo.svg";
import car_3 from "../images/cars/old-mustang.svg";
import car_4 from "../images/cars/tesla-red.svg";
import car_5 from "../images/cars/bently.svg";
import car_6 from "../images/cars/van-ambulance.svg";
import bike_1 from "../images/bikes/bike-1.svg";
import bike_2 from "../images/bikes/bike-2.svg";
import bike_3 from "../images/bikes/bike-3.svg";
import bike_4 from "../images/bikes/bike-4.svg";
import bike_5 from "../images/bikes/bike-5.svg";
import bike_6 from "../images/bikes/bike-6.svg";
import bike_7 from "../images/bikes/bike-7.svg";
import bike_8 from "../images/bikes/bike-8.svg";

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const carListDay = [car_1, car_2, car_3, car_4, car_5, car_6];
const bikeListDay = [
  bike_1,
  bike_2,
  bike_3,
  bike_4,
  bike_5,
  bike_6,
  bike_7,
  bike_8,
];

function Traffic() {
  const [traffic, setTraffic] = useState<Array<object>>([]);

  const timeout = useRef<NodeJS.Timeout | null>(null);

  const [carTrafficIndex, setCarTrafficIndex] = useState(0);
  const [bikeTrafficIndex, setBikeTrafficIndex] = useState(0.1);

  const toggleCarsAndBikesImageLeftOrRight = () => {
    return carTrafficIndex % 2 === 0;
  };

  useEffect(() => {
    const getRandomNumberToString = (min: number, max: number) => {
      const result = Math.random() * (max - min) + min;
      return result.toString();
    };

    setCarTrafficIndex(carTrafficIndex + 1);
    setBikeTrafficIndex(bikeTrafficIndex + 0.1);

    const Cars = styled.div`
      animation-duration: ${getRandomNumberToString(3, 10)}s;
      z-index: ${toggleCarsAndBikesImageLeftOrRight() ? "3" : "2"};
    `;

    const Bikes = styled.div`
      animation-duration: ${getRandomNumberToString(15, 25)}s;
      z-index: ${toggleCarsAndBikesImageLeftOrRight() ? "4" : "1"};
    `;

    const handleRemoveTrafficItem = (
      e: React.AnimationEvent<HTMLDivElement>
    ) => {
      setTimeout(() => {
        setTraffic((traffic) =>
          traffic.filter((item: object, i: number) => i !== 0)
        );
      }, 15000);
    };

    timeout.current = setInterval(() => {
      if (traffic.length < 35)
        setTraffic([
          ...traffic,

          <Cars
            key={carTrafficIndex}
            className={
              toggleCarsAndBikesImageLeftOrRight() ? "car__left" : "car__right"
            }
            onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) =>
              handleRemoveTrafficItem(e)
            }
          >
            <img
              src={carListDay[Math.floor(Math.random() * carListDay.length)]}
              alt=""
              className={
                toggleCarsAndBikesImageLeftOrRight()
                  ? undefined
                  : "traffic__reverse"
              }
            />
          </Cars>,

          <Bikes
            key={bikeTrafficIndex}
            className={
              toggleCarsAndBikesImageLeftOrRight()
                ? "bike__left"
                : "bike__right"
            }
            onAnimationEnd={(e) => handleRemoveTrafficItem(e)}
          >
            <img
              src={bikeListDay[Math.floor(Math.random() * bikeListDay.length)]}
              alt=""
              className={
                toggleCarsAndBikesImageLeftOrRight()
                  ? undefined
                  : "traffic__reverse"
              }
            />
          </Bikes>,
        ]);
      else clearTimeout(timeout.current as NodeJS.Timeout);
    }, getRandomNumber(50, 2000));

    console.log(traffic);
    console.log("Car Index: " + carTrafficIndex);
    console.log("Bike Index: " + bikeTrafficIndex.toPrecision(4));

    return () => {
      clearTimeout(timeout.current as NodeJS.Timeout);
    };
  }, [traffic]);

  return (
    <div className="traffic">
      <div className="traffic__container">{traffic}</div>
    </div>
  );
}

export default Traffic;
