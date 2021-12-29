import { useEffect, useState, useRef } from "react";
import "./Traffic.css";
import styled from "styled-components";
import car_1 from "../images/cars/cybertruck.svg";
import car_2 from "../images/cars/pink-lambo.svg";
import car_3 from "../images/cars/old-mustang.svg";
import car_4 from "../images/cars/tesla-red.svg";
import car_5 from "../images/cars/bently.svg";
import car_6 from "../images/cars/van-ambulance.svg";

const getRandomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const carListDay = [car_1, car_2, car_3, car_4, car_5, car_6];

function Traffic() {
  const [carsOnTheLeft, setCarsOnTheLeft] = useState<any>([]);
  const timeout = useRef<any>();

  useEffect(() => {
    const getRandomNumberToString = (min: number, max: number) => {
      const result = Math.random() * (max - min) + min;
      return result.toString();
    };
    const CarLeft = styled.div`
      animation-duration: ${getRandomNumberToString(3, 10)}s;
    `;

    timeout.current = setInterval(() => {
      getRandomNumberToString(2, 9);
      if (carsOnTheLeft.length < 15)
        setCarsOnTheLeft([
          ...carsOnTheLeft,
          <CarLeft
            key={carsOnTheLeft.length}
            className="car__left"
            onAnimationEnd={(e) => handleRemoveItem(e)}
          >
            <img
              src={carListDay[Math.floor(Math.random() * carListDay.length)]}
              alt=""
            />
          </CarLeft>,
        ]);
      else clearTimeout(timeout.current);
    }, getRandomNumber(500, 5000));
    console.log(carsOnTheLeft);

    const handleRemoveItem = (e: any) => {
      setCarsOnTheLeft((carsOnTheLeft: any) =>
        carsOnTheLeft.filter((key: any, i: any) => i !== 0)
      );
    };

    return () => {
      clearTimeout(timeout.current);
    };
  });

  return <div className="traffic__container">{carsOnTheLeft}</div>;
}

export default Traffic;
