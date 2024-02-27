import { Link } from "react-router-dom";
import {
  BootstrapIcon,
  CssIcon,
  FirebaseIcon,
  HtmlIcon,
  JavaScriptIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  TailwindIcon,
} from "../icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const DevProjects = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
      className="grid lg:grid-cols-3 grid-cols-1 grid-rows-7 w-1/2 h-full gap-3 p-8"
    >
      {/* first div */}
      <div className="group relative bg-white rounded-xl row-span-2 overflow-hidden hover:scale-[103%] transition bg-travelling bg-cover bg-bottom shadow-lg shadow-orange-700/40">
        <Link to="https://incomparable-faun-b2c772.netlify.app" target="blank">
          <section className="absolute -bottom-32 mb-2 pt-4 px-2 w-full bg-gradient-to-t from-purple-950 h-52 group-hover:-bottom-14 group-hover:translate-y-0 transition-all group-hover:from-70%">
            <div className="flex w-full justify-between cursor-pointer">
              <h1 className="flex flex-col w-full items-start font-poppings font-bold text-lg text-zinc-900 group-hover:text-white">
                Travelling
              </h1>
              <div className="flex gap-1">
                <HtmlIcon className={"w-7"} />
                <TailwindIcon className={"w-7"} />
                <JavaScriptIcon className={"w-7"} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-white font-light text-sm pt-4">
                {t("projectsDescribtions.dev.travelling")}
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="group relative overflow-hidden hover:scale-[103%] transition bg-white rounded-xl bg-gifTool bg-cover shadow-lg shadow-orange-700/40">
        <Link to="https://fabulous-llama-b051a4.netlify.app" target="blank">
          <section className="absolute -bottom-32 mb-2 pt-4 px-2 w-full bg-gradient-to-t from-purple-950 h-52 group-hover:-bottom-14 group-hover:translate-y-0 transition-all group-hover:from-70% cursor-pointer">
            <div className="flex w-full justify-between ">
              <h1 className="flex flex-col w-full items-start font-poppings font-bold text-lg text-zinc-900 group-hover:text-white">
                Gif Tool
              </h1>
              <div className="flex gap-1 ">
                <ReactIcon className={"w-7"} />
                <BootstrapIcon className={"w-7"} />
                <JavaScriptIcon className={"w-7"} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-white font-light text-sm pt-4">
                {t("projectsDescribtions.dev.gifApp")}
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="group relative overflow-hidden hover:scale-[103%] transition bg-white rounded-xl bg-dogctionary bg-cover shadow-lg shadow-orange-700/40">
        <Link
          to="https://65a557a50d0a5b008cf6e09e--eclectic-monstera-e53b46.netlify.app/"
          target="blank"
        >
          <section className="absolute -bottom-32 mb-2 pt-4 px-2 w-full bg-gradient-to-t from-purple-950 h-52 group-hover:-bottom-14 group-hover:translate-y-0 transition-all group-hover:from-70% cursor-pointer">
            <div className="flex w-full justify-between gap-1">
              <h1 className="flex flex-col w-full items-start font-poppings font-bold text-lg text-zinc-900 group-hover:text-white">
                Dogctionary
              </h1>
              <div className="flex gap-[2px]">
                <ReactIcon className={"w-6"} />
                <CssIcon className={"w-6"} />
                <NodeIcon className={"w-6"} />
                <PostgresIcon className={"w-6"} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-white font-light text-sm pt-4">
                {t("projectsDescribtions.dev.dogctionary")}
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="group relative overflow-hidden hover:scale-[103%] transition bg-white rounded-xl bg-shopi bg-cover shadow-lg shadow-orange-700/40">
        <Link
          to="https://65a557a50d0a5b008cf6e09e--eclectic-monstera-e53b46.netlify.app/"
          target="blank"
        >
          <section className="absolute -bottom-32 mb-2 pt-4 px-2 w-full bg-gradient-to-t from-purple-950 h-52 group-hover:-bottom-14 group-hover:translate-y-0 transition-all group-hover:from-70% cursor-pointer">
            <div className="flex w-full justify-between gap-1">
              <h1 className="flex flex-col w-full items-start font-poppings font-bold text-lg text-zinc-900 group-hover:text-white">
                Shopi
              </h1>
              <div className="flex gap-[2px]">
                <ReactIcon className={"w-6"} />
                <TailwindIcon className={"w-6"} />
                <FirebaseIcon className={"w-6"} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-white font-light text-sm pt-4">
                {t("projectsDescribtions.dev.shopi")}
              </p>
            </div>
          </section>
        </Link>
      </div>
      <div className="group relative overflow-hidden hover:scale-[103%] transition bg-white rounded-xl bg-vitalfit bg-cover border-2 border-amber-300 shadow-lg shadow-orange-500">
        <Link to="https://vitalfit.onrender.com" target="blank">
          <section className="absolute -bottom-32 mb-2 pt-4 px-2 w-full bg-gradient-to-t from-purple-950 h-52 group-hover:-bottom-14 group-hover:-translate-y-12 transition-all group-hover:from-70% cursor-pointer">
            <div className="flex w-full justify-between gap-1">
              <h1 className="flex flex-col w-full items-start font-poppings font-bold text-lg text-zinc-900 group-hover:text-white">
                Vitalfit
              </h1>
              <div className="flex gap-[2px]">
                <ReactIcon className={"w-6"} />
                <TailwindIcon className={"w-6"} />
                <FirebaseIcon className={"w-6"} />
                <NodeIcon className={"w-6"} />
              </div>
            </div>
            <div>
              <p className="font-poppins text-white font-light text-sm pt-4">
                {t("projectsDescribtions.dev.vitalfit")}
              </p>
            </div>
          </section>
        </Link>
      </div>
    </motion.div>
  );
};
