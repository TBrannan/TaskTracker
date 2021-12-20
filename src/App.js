import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setshowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "hello",
      day: "december 1st",
      reminder: true,
    },
    {
      id: 2,
      text: "stinky boi",
      day: "december 2nd",
      reminder: true,
    },
    {
      id: 3,
      text: "good boi",
      day: "december 3rd",
      reminder: false,
    },
  ]);

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setshowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          task_obj={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        "Nothing to Display"
      )}
    </div>
  );
};

export default App;