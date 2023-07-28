export enum SelectedPage {
  Home = "home",
  Education = "education",
  Projects = "projects",
  ContactUs = "contactus",
}

export interface EducationType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ProjectType {
  name: string;
  description?: string;
  image: string;
  link?: string;
}
