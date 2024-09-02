
import Sidebar from "../comp/Sidebar";
import MainContent from "../comp/MainContent";
import Footer from "../comp/Footer";
import Header from "../comp/Header";







const page = async () => {
    
    
    return (
        <div className="flex min-h-screen">
      
              <Sidebar />
              <div className="min-h-screen flex flex-col">
                <Header/>
                <MainContent />
                <Footer />
              </div>
        </div>
    )
};
 export default page;