/* eslint-disable @typescript-eslint/no-explicit-any */
import Navbar from "@/components/shared/Navbar";


const layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default layout;