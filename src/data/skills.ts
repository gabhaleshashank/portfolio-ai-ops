export type SkillGroup = {
  group: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    group: "Programming",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    group: "Frontend",
    skills: ["React.js", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    group: "Backend",
    skills: ["Node.js", "Express.js", "Flask", "PHP"],
  },
  {
    group: "Databases",
    skills: ["MySQL", "MongoDB", "SQLite"],
  },
  {
    group: "AI / ML",
    skills: [
      "YOLOv8",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    group: "Cloud / DevOps",
    skills: [
      "AWS EC2",
      "RDS",
      "VPC",
      "IAM",
      "Security Groups",
      "ALB",
      "Auto Scaling",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
  {
    group: "Tools",
    skills: [
      "Jupyter Notebook",
      "Power BI",
      "RapidMiner Studio",
      "Anaconda",
      "Spyder",
      "VS Code",
      "Cursor",
    ],
  },
];
