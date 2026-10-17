import { fireEvent, render, screen } from "@testing-library/react";
import PortfolioItem from "./PortfolioItem";

const project = {
  title: "Example project",
  body: "Project overview",
  codeUrl: "https://example.com/code",
  linkUrl: "https://example.com/demo",
  imageSrc: "placeholder.svg",
  tools: ["Vercel"],
};

test("overview-only projects show their summary without offering access or links", () => {
  const { container } = render(<PortfolioItem {...project} overviewOnly />);
  expect(screen.getByText("Example project")).toBeTruthy();
  expect(container.querySelector(".portfolioItem__body").textContent).toBe(project.body);
  expect(container.querySelector("a")).toBeNull();
  expect(container.querySelector("button")).toBeNull();
});

test("existing projects retain their demo and code actions by default", () => {
  render(<PortfolioItem {...project} />);
  fireEvent.click(screen.getAllByText("View Site")[0]);
  expect(screen.getByText("View Code").closest("a").getAttribute("href")).toBe(project.codeUrl);
  expect(screen.getAllByText("View Site").some(node => node.closest("a")?.getAttribute("href") === project.linkUrl)).toBe(true);
});
