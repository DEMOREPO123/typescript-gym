import Logo from "@/assets/Logo.png";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Footer = ({ setSelectedPage }: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <motion.div
        className="justify-content mx-auto w-5/6 gap-16 md:flex"
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
      >
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            beatae quo minus. Minus corporis, placeat recusandae distinctio,
            veniam incidunt qui delectus optio modi sapiente libero.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Massa orci senectus</p>
          <p className="my-5">Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
