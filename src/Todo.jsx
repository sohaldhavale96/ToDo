// import React from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { toast } from 'react-toastify';
import { useState } from "react";
import { IoIosRemoveCircle } from "react-icons/io";
import './Todo.css'

function Todo() {
    
  const [item,setitem] = useState('');
  const [task,settasks] = useState([]);  
  const deleted = (e)=> {
    const newUpdated = task.filter((_,i)=>i!==e)
    settasks(newUpdated)
    toast.error('Task deleted', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
    })
  };
  const addTask = ()=>{
    const time = new Date().toLocaleTimeString();
    const date = new Date().toLocaleDateString();
    if(item.trim()!==''){
        settasks([...task,{text:item,time,date}]);
        toast.success('Task Added SuccessFully', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setitem('');
    }else{
        toast.info('Please Task Add', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
  }
  const clearTask = ()=>{
    if(task.length!==0){
        settasks([])
        toast.success('Task Removed successfully!', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }else{
        toast.error('List is empty', {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
  }

  return (
    <div className="h-screen w-full bg-[#132239] grid grid-cols-[500px_1fr]">
        <div className="h-screen bg-[#0F172A] flex flex-col justify-center items-center">
            <h1 className="text-[3em] font-bold text-[#E2E8F0]">To-Do List</h1>
            <input type="text" className="border border-[#353F4F] text-zinc-400 outline-none bg-[#1E293B] py-2 w-[60%] text-center rounded-md" placeholder="Enter task" value={item} onChange={(e)=>setitem(e.target.value)} />
            <button onClick={addTask} className="border border-[#38BDF8] bg-[#0E70A1] px-5 py-1 rounded-md mt-5 flex items-center justify-center text-[#0F172A] gap-3 ">Add<IoIosAddCircle className="text-[#0F172A]" /></button>
            <button onClick={clearTask} className="border border-[#f85238] bg-[#a10e0e] px-5 py-1 rounded-md mt-5 flex items-center justify-center text-[#f48282] gap-3 ">Clear All Task<IoIosRemoveCircle className="text-[#ff8533]" /></button>
        </div>
        <div className="list flex flex-col gap-2 p-3 overflow-scroll">
            <h3 className="text-white font-bold text-[3em] text-center sticky top-0 left-0">Lists</h3>
            {/* List */}
            {
                task.map((t,i)=>(
                    <>
                        <div key={i} className="w-full bg-[#222B3C] rounded-md border border-[#293548] flex justify-between items-center px-2 py-2">
                            <p className="text-[#7DD3FC]">{t.text}</p>
                            <div className=" flex justify-center items-center gap-4">
                                <div className="flex gap-5 text-[0.8em] text-[#F472B6]">
                                    <p>{t.time}</p>
                                    <p>{t.date}</p>
                                </div>
                                <button onClick={()=>deleted(i)}>
                                    <MdDelete className="text-[#94A3B8]" />
                                </button>
                            </div>
                        </div>
                    </>
                ))
            }
            {/*  */}
        </div>
    </div>
  )
}

export default Todo