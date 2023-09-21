

export const Welcome = () => {
  return (
    <section className="w-full h-[calc(100vh-128px)] flex flex-col items-center pt-24">
      <div className="w-[22rem] h-96 flex flex-col items-center gap-8">
        <img className="w-28" src="/assets/logo_face.png" alt="logo_leon" />
        <div className="flex flex-col flex-1 gap-2">
          <h1 className="font-poppins font-extralight text-gray-900 text-center text-3xl leading-normal dark:text-slate-50">
            Hi! My name is{" "}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              Leon
            </span>
            , and I am{" "}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              Web Developer
            </span>
            , and{" "}
            <span className="font-fredericka text-orange-600 dark:text-orange-500">
              Graphic Designer
            </span>
            .
          </h1>
          <p className="text-light font-poppins text-center text-gray-600 dark:text-white">
            Insanely creative 💡, father of three beautiful cats 😺, passionate
            writer in my free time 📓.
          </p>
        </div>
      </div>
    </section>
  );
}
