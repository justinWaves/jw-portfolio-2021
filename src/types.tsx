export interface ThemeContext {
  mode: string;
  toggle(): void;
}

export interface IFormValues {
  from_name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PortfolioProps {
  title: string;
  body: string;
  codeUrl: string;
  linkUrl: string;
  imageSrc: string;
  tools: string[];
}

export interface ErrorTypes {
  from_name: string;
  email: string;
  subject: string;
  message: string;
}
