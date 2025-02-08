import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage(
    value: SelectedPage,
  ): React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
      variants={childVariant}
      transition={{ delay: 0.3, duration: 2 }}
    >
      <div className="mb-4 flex justify-center ">
        <div className="rounded-full border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="my-3">{description}</p>
      <AnchorLink
        className="text-sm font-bold text-primary-500 underline"
        href={`${SelectedPage.ContactUs}`}
        onClick={() => {
          setSelectedPage(SelectedPage.ContactUs);
        }}
      ></AnchorLink>
    </motion.div>
  );
};

export default Benefit;
