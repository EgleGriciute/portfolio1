"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import podcastImage from "@/assets/images/darknet-diaries.png";
import Image from "next/image";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import SassIcon from "@/assets/icons/sass.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import NodeJSIcon from "@/assets/icons/nodeJS.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import JiraIcon from "@/assets/icons/jira.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const toolboxDevItems = [
  { title: "HTML5", iconType: HTMLIcon },
  { title: "CSS3", iconType: CSSIcon },
  { title: "Sass", iconType: SassIcon },
  { title: "TailwindCSS", iconType: TailwindCSSIcon },
  { title: "JavaScript", iconType: JavaScriptIcon },
  { title: "Node.js", iconType: NodeJSIcon },
  { title: "React", iconType: ReactIcon },
  { title: "GitHub", iconType: GithubIcon },
];

const toolQAItems = [{ title: "Jira/Zephyr Scale", iconType: JiraIcon }];

const hobbies = [
  { title: "Travelling", emoji: "✈️", left: "5%", top: "5%" },
  { title: "Playstation 4", emoji: "🎮", left: "53%", top: "5%" },
  { title: "Dancing", emoji: "💃", left: "5%", top: "70%" },
  { title: "Crafts", emoji: "🪄", left: "58%", top: "40%" },
  { title: "Podcasts", emoji: "📻", left: "50%", top: "70%" },
  { title: "Hiking", emoji: "🚶‍♀️", left: "20%", top: "40%" },
  { title: "Films", emoji: "🎞️", left: "10%", top: "27%" },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Beloved Podcast"
                description="Explore the media shaping my perspectives."
              />
              <div className="w-64 mx-auto mt-8  md:-mt-4 flex justify-center">
                <a href="https://www.youtube.com/@JackRhysider" target="_blank">
                  <Image
                    src={podcastImage}
                    alt="Podcast image"
                    className="rounded-t-lg size-30"
                  />
                </a>
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Discover the development and testing skills I use to craft exceptional digital experiences."
              />
              <ToolboxItems
                items={toolboxDevItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolQAItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:20s]"
              />
            </Card>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-5">
            <Card className="h-[320px] flex flex-col md:col-span-3 lg:col-span-3">
              <CardHeader
                title="Beyond the Code"
                description="Drag and drop my interests and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(({ title, emoji, left, top }) => (
                  <motion.div
                    key={title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute text-nowrap"
                    style={{ left, top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{title}</span>
                    <span>{emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] relative md:col-span-2">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="smiling memoji"
                  className="size-16"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
