import baseUrl from "@/baseUrl";
import { useRouter } from "next/router";
import { useEffect, useState } from "react"



export default function BoardColumn({data}) {

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  console.log(data)

  const [items , setItems] = useState();
  const [loading , setLoading] = useState(true);
  const [name , setName ] = useState();
  const [description , setDescription] = useState();
  const [dueDate , setDueDate] = useState();
  const [editClick , setEditClick] = useState(false);

  const getItems = async()=>{
    const res = await fetch(`${baseUrl}/api/item/getitem/columnid/${data._id}`)
    const response = await res.json()
    console.log(response)
    setItems(response);
    setLoading(false)
  }

  useEffect( ()=>{
    getItems()
  },[])



  const handleDeleteColumn = async(e) =>{
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/column/deletecolumn/${data._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response.error) console.log(response.error);
    if (res.status < 300) {
      refreshData();
    }

  }




  const handleAddItem = async(e) =>{
    e.preventDefault();
    console.log(name,data.board , data._id , description)

    const res = await fetch(`${baseUrl}/api/item/additem`,{
      method:"POST",
       headers:{
        'Content-Type':'application/json'
       },
       body:JSON.stringify({
        name:name, dueDate: dueDate, description:description,board:data.board, column:data._id
       }) 
    })

    const response = await res.json();
    if(response.error)
      console.log(response.error)
    if (res.status < 300) {
        refreshData();
        getItems()
      }
  }


  const handleEditItem = async(e,id) =>{
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/item/updateitem`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        name: name,
        description: description,
        dueDate : dueDate
      }),
    });
    const response = await res.json();
    if (response.error) console.log(response.error);
    else alert("succesfully edited");
    if (res.status < 300) {
      getItems()
      refreshData();
      setEditClick(false);
    }
  }



  const handleDeleteItem = async(e,id)=>{
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/item/deleteitem/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response.error) console.log(response.error);
    if (res.status < 300) {
      refreshData();
      getItems()
    }
  }


  if(loading)
  return <></>

    return (
          <div style={{width:"30%"}} className="flex flex-col justify-start m-2 p-2 border-2 border-gray-800 rounded-md">
            <div className="flex justify-between p-2 border-b-2 mb-3 border-blue-400 items-center font-bold "><h1 className="text-center">{data.name}</h1>
                <button onClick={handleDeleteColumn} className="text-xs bg-red-300 font-light pl-1 pr-1 text-black">Delete</button>
            </div>
            <div>
  
              {
                items.itemData.map(item =>{
                  return(
                    <>
                    <div className="bg-gray-800 p-1 mt-2 mb-2 flex  flex-col rounded-md">

                    {
                      editClick ? 
                      <>
                      <div className="flex flex-col m-2 p-2 rounded-md bg-gray-600">
                      <input onChange={(e)=>{setName(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="text" placeholder="item name..."/>
                      <input onChange={(e)=>{setDescription(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="text" placeholder="item description..."/>
                      <input onChange={(e)=>{setDueDate(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="date" placeholder="due date..."/>
                      <button onClick={(e)=>{handleEditItem(e,item._id)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800 w-14 text-white" >Edit</button>
                    </div>
                      </>:
                     <>
                     
                     <h1 className="text-md mb-1 text-red-500 font-semibold">{item.name}</h1>
                      <p className="text-left text-xs mb-2 italic font-light text-green-300">{item.description}</p>
                      <div className="flex justify-start items-center  mt-2 mb-2">
                        <span className="text-xs mr-2 text-purple-400 font-light">due : {item.dueDate}</span>
                        <button onClick={()=>{setEditClick(true)}} className="bg-blue-300 mr-2 text-black text-xs  w-10 rounded-sm font-light">Edit</button>
                        <button onClick={(e) => {handleDeleteItem(e,item._id)}} className="bg-red-300 mr-2 text-black text-xs  w-14 rounded-sm font-light">Delete</button>
                      </div>
                     </> 
                    }

                    </div>
                    </>
                  )
                })
              }
              
            </div>
            <div className="flex flex-col mt-8 border-t-2 border-gray-800 p-1 pt-3">
              <input onChange={(e)=>{setName(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="text" placeholder="item name..."/>
              <input onChange={(e)=>{setDescription(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="text" placeholder="item description..."/>
              <input onChange={(e)=>{setDueDate(e.target.value)}} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800" type="date" placeholder="due date..."/>
              <button onClick={handleAddItem} className="text-xs p-1 m-1 font-light rounded-sm bg-transparent border-2 border-gray-800 w-14 text-white" >Add</button>
            </div>
          </div>
    )
  }
  
