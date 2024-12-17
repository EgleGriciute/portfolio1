import Image from "next/image";
import { Fragment } from "react";
import memojiElonMusk from "@/assets/images/memoji-ElonMusk.png";
import memojiSteveJobs from "@/assets/images/memoji-SteveJobs.png";
import memojiMarkZuckerberg from "@/assets/images/memoji-MarkZuckerberg.png";
import memojiReedHastings from "@/assets/images/memoji-ReedHastings.png";
import memojiBillGates from "@/assets/images/memoji-BillGates.png";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Elon Musk",
    position: "CEO of SpaceX and Tesla",
    text: `"If you're not passionate about the problem you're solving, you'll never make it through the tough times."`,
    avatar: memojiElonMusk,
  },
  {
    name: "Steve Jobs",
    position: "Co-founder of Apple",
    text: `"The people who are crazy enough to think they can change the world are the ones who do."`,
    avatar: memojiSteveJobs,
  },
  {
    name: "Mark Zuckerberg",
    position: "Co-founder of Facebook",
    text: `"I think the biggest challenge entrepreneurs face is actually having the resilience to stick through the hard times."`,
    avatar: memojiMarkZuckerberg,
  },
  {
    name: "Bill Gates",
    position: "Co-founder of Microsoft",
    text: `"Your most unhappy customers are your greatest source of learning."`,
    avatar: memojiBillGates,
  },
  {
    name: "Reed Hastings",
    position: "Co-founder of Netflix",
    text: `"The most important thing is to take a risk, to believe in what you're doing, and to believe in yourself."`,
    avatar: memojiReedHastings,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:mt-24 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Renowned tech leaders"
          title="Inspirational quotes"
          description="Encouraged to keep going, even when faced with obstacles, and to pursue dreams with conviction and courage."
        />
        <div className="mt-12 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {Array.from({ length: 2 }).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <blockquote className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                          <Image
                            src={testimonial.avatar}
                            alt={`Avatar of ${testimonial.name}`}
                            className="max-h-full rounded-full"
                          />
                        </div>
                        <div>
                          <div className="font-semibold">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-white/40">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                      <p className="mt-4 md:mt-6 text-sm md:text-base">
                        {testimonial.text}
                      </p>
                      <cite className="text-sm text-white/50 mt-4 block">
                        — {testimonial.name}
                      </cite>
                    </blockquote>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
