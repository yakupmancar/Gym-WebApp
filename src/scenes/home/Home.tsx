import { SelectedPage } from "../../shared/types";
import HomePageText from "../../assets/images/HomePageText.png";
import HomePageGraphic from "../../assets/images/HomePageGraphic.png";
import SponsorRedBull from "../../assets/images/SponsorRedBull.png";
import SponsorForbes from "../../assets/images/SponsorForbes.png";
import SponsorFortune from "../../assets/images/SponsorFortune.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMedium = useMediaQuery("(min-width: 1060px");

  return (
    <div id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <main className="z-10 mt-32 md:basis-3/5 ">
          <motion.div
            className="md:-mt20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-16 before:-left-16 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} />
              </div>
            </div>

            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-8 md:justify-start"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink>
          </motion.div>
        </main>

        {/*IMAGE SECTION */}
        <section className="flex justify-center md:ml-40 md:mt-16 mt-8 md:justify-items-end md:w-[470px]">
          <img src={HomePageGraphic} />
        </section>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMedium && (
        <div className="w-full bg-primary-100 py-9 mt-5">
          <div className="flex justify-evenly items-center gap-10">
            <img src={SponsorRedBull} />
            <img src={SponsorForbes} />
            <img src={SponsorFortune} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
