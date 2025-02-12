import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Addrecipe = () => {
    const [fields, setFields] = useState([""]);
    const [image, setImage] = useState(""); // Store Base64 string
    const [name, setName] = useState("");
    const [yields, setYield] = useState("");
    const [description, setDescription] = useState("");
    const [instructions, setInstructions] = useState("");
    const [notes, setNotes] = useState("");
    const [time, setTime] = useState(""); 
    const [imageUrl, setImageUrl] = useState("");
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); 
    const userId = user?.id;
    const [currentUserName, setCurrentUserName]=useState("");
    const [bio, setBio] = useState("");
    const navigate=useNavigate();
    useEffect(() => {
        if (!userId) return;
        const currentUser = async () => {
            try {
                const response = await axios.post(
                    "http://localhost:3000/get-profile",
                    { userId },
                    { headers: { Authorization: `Bearer ${token}` } }
                );
                setBio(response.data.user.bio);
                setCurrentUserName(response.data.user.name);
            } catch (error) {
                console.error("Failed to fetch profile:", error);
            }
        };
        currentUser();
    }, [userId, token]);
 

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file); // Store file object instead of Base64
        }
    };
    const AddRecipe = async () => {
        try {
            const formData = new FormData();
            formData.append("image", image); // Append the image file
            formData.append("name", name);
            formData.append("description", description);
            formData.append("ingridients", JSON.stringify(fields)); // Convert array to string
            formData.append("notes", notes);
            formData.append("time", time);
            formData.append("yield", yields);
            formData.append("instructions", instructions);
            formData.append("uploadedBy", currentUserName);
            formData.append("uploadedByBio", bio);
    
            const response = await axios.post(
                "http://localhost:3000/add-recipe",
                formData, // ✅ Send FormData
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "multipart/form-data", // ✅ Required for file upload
                    },
                }
            );
            console.log(response.data);
            if (response.data.imageUrl) {
                setImageUrl(`http://localhost:3000${response.data.imageUrl}`);
            }
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
            alert("Please login to add recipe!");
        }
    };
    

    const addField = () => {
        if (fields.length === 0 || fields[fields.length - 1].trim() !== "") {
            setFields([...fields, ""]);
        }
    };

    const updateField = (index, value) => {
        const newFields = [...fields];
        newFields[index] = value;
        setFields(newFields);
    };

    return (
        <div className="add-recipe bg-cyan-50 w-full h-full p-4 flex flex-col items-center">
            <div className="content bg-white w-[88vw] mx-auto max-h-[85vh] p-4 rounded-2xl shadow-2xl flex flex-col gap-8 overflow-y-auto">
                <input type="text" placeholder="Title" className="text-2xl font-bold border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 w-fit" onChange={(e) => setName(e.target.value)} />
                <textarea className="border-b-2 border-gray-200 focus:outline-none w-[50%] text-xl h-50" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
                <input type="text" placeholder="Total Time" className="text-xl font-bold border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 w-fit" onChange={(e) => setTime(e.target.value)} />
                <input type="text" placeholder="Yield" className="text-xl font-bold border-b-2 border-gray-200 focus:outline-none focus:border-gray-400 w-fit" onChange={(e) => setYield(e.target.value)} />
                <p className="text-2xl font-bold">Ingredients</p>
                <div className="flex gap-2 flex-wrap">
                    {fields.map((field, index) => (
                        <input key={index} type="text" placeholder={`Ingredient ${index + 1}`} className="block mb-2 border-b-2 border-gray-200 focus:border-gray-400 focus:outline-none" onChange={(e) => updateField(index, e.target.value)} />
                    ))}
                    <button onClick={addField} className="p-2 bg-blue-500 text-white mt-2">Add Ingredient</button>
                </div>
                <textarea placeholder="Instructions" className="border-b-2 border-gray-200 w-[50%] text-xl h-50" onChange={(e) => setInstructions(e.target.value)} />
                <input type="file" accept="image/*" onChange={handleImageChange} className="p-2 border" />
            </div>
            <button onClick={AddRecipe} className="mt-4 cursor-pointer bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-50 text-2xl p-3 font-bold hover:text-white hover:opacity-65">Add Recipe</button>
        </div>
    );
};
