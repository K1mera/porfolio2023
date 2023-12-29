
import { motion } from "framer-motion";



export const DesProjects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="flex justify-center items-start w-1/2 h-full pt-16"
    >
      <h1 className="text-xl font-poppins font-light dark:text-white">
        Sorry, design projects will be here soon 😳🙇🏼‍♂️.
      </h1>
    </motion.div>
  );
};
