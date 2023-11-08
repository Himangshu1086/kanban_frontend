import baseUrl from "@/baseUrl";
import BoardColumn from "@/components/boardColumn";
import { useRouter } from "next/router";
import { useState } from "react";


export default function Board({board,columns}) {

  const [columnName , setColumnName] = useState();
  
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/column/addcolumn`,{
      method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        name:columnName, board:board._id
       }) 
    })
    const response = await res.json();
    if(response.error)
      console.log(response.error)
    else 
       alert("succesfully added")
    if (res.status < 300) {
        refreshData();
      }
  }

  return (
    <main>
        <div className="flex w-96 m-auto justify-center items-center p-10 border-b-2 border-blue-400"><h1 className="text-center text-3xl font-bold text-blue-400">{board.name}</h1></div>
        <div className='flex w-3/5 justify-center m-auto mt-5'>
        <input onChange={(e)=>{setColumnName(e.target.value)}} className='p-1 text-black text-md rounded-md w-3/5 mr-2' type='text' placeholder='column name...'/>
        <button onClick={handleSubmit} className='p-1 text-black bg-blue-400 text-md rounded-md w-1/5'>Add</button>
      </div>
        <div className="flex flex-wrap justify-center items-start mt-5">
          {
            columns.map(column => {
              return <>
              <BoardColumn data = {column}/>
              </>
            })
          }
        </div>
    </main>
  )
}




export async function getServerSideProps({params:{id}}) {

  const boardResponse = await fetch(`${baseUrl}/api/board/getboard/${id}`);
  const columnResponse = await fetch(`${baseUrl}/api/column/getcolumn/${id}`)
  const data = await boardResponse.json();
  const columnData = await columnResponse.json();

  return {
    props: {
        board :data.board,
        columns : columnData.Columns
      }
  }
}