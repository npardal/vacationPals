import styles from "../style";
import { discount, robot } from "../assets";
import WordSlider from "./Worslider";



const Hero = () => {
  const isSectionActive = true;
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
          <p className={`${styles.paragraph} text-black ml-2`} style={{ fontFamily: "Avenir-Light" }}>
            <span className="text-black" style={{ fontFamily: "Avenir-Black" }} >20k</span> resort besties formed
            {" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1  ss:text-[65px] text-[60px] text-black ss:leading-[100.8px] leading-[75px]" style={{ fontFamily: "Avenir-Black" }} >
            Find your next <br className="sm:block hidden" />{" "}
            {/*<span className="text-gradient ss:text-[87px] text-[52px]"> 
              Lorem Ipsum 
              
  </span>{" "}*/}

            <WordSlider
  words={["best friend", "vacay fling", "ride or die", "cruise friend", "friend group"]}
  duration={2000}
  textStyle={{
    fontFamily: "Avenir-Black",
    color: "#5ECDC7",
    fontSize: '80px',
    fontWeight: 'bold',
    // add any other custom text styles here
  }}
/>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0"></div>
        </div>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ fontFamily: "Avenir-Medium" }}>
          Connect with other teens going to your resort at the same time as you, and make the most out of your vacation with your newfound besties!!
        </p>

        <button
          type="button"
          class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-light rounded-2xl p-3 pr-10 pl-10 mr-5 mb-5 mt-5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 text-xl" style={{ fontFamily: "Avenir-Medium"}}
        >
          Sign up today!
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
