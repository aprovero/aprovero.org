export interface ServerService {
  id: string;
  name: string;
  category: 'Core & OS' | 'Automation' | 'Cloud & Storage' | 'Media & Photos' | 'Utilities & Network';
  role: string;
  description: string;
  defaultSubdomain: string;
  defaultUrl: string;
  port?: number;
  tags: string[];
  status: 'Online' | 'Active' | 'Configuring';
  accentColor: string;
}

export const serverServices: ServerService[] = [
  {
    id: "casaos",
    name: "CasaOS",
    category: "Core & OS",
    role: "Server Hub & Management",
    description: "Primary server dashboard, hardware telemetry, container lifecycle, and central application launchpad.",
    defaultSubdomain: "casa",
    defaultUrl: "https://casa.aprovero.org",
    port: 80,
    tags: ["Dashboard", "Docker", "System", "Storage"],
    status: "Online",
    accentColor: "#2563EB", // Blue
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Automation",
    role: "Workflow Automation Engine",
    description: "Self-hosted node-based workflow automation for personal tasks, smart budgeting, and multi-service API pipelines.",
    defaultSubdomain: "n8n",
    defaultUrl: "https://n8n.aprovero.org",
    port: 5678,
    tags: ["Automation", "Webhooks", "API", "Pipelines"],
    status: "Online",
    accentColor: "#FF6D5A", // n8n Coral
  },
  {
    id: "immich",
    name: "Immich",
    category: "Media & Photos",
    role: "Photo Storage & Backup",
    description: "High-performance self-hosted photo and video backup solution with timeline navigation, facial recognition, and mobile sync.",
    defaultSubdomain: "immich",
    defaultUrl: "https://immich.aprovero.org",
    port: 2283,
    tags: ["Photos", "Backup", "Machine Learning", "Mobile Sync"],
    status: "Online",
    accentColor: "#4255FF", // Immich Indigo
  },
  {
    id: "nextcloud",
    name: "Nextcloud",
    category: "Cloud & Storage",
    role: "Private Cloud Workspace",
    description: "Decentralized file sync, private cloud storage, document collaboration, and household data synchronization.",
    defaultSubdomain: "nextcloud",
    defaultUrl: "https://nextcloud.aprovero.org",
    port: 8080,
    tags: ["Cloud", "Files", "Sync", "Productivity"],
    status: "Online",
    accentColor: "#0082C9", // Nextcloud Blue
  },
  {
    id: "portainer",
    name: "Portainer",
    category: "Core & OS",
    role: "Container Operations",
    description: "Granular Docker stack and container environment management, compose configurations, and persistent volume tracking.",
    defaultSubdomain: "portainer",
    defaultUrl: "https://portainer.aprovero.org",
    port: 9000,
    tags: ["Docker", "DevOps", "Stacks", "Containers"],
    status: "Online",
    accentColor: "#13BEF9", // Portainer Cyan
  },
  {
    id: "homeassistant",
    name: "Home Assistant",
    category: "Utilities & Network",
    role: "Smart Home Centralization",
    description: "Unified local smart home controller integrating household cameras, plugs, environmental sensors, and automations.",
    defaultSubdomain: "ha",
    defaultUrl: "https://ha.aprovero.org",
    port: 8123,
    tags: ["IoT", "Sensors", "Automation", "Zigbee/Wi-Fi"],
    status: "Online",
    accentColor: "#18BCF2", // Home Assistant Cyan
  },
  {
    id: "jellyfin",
    name: "Jellyfin",
    category: "Media & Photos",
    role: "Local Media Streaming",
    description: "Hardware-friendly personal media system streaming personal video and audio collections across home devices.",
    defaultSubdomain: "jellyfin",
    defaultUrl: "https://jellyfin.aprovero.org",
    port: 8096,
    tags: ["Streaming", "Media", "TV", "Entertainment"],
    status: "Online",
    accentColor: "#AA5CC3", // Jellyfin Purple
  },
  {
    id: "adguard",
    name: "AdGuard Home",
    category: "Utilities & Network",
    role: "DNS & Content Filtering",
    description: "Network-wide recursive DNS server providing ad blocking, tracker filtering, and private household DNS routing.",
    defaultSubdomain: "adguard",
    defaultUrl: "https://adguard.aprovero.org",
    port: 3000,
    tags: ["DNS", "Security", "Privacy", "AdBlock"],
    status: "Online",
    accentColor: "#68BC71", // AdGuard Green
  },
  {
    id: "stirling-pdf",
    name: "Stirling-PDF",
    category: "Utilities & Network",
    role: "PDF Manipulation Suite",
    description: "Full-featured offline-first web utility for merging, splitting, OCR, compressing, and signing PDF documents.",
    defaultSubdomain: "pdf",
    defaultUrl: "https://pdf.aprovero.org",
    port: 8080,
    tags: ["PDF", "Productivity", "Documents", "Tools"],
    status: "Online",
    accentColor: "#E11D48", // Stirling Rose/Red
  },
  {
    id: "metube",
    name: "MeTube",
    category: "Media & Photos",
    role: "Media Download Agent",
    description: "Web GUI wrapper for youtube-dl / yt-dlp to download and preserve media directly onto server storage.",
    defaultSubdomain: "metube",
    defaultUrl: "https://metube.aprovero.org",
    port: 8081,
    tags: ["Downloads", "Archive", "Media", "Utility"],
    status: "Online",
    accentColor: "#EAB308", // Amber
  },
];
