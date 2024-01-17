import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const DesProjects = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="flex justify-center items-start w-1/2 h-full pt-16"
    >
      <h1 className="text-xl text-center font-poppins font-light dark:text-white">
        {t("projectsDescribtions.des.tempMessage.0")} <br />{" "}
        {t("projectsDescribtions.des.tempMessage.1")}{ " " }
        <Link
          className="text-red-500 hover:text-purple-500"
          to="https://drive.google.com/file/d/1Wqd6eOnzNJ7XJTlUfp-F7pjtxFTQHlsd/view?usp=sharing"
          target="blank"
        >
          {t("projectsDescribtions.des.tempMessage.2")}
        </Link>{" "}
        {t("projectsDescribtions.des.tempMessage.3")}
      </h1>
    </motion.div>
  );
};
