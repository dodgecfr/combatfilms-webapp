"use client";

import { motion } from "framer-motion";
import { Clock, Flag, Milestone, ShieldAlert, Star, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function Timeline() {
  const events: TimelineEvent[] = [
    {
      date: "August 1950",
      title: "Mobilization",
      description: "The 213th Field Artillery Battalion was mobilized for service in the Korean War",
      icon: <Users className="size-5" />,
    },
    {
      date: "February 1951",
      title: "Deployment to Korea",
      description: "The 213th arrived in Korea and joined the fight against communist forces",
      icon: <Flag className="size-5" />,
    },
    {
      date: "May 26, 1951",
      title: "Battle Preparation",
      description: "The 213th moved into position in the Gapyeong (Kapyong) Valley",
      icon: <Milestone className="size-5" />,
    },
    {
      date: "May 27, 1951 (1:55 AM)",
      title: "Battle Begins",
      description: "Chinese forces launch their attack against the 213th's position",
      icon: <ShieldAlert className="size-5" />,
    },
    {
      date: "May 27, 1951 (Dawn)",
      title: "The Miracle",
      description: "The 213th emerged victorious, with no casualties despite being vastly outnumbered",
      icon: <Star className="size-5" />,
    },
    {
      date: "July 1952",
      title: "Return Home",
      description: "All members of the original 213th returned home safely from their deployment",
      icon: <Clock className="size-5" />,
    }
  ];

  return (
    <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-muted-foreground/20 before:to-transparent md:before:mx-auto md:before:translate-x-0">
      {events.map((event, index) => (
        <motion.div
          key={index}
          className={cn(
            "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse",
            index === 0 ? "pt-2" : ""
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted shadow md:order-1 md:mx-auto">
            {event.icon}
          </div>
          
          <div className="ml-6 w-[calc(100%-4rem)] rounded-lg bg-background p-4 shadow md:ml-0 md:mr-6 md:w-[calc(50%-2.5rem)] md:even:ml-6 md:even:mr-0">
            <div className="mb-1 font-mono text-sm text-muted-foreground">
              {event.date}
            </div>
            <div className="font-bold">{event.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">
              {event.description}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 