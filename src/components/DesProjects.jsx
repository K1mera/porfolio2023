
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



export const DesProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="flex justify-center items-start w-1/2 h-full pt-16"
    >
      <h1 className="text-xl text-center font-poppins font-light dark:text-white">
        Sorry, design projects will be here soon 😳🙇🏼‍♂️. <br /> Meantime this{" "}
        <Link
          className="text-red-500 hover:text-purple-500"
          to="https://drive.google.com/file/d/1Wqd6eOnzNJ7XJTlUfp-F7pjtxFTQHlsd/view?usp=sharing"
          target="blank"
        >
          PDF📜
        </Link>{" "}
        contains some of my projects.
      </h1>
    </motion.div>
  );
};
