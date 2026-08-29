import {
  FaIndustry,
  FaCogs,
  FaChartLine,
  FaCheckCircle,
  FaClipboardList,
  FaLightbulb,
} from "react-icons/fa";

const serviceData = [
  {
    id: 1,
    title: "Production Management",
    description:
      "Efficient production planning, monitoring, and management to ensure smooth operations and maximum productivity.",
    details:
      "Professional production management focuses on planning, organizing, monitoring, and controlling production activities. The goal is to achieve production targets efficiently while maintaining quality, reducing downtime, controlling costs, and increasing overall productivity.",
    features: [
      "Production planning and monitoring",
      "Manpower and resource management",
      "Production target achievement",
      "Downtime reduction",
      "Productivity improvement",
    ],
    icon: FaIndustry,
  },

  {
    id: 2,
    title: "Industrial Engineering",
    description:
      "Improving production processes, workflow, efficiency, and overall operational performance.",
    details:
      "Industrial Engineering focuses on analyzing and improving production systems. It helps organizations optimize manpower, machines, workflow, production methods, and resources to achieve better efficiency and productivity.",
    features: [
      "Work study and method study",
      "Line balancing",
      "Manpower optimization",
      "Process improvement",
      "Productivity analysis",
    ],
    icon: FaCogs,
  },

  {
    id: 3,
    title: "LEAN Manufacturing",
    description:
      "Implementing LEAN manufacturing principles to reduce waste, improve quality, and increase productivity.",
    details:
      "LEAN Manufacturing focuses on eliminating unnecessary activities and reducing waste throughout the production process. It creates a more efficient workflow while improving quality, productivity, and customer value.",
    features: [
      "Waste reduction",
      "Process optimization",
      "5S implementation",
      "Kaizen and continuous improvement",
      "Efficiency improvement",
    ],
    icon: FaChartLine,
  },

  {
    id: 4,
    title: "Quality Assurance",
    description:
      "Maintaining quality standards through effective quality control, monitoring, and continuous improvement.",
    details:
      "Quality Assurance ensures that products and processes consistently meet required quality standards. It involves systematic monitoring, quality control, root cause analysis, and preventive actions.",
    features: [
      "Quality monitoring",
      "Root Cause Analysis",
      "Defect reduction",
      "Quality control systems",
      "Corrective and preventive actions",
    ],
    icon: FaCheckCircle,
  },

  {
    id: 5,
    title: "Production Planning",
    description:
      "Strategic production planning to optimize resources, meet deadlines, and achieve production targets.",
    details:
      "Production Planning involves preparing production schedules, allocating resources, balancing capacity, monitoring progress, and ensuring that production targets are achieved within the required timeline.",
    features: [
      "Production scheduling",
      "Capacity planning",
      "Resource allocation",
      "Target monitoring",
      "On-time delivery planning",
    ],
    icon: FaClipboardList,
  },

  {
    id: 6,
    title: "Continuous Improvement",
    description:
      "Identifying operational problems and implementing practical solutions for continuous business improvement.",
    details:
      "Continuous Improvement focuses on identifying operational problems, analyzing their root causes, and implementing practical solutions. The objective is to continuously improve productivity, quality, efficiency, and business performance.",
    features: [
      "Problem identification",
      "Root Cause Analysis",
      "Kaizen activities",
      "Process improvement",
      "Performance optimization",
    ],
    icon: FaLightbulb,
  },
];

export default serviceData;