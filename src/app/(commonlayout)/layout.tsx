/* eslint-disable @typescript-eslint/no-explicit-any */
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


const layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer></Footer>
    </main>
  );
};

export default layout;