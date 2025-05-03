
import AboutMe from "./about/page";
import Banner from "./banner/page";
import Contact from "./contacts/page";
import EducationPage from "./education/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div>
   <Banner></Banner>
   <AboutMe></AboutMe>
   <Contact></Contact>
   <EducationPage></EducationPage>
   <Skills></Skills>
    </div>
  );
}
