

export const Experience = () => {
  return (
    <section className="flex flex-col items-center h-[calc(100vh-128px)] w-full mb-6 gap-8 mt-20">
      <h1 className="text-4xl font-fredericka text-orange-600 mb-4">
        Experience
      </h1>
      <section className="flex flex-col gap-8 h-full w-1/2 items-center text-lg">
        <article className="flex gap-2  w-full font-poppins justify-center pt-4">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">Web and Instructional Developer</h2>
            <h3 className="text-orange-200 ">Mar/2023 - Current</h3>
          </div>
          <div className="flex flex-col gap-1  w-1/3 font-light dark:text-white">
            <p>
              Development of interactive lessons using articulate storyline 360.
            </p>
            <p>Support development. Using React and Angular.</p>
          </div>
        </article>
        <article className="flex gap-2 w-full font-poppins justify-center ">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">Bilingual Customer Service Representative</h2>
            <h3 className="text-orange-200 ">Aug/2022 - Mar/2023</h3>
          </div>
          <div className="flex flex-col gap-1 h-full w-1/3 font-light dark:text-white">
            <p>
              Emails and tickets resolution of a company dedicated to the
              business flights and traveling.
            </p>
            <p>
              Contact with hotels, and airlines providers to ensure the
              requirements of the customers.
            </p>
          </div>
        </article>
        <article className="flex gap-2 h-40 w-full font-poppins justify-center ">
          <div className="flex flex-col items-end text-right w-1/3 font-bold">
            <h2 className="dark:text-white">Freelance Graphic Designer</h2>
            <h3 className="text-orange-200 ">Oct/2015 - Mar/2023</h3>
          </div>
          <div className="flex flex-col gap-1 h-40 w-1/3 font-light dark:text-white">
            <p>
              Design of printable pieces, such as books. Comunity management, and Illustrations.
            </p>
            <p>Teaching software design, and basics of design concepts.</p>
          </div>
        </article>
      </section>
    </section>
  );
}