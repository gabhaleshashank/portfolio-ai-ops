Build a highly polished personal portfolio website for me.

PROJECT GOAL
Create a portfolio that does NOT look like a generic developer portfolio. It should feel like an “AI Operations Dashboard / Engineering Lab” that presents me as an AI-assisted full-stack builder who ships practical systems, computer vision projects, automation workflows, and real-world experiments.

PERSONAL BRANDING
Name: Shashank Gabhale
Location: Pune, Maharashtra, India
Email: gabhaleshashank@gmail.com
GitHub: https://github.com/gabhaleshashank
LinkedIn: Add placeholder link for now
Role positioning:
“AI-Assisted Full Stack Developer building practical AI-powered systems, interfaces, and automation workflows.”

Tone:
Technical, clean, builder-focused, experimental, practical, slightly futuristic, not corporate, not childish.

DESIGN STYLE
Use:
- Dark theme by default
- Graphite / black / deep gray background
- Soft orange or amber accent color
- Subtle grid background
- Glassmorphism cards
- Thin borders
- Rounded corners
- Smooth minimal animations
- Dashboard / control-panel feeling
- Terminal-inspired details
- Clean typography
- Mobile responsive layout

Avoid:
- Generic “Hi, I am a passionate developer” layout
- Skill bars
- Excessive neon
- Too many particles
- Unnecessary 3D
- Overused template look

TECH STACK
Use:
- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui if possible
- lucide-react icons
- Deploy-ready for Vercel

IMPORTANT EDITABILITY REQUIREMENT
Make the site easy for me to edit later.
Create a clear data-driven structure:
- src/data/profile.ts
- src/data/projects.ts
- src/data/skills.ts
- src/data/experience.ts
- src/data/buildLogs.ts
- src/data/socials.ts

Do not hardcode all content inside components.
Components should read from these data files.

WEBSITE SECTIONS

1. HERO SECTION
Create a strong dashboard-style hero.

Main heading:
“Shashank Gabhale”

Subtitle:
“AI-Assisted Full Stack Developer building practical AI systems, interfaces, and automation workflows.”

Small terminal/status block:
Currently exploring:
→ Computer Vision
→ AI-assisted development
→ Automation Systems
→ Raspberry Pi + Sensors
→ AI Interfaces
→ Local LLMs

Buttons:
- View Systems
- GitHub
- LinkedIn
- Resume

Add a small status pill:
“Available for AI-assisted development, full-stack, cloud, and automation roles”

2. FEATURED SYSTEM SECTION
This is the most important section.

Title:
“Featured System”

Main project:
Seed Quality Detection using Enhanced YOLOv8

Present it like a system module, not a normal project card.

Use labels:
SYSTEM_01
STATUS: ACTIVE / ONGOING
MODEL: YOLOv8 + OpenCV
HARDWARE: Raspberry Pi 4 Model B
PIPELINE: SENSOR → CAMERA → AI MODEL → RESULT → EMAIL ALERT

Description:
An AI-powered seed quality detection system designed to automate manual seed inspection using computer vision, YOLOv8, Raspberry Pi, camera module, and environmental sensors.

Include problem:
Manual seed inspection is slow, inconsistent, and dependent on human observation.

Include solution:
A sensor-triggered AI inspection pipeline where abnormal gas/moisture readings can trigger image capture, YOLOv8 detects good/bad seeds, and the system displays results and sends alerts.

Mention hardware:
- Raspberry Pi 4 Model B
- Camera Module
- MQ-135 Gas Sensor
- MQ-2 Gas Sensor
- Moisture Sensor
- DHT11 Temperature/Humidity Sensor
- Buzzer

Mention software:
- Python
- YOLOv8
- OpenCV
- TensorFlow/PyTorch
- SQLite for login/user data
- ThingSpeak for sensor data
- Email alert system

Add metric placeholders:
- Current effectiveness: ~80%
- Classes: Good Seed / Bad Seed
- Dataset: Add editable placeholder
- Model: YOLOv8 enhanced version
- Deployment: Local Python UI / Raspberry Pi pipeline

Add buttons:
- View Case Study
- GitHub Repo placeholder
- Architecture

3. SYSTEM FLOW / ARCHITECTURE SECTION
Create a visual flow using cards/arrows:

Environmental Sensors
→ Trigger Condition
→ Camera Capture
→ YOLOv8 Detection
→ Result Display
→ Email Alert / ThingSpeak Monitoring

Make it responsive.
It can be CSS-based, no need for complex diagram library.

4. PROJECTS SECTION
Create 4 project cards with system-style design.

