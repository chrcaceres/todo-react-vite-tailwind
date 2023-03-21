import IconMoon from "./icons/IconMoon";

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.35em] text-white">
                    Todo
                </h1>
                <button>
                    <IconMoon className="fill-red-400"></IconMoon>
                </button>
            </div>
        </header>
    );
};

export default Header;
