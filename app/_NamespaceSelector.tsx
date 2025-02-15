"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { namespaces } from "@/app/api/data/get_namespaces";

export function NamespaceSelector() {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500">Select namespace</span>
      <Select defaultValue="default">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select namespace" />
        </SelectTrigger>
        <SelectContent>
          {namespaces.map((namespace) => (
            <SelectItem key={namespace} value={namespace}>
              {namespace}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}