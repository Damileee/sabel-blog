import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
     );
}
 
export default DefaultLayout;