import { Card } from "../Card/Card";

export default function Skill() {
  return (
    <div className="z-10">
      <p className="hp:text-2xl hp:mx-8 tablet:mx-20 hp:mt-16 hp:mb-4 font-semibold uppercase">
        My Skill
      </p>
      <div className="hp:mx-8 tablet:mx-20 hp:mt-2">
        <Card />
      </div>
    </div>
  );
}
