import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Sidebar from "../comp/Sidebar";
import MainContent from "../comp/MainContent";
import Footer from "../comp/Footer";






const page = async () => {
    
    const session = await getServerSession(authOptions);
    console.log(session);
    return (
        <div className="flex min-h-screen">
      
              <Sidebar />
              <div className="min-h-screen flex flex-col">
                
                <MainContent />
                <Footer />
              </div>
        </div>
    )
};
 export default page;