Project 1:
Seed Quality Detection using Enhanced YOLOv8
Tags: Python, YOLOv8, OpenCV, Raspberry Pi, Sensors, AI
Type: Computer Vision + IoT
Status: Ongoing
Highlight: Real-world AI system for seed quality inspection.

Project 2:
Tenant Manager
Tags: PHP, MySQL, HTML, CSS, JavaScript
Type: Full Stack Web App
Status: In Progress
GitHub: https://github.com/gabhaleshashank/tenant-manager
Highlight: Small landlord/tenant management system for rent tracking, tenant records, agreements, and bills.

Project 3:
Image Search using Unsplash API
Tags: HTML, CSS, JavaScript, Unsplash API
Type: Frontend + API Integration
GitHub: https://github.com/gabhaleshashank/image-search-using-unsplash-api
Highlight: Responsive image search app using asynchronous API requests and dynamic rendering.

Project 4:
Expense Manager
Tags: Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS
Type: Full Stack CRUD App
Status: Completed / Editable
Highlight: Expense tracking application with CRUD operations and database persistence.

5. BUILD LOGS SECTION
Make this section unique.
Title:
“Engineering Notes”

Cards:
- “Camera-based inference showed lower accuracy than uploaded image inference, so I started comparing lighting, focus, and image quality conditions.”
- “MQ-135 and moisture sensor readings are used as trigger signals for automated image capture.”
- “SQLite is used only for local user/login data, while sensor data is pushed to ThingSpeak.”
- “Currently exploring local LLMs with Ollama for AI-assisted development workflows.”
- “I prefer building projects through experimentation, debugging, and AI-assisted iteration.”

6. EXPERIENCE SECTION
Use timeline style.

Experience 1:
AICTE – EduSkills
Role: AWS Cloud Architect Intern
Duration: Jan 2025 – Mar 2025
Remote
Points:
- Deployed and secured a PHP–MySQL web application using AWS EC2, RDS, VPC, and Secrets Manager.
- Configured Load Balancer and Auto Scaling for reliable and scalable performance.
- Worked with IAM, Security Groups, ALB, and cloud deployment workflows.

Experience 2:
AICTE – EduSkills
Role: RapidMiner Data Scientist Intern
Duration: Oct 2024 – Dec 2024
Remote
Points:
- Built data cleaning and transformation workflows.
- Applied feature engineering for better data quality.
- Used RapidMiner for automated data science workflows and practical analytics exposure.

7. SKILLS SECTION
Do not show boring skill bars.
Show grouped skill cards.

Groups:
Programming:
Python, JavaScript, SQL, HTML, CSS

Frontend:
React.js, Tailwind CSS, shadcn/ui, Framer Motion

Backend:
Node.js, Express.js, Flask, PHP

Databases:
MySQL, MongoDB, SQLite

AI / ML:
YOLOv8, TensorFlow, PyTorch, OpenCV, Scikit-learn, Pandas, NumPy

Cloud / DevOps:
AWS EC2, RDS, VPC, IAM, Security Groups, ALB, Auto Scaling, Git, GitHub, Docker

Tools:
Jupyter Notebook, Power BI, RapidMiner Studio, Anaconda, Spyder, VS Code, Cursor

8. ABOUT SECTION
Write this in first person but not too cheesy.

Content:
I am a Computer Engineering student who likes building practical systems using AI, web technologies, cloud, and automation. My work style is experimental and AI-assisted: I use tools like ChatGPT, Cursor, and coding agents to prototype faster, but I focus on understanding the system flow, debugging issues, and turning rough ideas into working products.

I am especially interested in AI applications, computer vision, automation dashboards, full-stack products, and real-world systems that combine software with hardware.

9. CONTACT SECTION
Simple CTA:
“Have a role, project, internship, or collaboration where fast prototyping and practical AI systems matter?”

Buttons:
- Email Me
- GitHub
- LinkedIn

Footer:
“Built as an engineering lab, not a template.”

INTERACTION IDEAS
Add subtle interactive features:
- Command palette style search or quick nav if easy
- Hover glow on system cards
- Animated pipeline arrows
- Terminal-style text block
- Project filter by type: AI, Full Stack, Frontend, Cloud
- Optional “Ask about my projects” placeholder section, but do not implement real AI chat unless simple placeholder only

CODE QUALITY REQUIREMENTS
- Clean file structure
- Reusable components
- Fully responsive
- Accessible color contrast
- No broken links
- No fake metrics except clearly editable placeholders
- Add comments where I can edit content
- Use placeholder resume file path: /resume.pdf
- Include README.md explaining how to edit content, run locally, and deploy on Vercel

DELIVERABLES
Create the full project with:
- package.json
- Vite config
- Tailwind config
- src folder
- reusable components
- data files
- README.md

After building, run:
npm install
npm run build

Fix any errors before final response.