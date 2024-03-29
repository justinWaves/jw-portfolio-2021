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

// let carTrafficIndex = 0;
// let bikeTrafficIndex = 0.1;

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const getRandomNumberToString = (min: number, max: number) => {
  const result = Math.random() * (max - min) + min;
  return result.toString();
};

const isTrafficItemEven = (index: number) => {
  return index % 2 === 0;
};

// const Cars = styled.div`
//   animation-duration: ${getRandomNumberToString(3, 10)}s;
//   z-index: ${isTrafficItemEven(carTrafficIndex) ? "3" : "2"};
// `;

// const Bikes = styled.div`
//   animation-duration: ${getRandomNumberToString(15, 25)}s;
//   z-index: ${isTrafficItemEven(carTrafficIndex) ? "4" : "1"};
// `;

function Traffic() {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  const [traffic, setTraffic] = useState<Array<object>>([]);
  const [carTrafficIndex, setCarTrafficIndex] = useState<number>(0);
  const [bikeTrafficIndex, setbikeTrafficIndex] = useState<number>(0.1);

  const Cars = styled.div`
    animation-duration: ${getRandomNumberToString(3, 10)}s;
    z-index: ${isTrafficItemEven(carTrafficIndex) ? "3" : "2"};
  `;

  const Bikes = styled.div`
    animation-duration: ${getRandomNumberToString(15, 25)}s;
    z-index: ${isTrafficItemEven(carTrafficIndex) ? "4" : "1"};
  `;

  useEffect(() => {
    setCarTrafficIndex(carTrafficIndex + 1);
    setbikeTrafficIndex(bikeTrafficIndex + 0.1);

    // carTrafficIndex++;
    // bikeTrafficIndex = bikeTrafficIndex + 0.1;

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
              isTrafficItemEven(carTrafficIndex) ? "car__left" : "car__right"
            }
            onAnimationEnd={(e: React.AnimationEvent<HTMLDivElement>) =>
              handleRemoveTrafficItem(e)
            }
          >
            <img
              src={carListDay[Math.floor(Math.random() * carListDay.length)]}
              alt=""
              className={
                isTrafficItemEven(carTrafficIndex)
                  ? undefined
                  : "traffic__reverse"
              }
            />
          </Cars>,

          <Bikes
            key={bikeTrafficIndex}
            className={
              isTrafficItemEven(carTrafficIndex) ? "bike__left" : "bike__right"
            }
            onAnimationEnd={(e) => handleRemoveTrafficItem(e)}
          >
            <img
              src={bikeListDay[Math.floor(Math.random() * bikeListDay.length)]}
              alt=""
              className={
                isTrafficItemEven(carTrafficIndex)
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
