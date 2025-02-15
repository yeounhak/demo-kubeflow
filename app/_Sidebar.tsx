"use client";

import { cn } from "@/lib/utils";
import { 
  Home, 
  GitBranch, 
  Server, 
  Database, 
  Archive, 
  Github, 
  FileText,
  HardDrive,
  BarChart2,
  Activity,
  Users,
  LineChart,
  Wind,
  PieChart,
  Brain,
  HardDriveDownload,
  Ship,
  BookOpen,
  GraduationCap,
  Image
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/home", icon: Home },
  { name: "Notebook Servers", href: "/notebook-servers", icon: Server },
  { name: "Volumes", href: "/volumes", icon: HardDrive },
  { name: "Resource Summary", href: "/resource-summary", icon: BarChart2 },
  { name: "Job Monitoring", href: "/job-monitoring", icon: Activity },
  { name: "Users", href: "/users", icon: Users },
  { name: "MLflow", href: "/mlflow", icon: LineChart },
  { name: "Airflow", href: "/airflow", icon: Wind },
  { name: "Resource Usage", href: "/resource-usage", icon: PieChart },
];

const externalLinks = [
  { name: "GitHub", href: "https://github.com/yeounhak/demo-kubeflow", icon: Github },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col bg-[#002952] text-white">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-xl font-bold">Kubeflow</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                isActive
                  ? "bg-blue-700 text-white"
                  : "text-gray-300 hover:bg-blue-800 hover:text-white"
              )}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
        <div className="mt-8 pt-8 border-t border-gray-700">
          {externalLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center rounded-md px-2 py-2 text-sm font-medium text-gray-300 hover:bg-blue-800 hover:text-white"
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="flex-shrink-0 p-4 text-sm text-gray-400">
        build version dev_local
      </div>
    </div>
  );
}