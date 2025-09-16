import type { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-[url(https://fpt.com/Images/images/tin-tuc-2021/toa-nha/gen.jpg)] bg-cover bg-center w-screen h-screen flex justify-center items-center min-h-screen">
            {children}
        </main>
    );
};

export default AuthLayout;