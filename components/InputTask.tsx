import { CirclePlus } from "lucide";

const InputTask = () => {
  return (
    <section className="bg-gray-500">
      <h1>Input new Task</h1>
      <form action="" className="flex flex-col">
        <label htmlFor="task">Task: </label>
        <input type="text" id="task" name="task" placeholder="Type a task..." />
        <br />
        <button type="submit">
            <span>Add task</span>
          <CirclePlus />
        </button>
      </form>
    </section>
  );
};

export default InputTask;
