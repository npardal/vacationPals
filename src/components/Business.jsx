import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-rowborder border-gray-300 shadow-md p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className=" font-semibold text-black text-[18px] leading-[23.4px] mb-1"  style={{ fontFamily: "Avenir-Black" }}>
        {title}
      </h4>
      <p className=" font-normal text-[16px] leading-[24px]"  style={{ fontFamily: "Avenir-Light" }}>
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}  style={{ fontFamily: "Avenir-Black" }}>
        So many new <br className="sm:block hidden" /> possibilities!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}  style={{ fontFamily: "Avenir-Light" }}>
        Text with so many people, and connect with people all across the globe. No more visiting mexico and hoping to make friends. Take initiative! 
      </p>

      <Button styles={`mt-10`} style={{ fontFamily: "Avenir-Light" }} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
