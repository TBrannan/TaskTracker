import Task from "./Task";

const Tasks = ({ task_obj, onDelete, onToggle }) => {
  return (
    <>
      {task_obj.map((task_iter) => (
        <Task
          key={task_iter.id}
          task={task_iter}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
