export interface User {
  userID: string;
  userImage: string;
  userName: string;
  userEmail: string;
  userPassword: string;
  userType: string[];
  investedProjects: { projectID: string; investedAmount: number }[];
  startedProjects: string[];
}

export interface Project {
  projectID: string;
  companyLogo: string;
  companyName: string;
  companyEmail: string;
  sectorName: string;
  projectName: string;
  projectType: string;
  projectStatus: string;
  projectRequiredFund: number;
  projectRaisedFund: number;
}
