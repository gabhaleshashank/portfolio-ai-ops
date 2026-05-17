export type Experience = {
  organization: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

export const experiences: Experience[] = [
  {
    organization: "AICTE - EduSkills",
    role: "AWS Cloud Architect Intern",
    duration: "Jan 2025 - Mar 2025",
    location: "Remote",
    points: [
      "Deployed and secured a PHP-MySQL web application using AWS EC2, RDS, VPC, and Secrets Manager.",
      "Configured Load Balancer and Auto Scaling for reliable and scalable performance.",
      "Worked with IAM, Security Groups, ALB, and cloud deployment workflows.",
    ],
  },
  {
    organization: "AICTE - EduSkills",
    role: "RapidMiner Data Scientist Intern",
    duration: "Oct 2024 - Dec 2024",
    location: "Remote",
    points: [
      "Built data cleaning and transformation workflows.",
      "Applied feature engineering for better data quality.",
      "Used RapidMiner for automated data science workflows and practical analytics exposure.",
    ],
  },
];
