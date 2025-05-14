"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Video } from "../_data/videos";

interface VideoGridProps {
  videos: Video[];
}

export function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.map((video) => {
        console.log('Video Debug Info:', {
          id: video.id,
          title: video.title,
          videoType: video.videoType,
          videoId: video.videoId,
          // If you have width/height info, log it here
        });

        return (
          <Card key={video.id} className="flex flex-col h-full overflow-hidden hover:shadow-md transition-shadow">
            <CardHeader className="p-4 pb-2 space-y-2">
              <CardTitle className="text-lg whitespace-normal mb-2">{video.title}</CardTitle>
              {video.subtitle && (
                <p className="text-sm text-muted-foreground -mt-1">{video.subtitle}</p>
              )}
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow">
              <div
                className="aspect-video w-full rounded-md overflow-hidden mb-4 bg-card"
              >
                {video.videoType === 'vimeo' && video.videoId ? (
                  <iframe
                    src={`https://player.vimeo.com/video/${video.videoId}?transparent=0`}
                    title={video.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : video.videoType === 'youtube' && video.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : video.image ? (
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              
              <div className="flex flex-col gap-1 mb-2">
                <span className="text-xs bg-muted text-muted-foreground rounded-full px-2 py-1 self-start">
                  {video.category}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground">
                {video.description}
              </p>
              {video.storeLink && (
                <Link href={video.storeLink} className="w-full mt-4 block">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
} 