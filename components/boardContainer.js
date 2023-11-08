import baseUrl from "@/baseUrl";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function BoardContainer({ board }) {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [editClick, setEditClick] = useState(false);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/board/updateboard`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: board._id,
        name: name,
        description: description,
      }),
    });
    const response = await res.json();
    if (response.error) console.log(response.error);
    else alert("succesfully edited");
    if (res.status < 300) {
      refreshData();
      setEditClick(false);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/api/board/deleteboard/${board._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await res.json();
    if (response.error) console.log(response.error);
    else alert("succesfully deleted");
    if (res.status < 300) {
      refreshData();
    }
  };

  return (
    <>
      <div className="flex flex-col bg-blue-300 rounded-md shadow-md shadow-gray-700 p-2 w-96 m-2">
        {editClick ? (
          <>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="p-3 text-black text-md rounded-md w-3/5 m-2"
              type="text"
              placeholder="board name..."
            />
            <input
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="p-3 text-black text-md rounded-md w-80 m-2 "
              type="text"
              placeholder="description..."
            />
            <button
              onClick={handleEdit}
              className="bg-gray-700 m-2 text-white text-sm p-1 w-14 rounded-sm font-extralight"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setEditClick(false);
              }}
              className="bg-red-600 m-2 text-white text-sm p-1 w-14 rounded-sm font-extralight"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <Link href={`/board/${board._id}`}>
              <div className="flex flex-wrap w-full ml-2 mt-2 mb-3 text-black font-semibold text-2xl">
                <h1>{board.name}</h1>
              </div>
              <div className="flex flex-wrap mb-2 w-full h-24 pl-5">
                <p className="text-justify text-md italic  font-light text-gray-800">
                  {" "}
                  - {board.description}
                </p>
              </div>
            </Link>
            <div className="flex mt-2">
              <button
                onClick={() => {
                  setEditClick(true);
                }}
                className="bg-gray-700 mr-2 text-white text-sm p-1 w-14 rounded-sm font-extralight"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-400 text-black text-sm p-1 w-14 rounded-sm font-extralight"
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
