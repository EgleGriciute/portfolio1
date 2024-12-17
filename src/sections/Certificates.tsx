import certificateFullStack from "@/assets/images/certificate-fullStack.png";
import certificateFrontEnd from "@/assets/images/certificate-frontEnd.png";
import certificateITSupport from "@/assets/images/certificate-ITSupport.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfoliocertificates = [
  {
    schoolName: "Udemy",
    year: "2023",
    title: "IT Support Technical Skills",
    results: [
      { title: "Windows services and operating systems" },
      { title: "User account management and AD" },
      { title: "System monitoring and optimization" },
    ],
    image: certificateITSupport,
  },
  {
    schoolName: "Code Academy",
    year: "2022",
    title: "Front End Development Advanced Studies",
    results: [
      { title: "Responsive design development" },
      { title: "TailwindCSS, JavaScript" },
      { title: "MERN stack: Node.js, MongoDB, React.js" },
    ],
    image: certificateFrontEnd,
  },
  {
    schoolName: "Code Academy",
    year: "2021",
    title: "Full Stack Programming",
    results: [
      { title: "HTML5, CSS3, Bootstrap" },
      { title: "JavaScript" },
      { title: "PHP/MySQL" },
    ],
    image: certificateFullStack,
  },
];

export const CertificatesSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="certificates">
      <div className="container">
        <SectionHeader
          eyebrow="Practical Outcomes"
          title="IT certificates"
          description=" I have earned a range of certifications that highlight my expertise in both technical and testing domains."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfoliocertificates.map((certificate, certificateIndex) => (
            <Card
              key={certificate.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
              style={{ top: `calc(64px + ${certificateIndex * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{certificate.schoolName}</span>
                    <span>&bull;</span>
                    <span>{certificate.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {certificate.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {certificate.results.map((result) => (
                      <li
                        key={result.title}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <Image
                    src={certificate.image}
                    alt={`Image of ${certificate.title}`}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
