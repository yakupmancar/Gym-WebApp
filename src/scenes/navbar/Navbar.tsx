import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/images/Logo.png";
import Link from "./Link";
import { SelectedPage } from "../../shared/types";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  isTop: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTop, selectedPage, setSelectedPage }: Props) => {
  const [isToggle, setIsToggle] = useState<boolean>(false);
  const isAboveMedium = useMediaQuery("(min-width: 1060px)");
  const navbarBg = isTop ? "" : "bg-primary-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navbarBg} flex items-center fixed top-0 z-50 w-full py-6`}
      >
        <div className="flex items-center mx-auto w-5/6">
          <div className="flex items-center justify-between w-full gap-16">
            <img src={Logo} />

            {isAboveMedium ? (
              <div className="flex items-center justify-between w-full">
                <section className="flex items-center gap-8 text-sm">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </section>
                <section className="flex items-center justify-between gap-8">
                  <span className="cursor-pointer">Sign In</span>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </section>
              </div>
            ) : (
              <button className=" bg-secondary-500 rounded-full p-2">
                <Bars3Icon
                  className="h-6 w-6 text-white"
                  onClick={() => setIsToggle(!isToggle)}
                />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBIL MENU */}
      {!isAboveMedium && isToggle && (
        <div className="fixed right-0 bottom-0 z-50 h-full w-[200px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsToggle(!isToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] text-xl flex flex-col gap-10">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
