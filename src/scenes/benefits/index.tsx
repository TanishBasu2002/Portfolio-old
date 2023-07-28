import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { EducationType, SelectedPage } from "@/shared/types";
import {
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Education from "./Benefit";
import Lottie from "lottie-react";
import animationData from "@/assets/BenefitsPageGraphic.json";
const educations: Array<EducationType> = [
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Bachelor of Computer Applications",
    description:
      "I did My Bachelor of Computer Applications From Maulana Abul Klam Azad University of Technology. I was Batch 2021-2024.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Udamy Classes",
    description:
      "I Learned about Full Stack Web Development From Udamy's Course 2023 Full Stack Web Development Bootcamp by Dr. Angela Yu.",
  },
  /**{
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  }, */
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Educations = ({ setSelectedPage }: Props) => {
  return (
    <section id="educations" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Education)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Education.</HText>
          <p className="my-5 text-sm">
           All Info on my Education is mentioned here  
          </p>
        </motion.div>

        {/* Educations */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {educations.map((benefit: EducationType) => (
            <Education
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          
          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    See My New and Grate Projects On{" "}
                    <span className="text-primary-500">GITHUB</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              As a student, I am excited to share my latest projects on GitHub with everyone.
              GitHub is a fantastic platform for sharing code and collaborating with others in the development community.
              I have put in a lot of effort and time to create these projects, and I am proud of the results.
              </p>
              <p className="mb-5">
              I hope that others find my work useful and perhaps even contribute to it.
              Sharing my projects on GitHub is a great way to showcase my skills and knowledge to potential employers and peers.
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={() => window.location.href="https://github.com/TanishBasu2002"}>
                  See Codes
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Educations;
