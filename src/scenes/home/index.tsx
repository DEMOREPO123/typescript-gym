import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import HomePageText from "@/assets/HomePageText.png";
import SponserRedBull from "@/assets/SponsorRedBull.png";
import SponserForbes from "@/assets/SponsorForbes.png";
import SponserFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="Home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/*IMAGE &HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/**Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} /// if 50% of div is visible
            transition={{ delay: 0.2, duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="Home Page text " src={HomePageText} />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              {" "}
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/**ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} /// if 50% of div is visible
            transition={{ delay: 0.4, duration: 4 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p> Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/**IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-[90px] md:justify-items-end">
          <img alt="home page graphic" src={HomePageGraphic} />
        </div>
      </motion.div>
      {/**Sponser */}
      {isAboveMediumScreens && (
        <div className="h-[140px] bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-8 w-3/5">
              <img alt="red bull sponser" src={SponserRedBull} />
              <img alt="forbes sponser" src={SponserForbes} />
              <img alt="fortune sponser" src={SponserFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
