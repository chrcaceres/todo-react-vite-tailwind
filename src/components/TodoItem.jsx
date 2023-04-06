import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(
    ({ todo, removeTodo, updateTodo, ...props }, ref) => {
        const { id, title, completed } = todo;

        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-300 py-4 px-4"
            >
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 ${
                        completed
                            ? "grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                            : "inline-block "
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck></IconCheck>}
                </button>
                <p
                    className={`flex-grow font-medium  text-gray-500 transition-all duration-1000 dark:text-gray-300 ${
                        completed && "line-through"
                    }`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <IconCross></IconCross>
                </button>
            </article>
        );
    }
);

export default TodoItem;
