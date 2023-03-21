const TodoComputed = ({ computedItemsLeft, clearCompleted }) => {
    return (
        <section className="flex justify-between rounded-b-md bg-white py-4 px-4">
            <span className="text-gray-300">
                {computedItemsLeft} items left
            </span>
            <button onClick={clearCompleted} className="text-gray-300">
                Clear Completed
            </button>
        </section>
    );
};

export default TodoComputed;
