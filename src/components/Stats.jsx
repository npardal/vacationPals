import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
      style={{ fontFamily: "Avenir-Light" }}
        key={stat.id}
        className={`flex-1 flex justify-start items-center flex-row m-3 text-black`}
      >
        <h4 className=" font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-black"  style={{ fontFamily: "Avenir-Black" }}>
          {stat.value}
        </h4>
        <p className=" xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3 text-black"  style={{ fontFamily: "Avenir-Black" }}>
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
