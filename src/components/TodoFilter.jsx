const TodoFilter = () => {
    return (
        <section className="container mx-auto mt-8">
            <div className="flex justify-center gap-4 rounded-md bg-white py-4 px-4 font-semibold text-gray-500">
                <button className="text-blue-700">All</button>
                <button className="hover:text-blue-700">Active</button>
                <button className="hover:text-blue-700">Completed</button>
            </div>
        </section>
    );
};

export default TodoFilter;
