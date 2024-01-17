import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Experience = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="flex flex-col items-center min-h-max w-full mb-6 gap-8 mt-20"
    >
      <h1 className="text-4xl font-fredericka text-orange-600 mb-4">
        {t("experience.title")}
      </h1>
      <section className="flex flex-col gap-8 h-full w-1/2 items-center text-lg">
        <article className="flex gap-2  w-full font-poppins justify-center pt-4">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">
              {t("experience.experiences.experience1.title")}
            </h2>
            <h3 className="text-orange-200 ">
              {t("experience.experiences.experience1.date")}
            </h3>
          </div>
          <div className="flex flex-col gap-1 w-1/2 font-light dark:text-white">
            <p>
              {t("experience.experiences.experience1.description.0")}
            </p>
            <p>{t("experience.experiences.experience1.description.1")}</p>
          </div>
        </article>
        <article className="flex gap-2 w-full font-poppins justify-center ">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">
              {t("experience.experiences.experience2.title")}
            </h2>
            <h3 className="text-orange-200 ">{t("experience.experiences.experience2.date")}</h3>
          </div>
          <div className="flex flex-col gap-1 h-full w-1/2 font-light dark:text-white">
            <p>
              {t("experience.experiences.experience2.description")}
            </p>
          </div>
        </article>
        <article className="flex gap-2  w-full font-poppins justify-center ">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">{t("experience.experiences.experience3.title")}</h2>
            <h3 className="text-orange-200 ">{t("experience.experiences.experience3.date")}</h3>
          </div>
          <div className="flex flex-col gap-1 w-1/2 font-light dark:text-white">
            <p>
              {t("experience.experiences.experience3.description.0")}
            </p>
            <p>{t("experience.experiences.experience3.description.1")}</p>
          </div>
        </article>
      </section>
    </motion.div>
  );
};
