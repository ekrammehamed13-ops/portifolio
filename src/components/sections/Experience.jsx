import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { experience } from "../../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Work Experience"
          subtitle="My Journey"
        />

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/40 via-primary-400/20 to-transparent" />
          {experience.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
