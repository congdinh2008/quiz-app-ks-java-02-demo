import type { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Sidebar from "../shared/Sidebar";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header/>
            <main>
                <Sidebar />
                {children}
            </main>
            <Footer />
        </>
    );
};

export default CustomerLayout;