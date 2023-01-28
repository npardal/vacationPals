import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
{
  /* trying this out */
}
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        It doesn't get any <br className="sm:block hidden" /> better than this.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        It literally doesn't get better than this. Like this is just peak -
        comepletely add more filler content in here lol. This should just be a
        small feature.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
