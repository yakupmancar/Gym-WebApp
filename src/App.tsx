import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import Benetifs from "./scenes/benefits/Benetifs";
import Ourclasses from "./scenes/ourClasses/Ourclasses";
import Contactus from "./scenes/contactus/Contactus";
import Footer from "./scenes/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTop, setIsTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTop={isTop}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />

      <Benetifs setSelectedPage={setSelectedPage} />

      <Ourclasses setSelectedPage={setSelectedPage} />

      <Contactus setSelectedPage={setSelectedPage} />

      <Footer />
    </div>
  );
}

export default App;
