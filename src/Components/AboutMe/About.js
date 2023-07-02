import Image from "next/image";
import Profile from "../../../public/Image/logo.jpeg";
import { DataProfile } from "../Data/Data";
const About = () => (
  <div className="z-10" id="about">
    {DataProfile.map((p, i) => {
      return (
        <div className="flex flex-col tablet:mt-20 hp:mt-10">
          <div className="mx-auto tablet:pb-14 hp:pb-10">
            <Image
              src={Profile}
              className="rounded-full"
              height="200"
              width="200"
            />
          </div>
          <div className="hp:mx-auto" key={i}>
            <p
              className="hp:text-2xl tablet:text-3xl hp:text-center hp:px-4 tablet:pb-4 font-extrabold uppercase"
              title={p.name}
            >
              {p.name}
            </p>
          </div>
          <div className="hp:mx-8 tablet:mx-20 hp:mt-6 flex hp:flex-col">
            <p className="hp:text-xl tablet:text-2xl hp:mb-4 font-semibold uppercase">
              About me
            </p>
            <p title={p.desc}>{p.desc}</p>
          </div>
        </div>
      );
    })}
  </div>
);
export default About;
