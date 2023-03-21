import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    {
        id: 1,
        title: "Go to the gym",
        completed: false,
    },
    {
        id: 2,
        title: "Complete bluuweb course",
        completed: true,
    },
    {
        id: 3,
        title: "Take a shower",
        completed: false,
    },
    {
        id: 4,
        title: "Eat protein",
        completed: false,
    },
    {
        id: 5,
        title: "Study English",
        completed: false,
    },
];

function App() {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };

        //No olvidar que acá debemos enviar un ARRAY. Por lo que lo que enviamos al SetTodo debe estar entre  []
        setTodos([...todos, newTodo]);
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-200 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header></Header>

            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo}></TodoCreate>

                {/* TodoList (TodoItem) TodoUpdate y TodoDelete */}
                <TodoList
                    todos={todos}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                ></TodoList>

                {/* TodoComputed (o calculadas) */}
                <TodoComputed></TodoComputed>

                {/* TodoFilter */}
                <TodoFilter></TodoFilter>
            </main>

            <p className="mt-8 text-center text-gray-400">
                Drag and drop to reorder list
            </p>
        </div>
    );
}

export default App;
