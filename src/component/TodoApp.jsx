import { useEffect, useRef, useState } from "react";
import styles from '../styles/TodoApp.module.css';


const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => inputRef?.current.focus(), []); // Aut-focus to input.
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleNewTask = (e) => {
    e.preventDefault();

    const cleanTask = newTask.trim();
    if(!cleanTask) {
      setError("Please enter a task.");
      return;
    }
    if(tasks.includes(cleanTask)){
      setError(`You already entered "${cleanTask}".`);
      return;
    }

    setTasks(prev => [...prev, cleanTask]);
    setNewTask("");
  }

  const deleteTask = (index) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  }
  
  const moveTaskUp = (index) => {
    if(index == 0) return;
    setTasks(prev => {
      const updatedTasks = [...prev];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      return updatedTasks;
    });
  }

  const moveTaskDown = (index) => {
    if(index == tasks.length - 1) return;
    setTasks(prev => {
      const updatedTasks = [...prev];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      return updatedTasks;
    });
  }
  return (
  <>
    <h1 className={styles.title}>My List</h1>

    <form onSubmit={handleNewTask} className={styles.newTaskForm}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your task"
        value={newTask}
        onChange={e => {
          setNewTask(e.target.value)
          setError("")
        }}
        className={styles.formInput}
      />
      <button type="submit" className={styles.formBtn}>
        Add
      </button>
    </form>

    {error && <p className={styles.errorDisplay}>{error}</p>}

    {tasks.length > 0 && (
      <ul className={styles.listWrapper}>
        {tasks.map((task, index) => (
          <li key={index}>
            <p className={styles.task}>{task}</p>
            <div className={styles.controlsWrapper}>
              <button
                onClick={() => deleteTask(index)}
                className={styles.deleteBtn}
              >
                Delete
              </button>
              
              {/* wrap the two buttons in a fragment (or a div) */}
              {tasks.length > 1 && (
                <>
                  <button
                    onClick={() => moveTaskUp(index)}
                    className={styles.moveBtns}
                  >
                    👆
                  </button>
                  <button
                    onClick={() => moveTaskDown(index)}
                    className={styles.moveBtns}
                  >
                    👇
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
      )}
  </>
);
}

export default TodoApp