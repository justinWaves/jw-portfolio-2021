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
    // let RandomSpeed = getRandomNumberToString(2, 9);

    const CarLeft = styled.div`
      animation-duration: ${getRandomNumberToString(3, 10)}s;
    `;

    timeout.current = setTimeout(() => {
      getRandomNumberToString(2, 9);
      if (carsOnTheLeft.length < 15)
        setCarsOnTheLeft([
          ...carsOnTheLeft,
          <CarLeft key={carsOnTheLeft.length} className="car__left">
            <img
              src={carListDay[Math.floor(Math.random() * carListDay.length)]}
              alt=""
            />
          </CarLeft>,
        ]);
      else clearTimeout(timeout.current);
    }, getRandomNumber(500, 5000));
    console.log(carsOnTheLeft);

    // setTimeout(() => {
    //   const name = "0";
    //   setCarsOnTheLeft(
    //     carsOnTheLeft.filter((item: any) => item.name !== name)
    //   );
    // }, 10000);

    return () => {
      clearTimeout(timeout.current);
    };
  }, [carsOnTheLeft]);

  return <div className="traffic__container">{carsOnTheLeft}</div>;
}

export default Traffic;
