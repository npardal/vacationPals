import styles from "../style";
import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-white  border-gray-100 border rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} text-black ml-2`}>
            <span className="text-black text-bold font-bold">20k</span> Lorem Ipsum Lorem
             Formed{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[52px] text-black ss:leading-[100.8px] leading-[75px]">
            Find your next <br className="sm:block hidden" />{" "}
            <span className="text-gradient ss:text-[87px] text-[52px]">
              Lorem Ipsum 
            </span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team works on connecting you with the next best thing, which
          involves something and this is actually just gonna be filler. Need to
          make itlonger.
        </p>

        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-light rounded-2xl p-5 pr-10 pl-10 mr-5 mb-5 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-xl"
        >
          Create an Account
        </button>
        <img
          src="/reviews.png"
          alt="discount"
          className="w-[250px] h-[70px] mt-10"
        />
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0  relative`}>
        <img src={robot} alt="billing" className=" relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
    </section>
  );
};

export default Hero;
