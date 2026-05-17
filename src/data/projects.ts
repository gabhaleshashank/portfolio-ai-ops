export type ProjectFilter = "All" | "AI" | "Full Stack" | "Frontend" | "Cloud";

export type Project = {
  title: string;
  type: string;
  status?: string;
  highlight: string;
  tags: string[];
  filters: Exclude<ProjectFilter, "All">[];
  github?: string;
  repoPlaceholder?: boolean;
};

export const projectFilters: ProjectFilter[] = [
  "All",
  "AI",
  "Full Stack",
  "Frontend",
  "Cloud",
];

export const featuredSystem = {
  code: "SYSTEM_01",
  title: "Seed Quality Detection using Enhanced YOLOv8",
  status: "ACTIVE / ONGOING",
  model: "YOLOv8 + OpenCV",
  hardware: "Raspberry Pi 4 Model B",
  pipeline: "SENSOR -> CAMERA -> AI MODEL -> RESULT -> EMAIL ALERT",
  visual: "/assets/seed-ai-system.png",
  description:
    "An AI-powered seed quality detection system designed to automate manual seed inspection using computer vision, YOLOv8, Raspberry Pi, camera module, and environmental sensors.",
  problem:
    "Manual seed inspection is slow, inconsistent, and dependent on human observation.",
  solution:
    "A sensor-triggered AI inspection pipeline where abnormal gas/moisture readings can trigger image capture, YOLOv8 detects good/bad seeds, and the system displays results and sends alerts.",
  hardwareStack: [
    "Raspberry Pi 4 Model B",
    "Camera Module",
    "MQ-135 Gas Sensor",
    "MQ-2 Gas Sensor",
    "Moisture Sensor",
    "DHT11 Temperature/Humidity Sensor",
    "Buzzer",
  ],
  softwareStack: [
    "Python",
    "YOLOv8",
    "OpenCV",
    "TensorFlow/PyTorch",
    "SQLite for login/user data",
    "ThingSpeak for sensor data",
    "Email alert system",
  ],
  metrics: [
    {
      label: "Current effectiveness",
      value: "~80%",
      note: "Editable benchmark placeholder",
    },
    {
      label: "Classes",
      value: "Good Seed / Bad Seed",
      note: "Detection labels",
    },
    {
      label: "Dataset",
      value: "Add editable placeholder",
      note: "Replace with final dataset summary",
    },
    {
      label: "Model",
      value: "YOLOv8 enhanced version",
      note: "Training target",
    },
    {
      label: "Deployment",
      value: "Local Python UI / Raspberry Pi pipeline",
      note: "Edge workflow",
    },
  ],
};

export const architectureFlow = [
  {
    step: "01",
    title: "Environmental Sensors",
    description: "MQ-135, MQ-2, moisture, and DHT11 watch the seed environment.",
  },
  {
    step: "02",
    title: "Trigger Condition",
    description: "Abnormal readings can trigger the inspection workflow.",
  },
  {
    step: "03",
    title: "Camera Capture",
    description: "The Raspberry Pi camera captures the current seed sample.",
  },
  {
    step: "04",
    title: "YOLOv8 Detection",
    description: "The model classifies visible seeds as good or bad.",
  },
  {
    step: "05",
    title: "Result Display",
    description: "The local UI displays detection output and system state.",
  },
  {
    step: "06",
    title: "Email Alert / ThingSpeak Monitoring",
    description: "Alerts and telemetry help track the system remotely.",
  },
];

export const projects: Project[] = [
  {
    title: "Seed Quality Detection using Enhanced YOLOv8",
    tags: ["Python", "YOLOv8", "OpenCV", "Raspberry Pi", "Sensors", "AI"],
    type: "Computer Vision + IoT",
    status: "Ongoing",
    filters: ["AI", "Cloud"],
    repoPlaceholder: true,
    highlight: "Real-world AI system for seed quality inspection.",
  },
  {
    title: "Tenant Manager",
    tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    type: "Full Stack Web App",
    status: "In Progress",
    filters: ["Full Stack"],
    github: "https://github.com/gabhaleshashank/tenant-manager",
    highlight:
      "Small landlord/tenant management system for rent tracking, tenant records, agreements, and bills.",
  },
  {
    title: "Image Search using Unsplash API",
    tags: ["HTML", "CSS", "JavaScript", "Unsplash API"],
    type: "Frontend + API Integration",
    filters: ["Frontend"],
    github: "https://github.com/gabhaleshashank/image-search-using-unsplash-api",
    highlight:
      "Responsive image search app using asynchronous API requests and dynamic rendering.",
  },
  {
    title: "Expense Manager",
    tags: ["Node.js", "Express.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    type: "Full Stack CRUD App",
    status: "Completed / Editable",
    filters: ["Full Stack"],
    repoPlaceholder: true,
    highlight:
      "Expense tracking application with CRUD operations and database persistence.",
  },
];
