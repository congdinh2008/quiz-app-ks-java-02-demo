import type { ReactNode } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const CustomerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header/>
            <main className="w-4/5 mx-auto">{children}</main>
            <Footer />
        </>
    );
};

export default CustomerLayout;