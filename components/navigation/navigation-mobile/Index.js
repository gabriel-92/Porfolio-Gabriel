import { MenuToggle } from "./MenuToggle/Index";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "./useDimensions";

const sidebar = {
    open: (height = 1500) => ({
        clipPath: `circle(${height * 0.5 + 200}px at 40px 140px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(20px at 148px 38px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};
const NavMobile = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <AnimatePresence>
            < motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
                className="static p-10 top-0 bg-black p-4 right-0 sm:hidden  bottom-0   "
            >
                <motion.a href="/" className="pl-8 text-white">
                    Logo
                </motion.a>
                <motion.ul variants={sidebar} className="absolute static top-0 right-0 bottom-0 w-44  text-black bg-white   " >
                    <motion.div className=" relative shadow-sm p-10 " >
                        <motion.li className="text-center p-4  " href="/">
                            Home
                        </motion.li>
                        <motion.li className="text-center p-4" href="/about">
                            About
                        </motion.li>
                        <motion.li className="text-center p-4" href="/contact">
                            Contact
                        </motion.li>
                    </motion.div>
                </motion.ul>
                <motion.div className=" cursor-pointer absolute top-7 right-4  ">
                    <MenuToggle toggle={() => toggleOpen()} />
                </motion.div>
            </motion.nav >
        </AnimatePresence >
    );
};

export default NavMobile;
