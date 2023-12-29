import { useTranslation } from "react-i18next";
import faceLogo from "/assets/logo_face.png";

export const Welcome = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[calc(100vh-128px)] flex flex-col items-center pt-24 mt-20">
      <div className="w-[22rem] h-96 flex flex-col items-center gap-8">
        <img className="w-28" src={faceLogo} alt="logo_leon" />
        <div className="flex flex-col flex-1 gap-2">
          <h1 className="font-poppins font-extralight text-gray-900 text-center text-3xl leading-normal dark:text-slate-50">
            {t("welcome.greeting")}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              {t("welcome.name")}
            </span>
            , {t("welcome.greeting2")}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              {t("welcome.role1")}
            </span>
            , {t("welcome.role3")}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              {t("welcome.role2")}
            </span>
            .
          </h1>
          <p className="text-light font-poppins text-center text-gray-600 dark:text-white">
            {t("welcome.description")}
          </p>
        </div>
      </div>
    </section>
  );
};
