import { motion } from "framer-motion";
import { SelectedPage } from "../../shared/types";
import ContactUsPageGraphic from "../../assets/images/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contactus = ({ setSelectedPage }: Props) => {
  return (
    <div id="contactus" className="mx-auto w-5/6 pt-24 pb-32 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="md:w-3/5"
        >
          <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
            <span className="text-primary-500">JOIN NOW </span>
            TO GET IN SHAPE
          </h1>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.section>

        {/* FORM AND IMG */}
        <section className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-10 basis-3/5 md:mt-0"
          >
            <form target="_blank">
              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                type="text"
                placeholder="NAME"
              />

              <input
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white my-5"
                type="email"
                placeholder="EMAIL"
              />

              <textarea
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white"
                rows={4}
                cols={50}
                placeholder="MESSAGE"
              />

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-16 py-2 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative mt-16 basis-2/5 md:mt-0"
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="w-full" src={ContactUsPageGraphic} />
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
};

export default Contactus;
