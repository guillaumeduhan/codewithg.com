"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dayjs from 'dayjs';
import { Circle, Trash2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'react-use';
import { v4 as uuid } from 'uuid';

interface Task {
  id: string;
  title: string;
  done: boolean;
  created_at: string;
  finished_at: string | null;
}

interface GroupedTasks {
  [key: string]: Task[];
}

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<any>('tasks', []);
  const [newTask, setNewTask] = useState<string>('');
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const addTask = (): void => {
    if (newTask) {
      const task: Task = {
        id: uuid(),
        title: newTask.trim(),
        done: false,
        created_at: dayjs().toISOString(),
        finished_at: null,
      };
      setTasks(() => [...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: string): void => {
    setTasks(() => tasks.map((task: Task) =>
      task.id === id ? {
        ...task,
        done: !task.done,
        finished_at: !task.done ? dayjs().toISOString() : null,
      } : task
    ));
  };

  const removeTask = (id: string): void => {
    setTasks(() => tasks.filter((task: Task) => task.id !== id));
  };

  const groupedTasks: GroupedTasks = tasks.reduce((acc: GroupedTasks, task: Task) => {
    const date = dayjs(task.created_at).format('dddd D MMMM');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(task);
    return acc;
  }, {});

  const totalTasks: number = tasks.length;
  const averageTasksPerDay: number = totalTasks / (Object.keys(groupedTasks).length || 1);
  const averageTimeSpent: number = tasks.reduce((acc: number, task: Task) => {
    if (task.done && task.finished_at) {
      return acc + dayjs(task.finished_at).diff(task.created_at, 'minute');
    }
    return acc;
  }, 0) / (tasks.filter((task: any) => task.done).length || 1);

  if (!hasMounted) {
    return null; // Or a loader if you want to show one
  }

  return (
    <div className="max-w-[800px] grid gap-4">
      <header className="border border-neutral-200 dark:border-slate-800 rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 bg-neutral-50 dark:bg-transparent px-3 py-2">
          <div>
            <p className="text-2xl">{totalTasks}</p>
            <h2>Tasks</h2>
          </div>
          <div>
            <p className="text-2xl">{averageTasksPerDay.toFixed(2)}</p>
            <h2>Average per Day</h2>
          </div>
          <div>
            <p className="text-2xl">{averageTimeSpent.toFixed(0)} min</p>
            <h2>Average time</h2>
          </div>
        </div>
        <div className="flex gap-1 px-3 pb-2">
          <Input
            type="text"
            value={newTask}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <div>
            <Button onClick={addTask}>Save new task</Button>
          </div>
        </div>
      </header>

      <div className="grid gap-1 bg-neutral-50 dark:bg-transparent border border-neutral-200 dark:border-slate-800 rounded-xl overflow-hidden">
        {Object.entries(groupedTasks).map(([date, dateTasks]) => (
          <div key={date} className="grid gap-1">
            <div className="px-3 py-2 dark:bg-slate-800">{date} ({dateTasks.length})</div>
            <div className="grid gap-2 bg-white dark:bg-transparent py-2">
              {dateTasks.map((task: Task) => (
                <div key={task.id} className="flex items-center cursor-pointer transition group px-3 py-1 dark:hover:bg-slate-800">
                  <div onClick={() => toggleTask(task.id)} className="w-full flex gap-2">
                    {!task.done && <Circle className="text-neutral-300" />}
                    {task.done && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.15-2.15q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7L9.9 15.9q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275zM12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22" /></svg>}
                    <div>{task.title}</div>
                  </div>
                  <div onClick={() => removeTask(task.id)} className="hidden group-hover:flex">
                    <Trash2 className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;