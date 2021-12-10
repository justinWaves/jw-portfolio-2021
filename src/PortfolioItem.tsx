import "./PortfolioItem.css";
import { useRef, useState } from "react";
import { useSpring, animated, config } from "@react-spring/web";
import styled from "styled-components";
import * as themeConf from "./Theme";
import { useTheme } from "./ThemeManager";
import GithubLinks from "./GithubLinks";

interface PortfolioProps {
  title: string;
  body: string;
  codeUrl: string;
  linkUrl: string;
  imageSrc: string;
  tools: string[];
}

const calc = (x: number, y: number, rect: any) => [
  -(y - rect.top - rect.height / 2) / 10,
  (x - rect.left - rect.width / 2) / 50,
  1.08,
];
const trans = (x: number, y: number, s: number) =>
  `perspective(800px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function PortfolioItem({
  title,
  body,
  codeUrl,
  linkUrl,
  imageSrc,
  tools,
}: PortfolioProps) {
  const theme = useTheme();

  const listItems = tools.map((tool: string) => <li>{tool}</li>);

  const hideAnimationOnMobile = () => {
    if (window.innerWidth < 961) {
      return false;
    } else {
      return true;
    }
  };

  const PortfolioItem = styled(animated.div)`
    background-color: ${themeConf.backgroundColor};
    color: ${themeConf.textColor};
    will-change: transform;
  `;

  const ListItemTitle = styled.h4`
    color: ${themeConf.secondaryTextColor};
    margin-bottom: 5px;
    margin-left: 10px;
  `;

  const configList = Object.keys(config);
  const ref: any = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const props = useSpring({
    xys,
    config: config.molasses,
  });

  return (
    <div className="portfolioItem__main" ref={ref}>
      <PortfolioItem
        className="portfolioItem__container"
        style={{ transform: props.xys.to(trans) }}
        onMouseLeave={() => set([0, 0, 1])}
        onMouseMove={
          hideAnimationOnMobile()
            ? (e) => {
                const rect: any = ref.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
              }
            : undefined
        }
      >
        <div className="portfolio__content--left">
          <h1 className="portfolioItem__title">{title}</h1>
          <img className="porfolioItem__image" src={imageSrc} alt="" />
        </div>

        <div className="portfolioItem__content--center">
          <p className="portfolioItem__body">{body}</p>
        </div>

        <div className="portfolio__content--right">
          <div className="portfolio__listItems">
            <ListItemTitle>Tech Used</ListItemTitle>
            <ul>{listItems}</ul>
          </div>

          <GithubLinks codeUrl={codeUrl} linkUrl={linkUrl} />
        </div>
      </PortfolioItem>
    </div>
  );
}

export default PortfolioItem;
