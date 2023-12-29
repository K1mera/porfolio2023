import {useState} from "react";
import { DevProjects, DesProjects } from "./";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";




export const Projects = () => {
  const { t } = useTranslation();

  const [onDev, setonDev] = useState(true)

  const onDesProjects = () => {
    setonDev(false)
  }
  const onDevProjects = () => {
    setonDev(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="flex flex-col items-center h-screen w-full mb-6 gap-8"
    >
      <h1 className="text-4xl font-fredericka text-orange-600">{t("projects.title")}</h1>
      <section className="flex flex-col h-full w-full justify-start items-center">
        <section className="flex gap-5 font-poppins text-lg text-red-700 font-normal h-auto">
          <button onClick={ onDevProjects } className="border border-solid border-red-700 pb-1 border-x-0 border-t-0 px-2">
            {t("projects.subtitle1")}
          </button>
          <button onClick={ onDesProjects } className="border border-solid border-red-700 pb-1 border-x-0 border-t-0 px-2">
            {t("projects.subtitle2")}
          </button>
        </section>
        {
          onDev ? <DevProjects />
                : <DesProjects />
        }
        
      </section>
    </motion.div>
  );
};
