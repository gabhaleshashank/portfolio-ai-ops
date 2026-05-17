export type ProjectFilter = "All" | "AI" | "Full Stack" | "Frontend" | "Cloud";
export type PipelineMode = "software" | "hardware";

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
  code: "System 01",
  title: "Seed Quality Detection using Enhanced YOLOv8",
  status: "Active / Ongoing",
  model: "YOLOv8 + OpenCV",
  hardware: "Raspberry Pi 4 Model B",
  pipeline: "SENSOR -> CAMERA -> RESULT -> EMAIL ALERT",
  visual: "/assets/seed_quality.png",
  description:
    "An seed quality detection system designed to automate manual seed inspection using computer vision, YOLOv8, Raspberry Pi, camera module, and environmental sensors.",
  problem:
    "Manual seed inspection is slow, inconsistent, and dependent on human observation which is prone towards errors and inaccuracies.",
  solution:
    "A sensor-triggered AI inspection pipeline where abnormal gas or moisture readings can trigger image capture, and the system sends alerts.",
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
      note: "Benchmark accuracy on test set",
    },
    {
      label: "Classification labels",
      value: "Good / Bad / Impure",
      note: "Detection labels",
    },
    {
      label: "Datasets",
      value: "2k+ annotated seed images",
      note: "Maize & Wheat seeds with various conditions",
    },
    {
      label: "Object-detection Model",
      value: "YOLOv8 enhanced version",
      note: "Training target",
    },
    {
      label: "Deployment",
      value: "Python UI / Raspberry Pi",
      note: "Edge workflow",
    },
  ],
};

export const architectureFlow = [
  { step: "01", title: "Sensor Readings", description: "Python reads gas, moisture, temperature, and humidity values from the connected modules." },
  { step: "02", title: "Trigger Logic", description: "Threshold checks decide whether the inspection workflow should capture a new seed image." },
  { step: "03", title: "Image Capture", description: "The camera frame is saved and prepared for computer vision inference." },
  { step: "04", title: "YOLOv8 Detection", description: "The model detects seed condition and classifies samples as good, bad, or impure." },
  { step: "05", title: "Result UI", description: "The local Python interface displays output, confidence, and current system state." },
  { step: "06", title: "Alerts / Storage", description: "Email alerts, SQLite user data, and ThingSpeak sensor logs complete the software loop." },
];

export const pipelineFlows: Record<
  PipelineMode,
  {
    label: string;
    command: string;
    line: string;
    summary: string;
    steps: typeof architectureFlow;
  }
> = {
  software: {
    label: "Software Pipeline",
    command: "run --software-pipeline",
    line: "REGISTRATION / LOGIN -> SELECT SEED TYPE -> UPLOAD INPUT IMAGE -> IMAGE PREPROCESSING -> YOLOv8 DETECTION -> RESULT UI",
    summary: "Python, trigger logic, YOLOv8 inference, local UI, alerts, and telemetry storage.",
    steps: architectureFlow,
  },
  hardware: {
    label: "Hardware Pipeline",
    command: "trace --hardware-pipeline",
    line: "ENVIRONMENTAL SENSORS READING -> TRIGGER LOGIC -> IMAGE CAPTURE -> ALERTS / SENSOR READING STORAGE",
    summary: "Sensor modules, Raspberry Pi, camera capture, buzzer, and monitoring output.",
    steps: [
      { step: "01", title: "Environmental Sensors", description: "MQ-135, MQ-2, moisture, and DHT11 capture the seed environment." },
      { step: "02", title: "Threshold Signal", description: "Abnormal gas or moisture readings create the physical trigger condition." },
      { step: "03", title: "Camera Module", description: "The Raspberry Pi camera captures the current seed sample for inspection." },
      { step: "04", title: "Raspberry Pi Control", description: "The Pi coordinates sensor input, camera capture, buzzer behavior, and local execution." },
      { step: "05", title: "Buzzer / Local Output", description: "A physical alert can indicate abnormal readings or inspection attention." },
      { step: "06", title: "Monitoring Output", description: "ThingSpeak and email alerts expose readings and system state beyond the device." },
    ],
  },
};

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
