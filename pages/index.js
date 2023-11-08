import BoardContainer from '@/components/boardContainer';
import baseUrl from '../baseUrl';
import Image from 'next/image'
import { useState } from 'react';
import { useRouter } from 'next/router';


export default function Home({boards}) {
  const router = useRouter();
  const [name ,setName] = useState("");
  const [description, setDescription] = useState("");

  const refreshData = () => {
    router.replace(router.asPath);
  }


  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/board/addboard`,{
      method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        name:name, description:description
       }) 
    })
    const response = await res.json();
    if(response.error)
      console.log(response.error)
    if (res.status < 300) {
        refreshData();
      }
  }

  return (
    <main className='m-10'>
      <div className='flex w-full justify-center items-center mb-4 mt-4 border-b-2 border-blue-400'>
        <h1 className='text-3xl p-5 text-blue-400 font-bold'>Boards</h1>
      </div>
      <div className='flex w-full justify-between mb-5'>
        <input onChange={(e)=>{setName(e.target.value)}} className='p-3 text-black text-md rounded-md w-3/5 mr-2' type='text' placeholder='board name...'/>
        <input onChange={(e)=>{setDescription(e.target.value)}} className='p-3 text-black text-md rounded-md w-full mr-2' type='text' placeholder='description...'/>
        <button onClick={handleSubmit} className='p-3 text-black bg-blue-400 text-md rounded-md w-1/5'>Add</button>
      </div>
      <div className='flex flex-wrap border-2 border-gray-900 rounded-md p-5 justify-start'>
        {
          boards.boards.map(board=>{
            return <>
            <BoardContainer board={board}/>
            </>
          })
        }
      </div>
    </main>
  )
}


export async function getServerSideProps() {

  const res = await fetch(`${baseUrl}/api/board/getboard`);
  const data = await res.json();
  return {
    props: {
        boards :data 
      }
  }
}