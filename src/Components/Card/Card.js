import { Skill } from "../Data/Data";

export const Card = () => (
  <div className="z-10">
    {Skill.map((p, i) => {
      return (
        <div
          key={i}
          className="grid hp:grid-cols-1 tablet:grid-cols-2 tablet:gap-6"
        >
          <div className="flex flex-col hp:my-4">
            <p
              title={p.Framework}
              className="hp:text-lg tablet:text-xl font-medium pb-1"
            >
              {p.Framework}
            </p>
            <p title={p.DescF}>{p.DescF}</p>
          </div>
          <div className="flex flex-col hp:my-4">
            <p
              title={p.Framework2}
              className="hp:text-lg tablet:text-xl font-medium pb-1"
            >
              {p.Framework2}
            </p>
            <p title={p.DescF2}>{p.DescF2}</p>
          </div>
        </div>
      );
    })}
  </div>
);

export default Card;
