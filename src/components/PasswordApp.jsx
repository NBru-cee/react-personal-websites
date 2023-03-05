import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
const PasswordApp = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <>
            <section>
                <div className="w-4/5 mx-auto relative mt-52">
                    <div className="w-full">
                        <input
                            type={!open ? "password" : "text"}
                            placeholder="Password"
                            className="w-full h-14 rounded-lg "
                        />
                    </div>
                    <div className="text-2xl absolute top-4 right-5">
                        {!open ? (
                            <FaEyeSlash onClick={toggle} />
                        ) : (
                            <FaEye onClick={toggle} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PasswordApp;
