const NavDesktop = () => {
    return (
        <nav
            className="flex justify-between p-10 items-center bg-black text-white relative shadow-sm font-mono w-full"
            role="navigation"
        >
            <a href="/" className="pl-8">
                Logo
            </a>
            <div className="md:block md:pr-4">
                <a className="p-4" href="/">
                    Home
                </a>
                <a className="p-4" href="/about">
                    About
                </a>
                <a className="p-4" href="/contact">
                    Contact
                </a>
            </div>
        </nav>
    );
};

export default NavDesktop
