"use client";
import { PlusSquare } from "lucide-react";
import { useState } from "react";
import { Task } from "@/types/Tasktype";
const dummyData: Task[] = [
  {
    id: 1,
    title: "learn TypeScript",
    checked: false,
  },
  {
    id: 2,
    title: "learn DOCKER",
    checked: false,
  },
  {
    id: 3,
    title: "Create TS projects",
    checked: false,
  },

];
export default function InputTask() {
  const [tasks, setTasks] = useState<>([]);
  return (
    <section className="flex flex-col items-center">
      <h1>Input new Task</h1>
      <form action="" className="flex gap-2 items-center">
        <div className="flex flex-col">
          <label className="sr-only" htmlFor="task">
            Task:{" "}
          </label>
          <input className="h-10 w-96 rounded-md p-2 outline-none focus:outline-purple-500" type="text" id="task" name="task" placeholder="Type a task..." />
        </div>
        <button className="bg-purple-500 flex gap-2 items-center rounded-md w-28 h-10 p-1" type="submit">
          <span className="">Add task</span>
          <PlusSquare />
        </button>
      </form>
    </section>
  );
}
