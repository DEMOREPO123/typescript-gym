import React from "react";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BeneFitsPageGrapgic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];
const conatiner = {
  hidden: {},
  visible: {
    transistion: { staggerChildern: 0.2 },
  },
};

type Props = {
  setSelectedPage(
    value: SelectedPage,
  ): React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benifits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
        {/**Header */}
        <motion.div
          className="md:my-6 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 1.75 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 1 },
          }}
        >
          <HText>MORE THAN JUST A GYM.</HText>
          <p className="my-5 text-sm ">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/**Benefits */}
        <motion.div
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={conatiner}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/**GRAPHICS */}
        <div className=" mt-16 items-center justify-between gap-20 md:flex md:mt-28">
          <img
            className="mx-auto "
            alt="benefits-page-graphic"
            src={BeneFitsPageGrapgic}
          />
          <div>
            {/**title */}
            <div className="relative">
              {" "}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 1.75 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 1 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>
            {/**description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 1.75 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 1 },
              }}
            >
              <p className="my-5">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea
                autem optio voluptates cum sunt aliquid amet numquam dolorem
                nobis fugiat eum minus mollitia nesciunt, id ipsum assumenda
                sint eos quis! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Voluptate ipsam dolorem debitis et repudiandae
                eaque maiores aperiam architecto labore nemo perspiciatis,
                blanditiis neque obcaecati numquam iure magnam voluptatum magni
                itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae quam aspernatur assumenda maiores non sapiente vitae
                explicabo est molestiae eligendi sint maxime, error modi porro
                ipsum perspiciatis iure? Dicta, ex.
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                reiciendis beatae consequatur iure non hic officiis, tempora
                accusantium praesentium. Ducimus, nesciunt molestiae. Itaque
                deserunt iusto beatae odit molestias error exercitationem! Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                soluta corporis architecto, quo odit saepe nemo totam, sit harum
                aut voluptatem aperiam nihil mollitia officiis accusamus.
                Recusandae consequatur laborum dolor.
              </p>
            </motion.div>
            {/**Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:z-[-1] before:right-40 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
