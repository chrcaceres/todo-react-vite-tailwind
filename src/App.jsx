import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

function App() {
    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <header className="container mx-auto px-4 pt-8">
                <div className="flex justify-between">
                    <h1 className="text-3xl font-semibold uppercase tracking-[0.35em] text-white">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-400"></MoonIcon>
                    </button>
                </div>
                <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white py-4 px-4">
                    <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                    <input
                        type="text"
                        placeholder="Create a new todo"
                        className=" w-full text-gray-400 outline-none"
                    ></input>
                </form>
            </header>

            <main className="container mx-auto mt-8 px-4">
                <div className="rounded-md bg-white">
                    <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow font-medium  text-gray-500">
                            Complete JS course
                        </p>
                        <button className="flex-none">
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-300 py-4 px-4">
                        <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                        <p className="flex-grow font-medium text-gray-500">
                            Complete JS course
                        </p>
                        <button className="flex-none">
                            <CrossIcon></CrossIcon>
                        </button>
                    </article>
                    <section className="flex justify-between py-4 px-4">
                        <span className="text-gray-300">5 items left</span>
                        <button className="text-gray-300">
                            Clear Completed
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="flex justify-center gap-4 rounded-md bg-white py-4 px-4 font-semibold text-gray-500">
                    <button className="text-blue-700">All</button>
                    <button className="hover:text-blue-700">Active</button>
                    <button className="hover:text-blue-700">Completed</button>
                </div>
            </section>

            <p className="mt-8 text-center text-gray-400">
                Drag and drop to reorder list
            </p>
        </div>
    );
}

export default App;
