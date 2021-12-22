import { Experiences } from "../Data/Data";

export const Experience = () => (
  <div className="z-10">
    <p className="hp:text-xl tablet:text-2xl hp:mx-8 tablet:mx-20 hp:mt-16 hp:mb-4 font-semibold uppercase">
      Experience
    </p>
    {Experiences.map((p, i) => {
      return (
        <div key={i} className="grid hp:grid-cols-1 hp:mx-8 tablet:mx-20">
          <div className="flex flex-col hp:my-4">
            <p
              title={p.nameExp}
              className="hp:text-lg tablet:text-xl font-medium pb-1"
            >
              {p.nameExp}
            </p>
            <p title={p.DescExp} className="hp:text-sm tablet:text-lg">
              {p.DescExp}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Experience;
