"use client";

import * as React from "react";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TabInfo {
  value: string;
  label: string;
}

interface ResponsiveWorkTabsProps {
  tabs: TabInfo[];
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function ResponsiveWorkTabs({ 
  tabs, 
  value, 
  onValueChange,
  className 
}: ResponsiveWorkTabsProps) {
  
  const commonTriggerClasses = `
    flex-1 min-w-0 px-2 sm:px-6 py-2.5 border border-input rounded-md shadow-sm transition-all 
    hover:bg-accent hover:text-accent-foreground
    data-[state=active]:bg-primary data-[state=active]:text-primary-foreground
    data-[state=active]:shadow-md text-sm sm:text-base
  `;

  return (
    <>
      {/* Dropdown for small screens */}
      <div className={`sm:hidden ${className ?? ''}`}>
        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="w-full py-2.5 h-auto text-sm rounded-md"> {/* Added rounded-md */}
            <SelectValue placeholder="Select category..." />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab.value} value={tab.value}>
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tabs for medium and larger screens */}
      <TabsList className={`hidden sm:flex w-full bg-transparent h-auto p-0 justify-between gap-2 ${className ?? ''}`}>
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={commonTriggerClasses}
          >
            <span className="truncate">{tab.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </>
  );
}