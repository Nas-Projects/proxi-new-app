"use client";

import { useState } from 'react';
import axios from 'axios';
import { PlusIcon } from '@heroicons/react/20/solid';
import { BlueCheck } from '@/components/ProfileComponent/BlueCheck';


import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
export function CardWithForm() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
               
                  <SelectItem value="sveltekit">SvelteKit </SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}

// import { Button2 } from "@/components/Button";
// import Error from "@/components/Error";
// import SubmitButton from "@/components/SubmitButton";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import useMount from "@/hooks/useMount";
// import { createTodo } from "@/lib/actions";
// import { CreateTodo } from "@/lib/schemas";

// import { zodResolver } from "@hookform/resolvers/zod";

// import { usePathname, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { toast } from "sonner";
// import { z } from "zod";


const TaskForm = ({ userId, showTodoForm, setShowTodoForm  }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [tasks, setTasks] = useState([{ task: '' }]);

  const handleTaskChange = (index, value) => {
    const newTasks = [...tasks];
    newTasks[index].task = value;
    setTasks(newTasks);
  };

  const addTaskField = () => {
    setTasks([...tasks, { task: '' }]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/todos', {
        title,
        description,
        createdBy: userId,
        assignedTo: assignedTo.split(',').map(email => email.trim()), // Handle multiple emails
        tasks: tasks.map(task => ({ 
          title: task.task, 
          description, // If each task can have its own description, update accordingly
          status: 'not_started', // Default status for new tasks
        })),
      });
  
      if (response.status === 200) {
        console.log('Todo list added:', response.data);
        // Clear form fields
        setTitle('');
        setDescription('');
        setAssignedTo('');
        setTasks([{ task: '' }]);
      } else {
        console.error('Failed to add todo list');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (<React.Fragment><CardWithForm/>
    <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Todo List</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Todo Title</label>
          <input
            type="text"
            placeholder="Todo Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          <BlueCheck/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Assigned Emails (comma separated)</label>
          <input
            type="text"
            placeholder="Assigned Emails"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Tasks</label>
          {tasks.map((task, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                placeholder={`Task ${index + 1}`}
                value={task.task}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addTaskField}
            className="mt-2 flex items-center text-indigo-600 hover:text-indigo-900"
          >
            <PlusIcon className="h-5 w-5" />
            <span className="ml-1">Add another task</span>
          </button>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div></React.Fragment>
  );
};

export default TaskForm;




// import { useState } from 'react';
// import axios from 'axios';

// const TaskForm = ({userId}) => {

// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');
// const [assignedTo, setAssignedTo] = useState('');

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   try {
//     const response = await fetch('/api/tasks', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         title,
//         description,
//         createdBy: userId,
//         assignedTo: assignedTo.split(',').map(email => email.trim()), // Handle multiple emails
//       }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log('Task added:', data);
//       // Clear form fields
//       setTitle('');
//       setDescription('');
//       setAssignedTo('');
//       setCreator('');
//     } else {
//       console.error('Failed to add task');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// return (
//   <form onSubmit={handleSubmit}>
//     <input
//       type="text"
//       placeholder="Task Title"
//       value={title}
//       onChange={(e) => setTitle(e.target.value)}
//       required
//     />
//     <textarea
//       placeholder="Task Description"
//       value={description}
//       onChange={(e) => setDescription(e.target.value)}
//     />
//     <input
//       type="text"
//       placeholder="Assigned Emails (comma separated)"
//       value={assignedTo}
//       onChange={(e) => setAssignedTo(e.target.value)}
//       required
//     />
//     <button type="submit">Add Task</button>
//   </form>
// );

// };

// export default TaskForm;