import DefaultLayout from "../../layout/Default";
import LadyBagImage from "../../assets/images/home-page_first-img.png"

const Home = () => {
    return (
        <DefaultLayout>
            <div>
                <h1>This month’s finest</h1>
                <img src={LadyBagImage} alt="" />
            </div>
        </DefaultLayout>
    );
}
 
export default Home;