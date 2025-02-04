import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";

export default function AddProject() {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();
  // panggil member
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  const ts = ["676e43065c3d5e7d283dc0ba", "676e43065c3d5e7d283dc0ba"];
  const handleProjectSubmit = async (
    title,
    description,
    members,
    files,
    att1,
    att2,
    att3
  ) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    ts.forEach((t) => formData.append("members", t)); // Pastikan ini adalah array ID anggota
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      alert("Proyek berhasil dibuat!");
    } else {
      alert("Gagal membuat proyek");
    }
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [att1, setAtt1] = useState("");
  const [att2, setAtt2] = useState("");
  const [att3, setAtt3] = useState("");

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleProjectSubmit(
      title,
      description,
      members,
      images,
      att1,
      att2,
      att3
    );
  };

  const memberOptions = members.map((member) => ({
    value: member.name,
    label: member.name,
  }));

  return (
    <div className="p-5">
      <div className="p-5 mb-5 shadow-md flex justify-between">
        <h1 className="text-xl font-semibold">Add Project</h1>
        <Link className="bg-red-500 text-white px-2 py-1 rounded-sm hover:scale-105" to={"/dashboard/cms-project"}>back</Link>
      </div>
      <div className="p-5 mb-5 shadow-md">
        <form onSubmit={handleSubmit}>
          <div className="p-5 mb-5 shadow-md">
            <div className="mt-2">
              <label htmlFor="name" className="font-semibold block">
                Project Name
              </label>
              <input
                id="name"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="description" className="font-semibold block">
                Project Description
              </label>
              <textarea
                id="description"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="banner" className="font-semibold block">
                Project Banner and Main Image
              </label>
              <input
                id="banner"
                type="file"
                multiple
                onChange={handleImageChange}
                required
              />
            </div>

            <div>
              <label htmlFor="lead" className="font-semibold block mt-2">
                Head of Project
              </label>
              <Select
                className="basic-single"
                classNamePrefix="select"
                defaultValue={memberOptions[1]}
                name="color"
                options={memberOptions}
              />
              <label htmlFor="contributor" className="font-semibold block mt-2">
                Contributor
              </label>
              <Select
                defaultValue={[memberOptions[1], memberOptions[2]]}
                isMulti
                name="colors"
                options={memberOptions}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <div className="p-5 mb-5 shadow-md">
            <div className="mt-2">
              <label htmlFor="att1" className="font-semibold block">
                Image Attachment 1{" "}
                <span className="font-normal">(opsional)</span>
              </label>
              <input
                id="att1"
                type="file"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div className="mt-2">
              <label htmlFor="att1d" className="font-semibold block">
                Image Attachment 1 Description
                <span className="font-normal">(opsional)</span>
              </label>
              <textarea
                id="att1d"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="att2" className="font-semibold block">
                Image Attachment 2{" "}
                <span className="font-normal">(opsional)</span>
              </label>
              <input
                id="att2"
                type="file"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div className="mt-2">
              <label htmlFor="att1d" className="font-semibold block">
                Image Attachment 2 Description
                <span className="font-normal">(opsional)</span>
              </label>
              <textarea
                id="att1d"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
              />
            </div>

            <div className="mt-2">
              <label htmlFor="att2d" className="font-semibold block">
                Image Attachment 3{" "}
                <span className="font-normal">(opsional)</span>
              </label>
              <input
                id="att3"
                type="file"
                multiple
                onChange={handleImageChange}
              />
            </div>

            <div className="mt-2">
              <label htmlFor="att3d" className="font-semibold block">
                Image Attachment 3 Description
                <span className="font-normal">(opsional)</span>
              </label>
              <textarea
                id="att1d"
                placeholder="Project Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-green-400 text-white px-2 py-1 rounded-sm hover:bg-green-500 mt-3"
          >
            Create Project
          </button>
          <button className="bg-slate-400 text-white px-2 py-1 rounded-sm hover:bg-slate-500 ml-2">
            Preview
          </button>
        </form>
      </div>
    </div>
  );
}
