import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const MainLayout = ({ children }) => {
  return (
    <div id="main-layout">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
