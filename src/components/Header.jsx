import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initialStateDarkMode =
    localStorage.getItem("theme") === "dark" ? true : false;

const Header = () => {
    const [darkMode, setDarkMode] = useState(initialStateDarkMode);

    //Use effect es para escuchar un cambio en un state. En este caso pusimos que escuchara el state darkMode, el cual cambia al clickear la luna/sol
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-3xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.35em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun></IconSun> : <IconMoon></IconMoon>}
                </button>
            </div>
        </header>
    );
};

export default Header;
