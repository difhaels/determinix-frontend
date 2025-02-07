import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Select from "react-select";

export default function AddProject() {
  // untuk pindah halaman
  const navigate = useNavigate();

  // panggil member untuk mengisi form head dan contributor
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/members")
      .then((response) => response.json())
      .then((data) => setMembers(data))
      .catch(() => {
        navigate("/server-down");
      });
  }, [navigate]);

  const memberOptions = members.map((member) => ({
    value: member._id,
    label: member.name,
  }));

  // untuk koneksi ke backend
  const handleProjectSubmit = async ({
    title,
    headId,
    contributorIds,
    banner,
    description,
    imgAtt1,
    imgAtt2,
    imgAtt3,
    att1description,
    att2description,
    att3description,
  }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("head", headId); // Pastikan ada satu head
    formData.append("contributor", JSON.stringify(contributorIds)); // Array ID
    formData.append("banner", banner);
    formData.append("description", description);
    if (imgAtt1) formData.append("imgAtt1", imgAtt1);
    if (imgAtt2) formData.append("imgAtt2", imgAtt2);
    if (imgAtt3) formData.append("imgAtt3", imgAtt3);
    if (att1description) formData.append("att1description", att1description);
    if (att2description) formData.append("att2description", att2description);
    if (att3description) formData.append("att3description", att3description);

    const response = await fetch("http://localhost:5000/projects", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data);
    console.log(headId)
    console.log(contributorIds)
    if (response.ok) {
      alert("Proyek berhasil dibuat!");
    } else {
      alert("Gagal membuat proyek");
    }
  };

  // handle form/permintaan fe
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleProjectSubmit({
      title,
      headId,
      contributorIds,
      banner,
      description,
      imgAtt1,
      imgAtt2,
      imgAtt3,
      att1description,
      att2description,
      att3description,
    });
  };

  // variable2 form
  const [title, setTitle] = useState("");
  const [headId, setHeadId] = useState("");
  const [contributorIds, setContributorIds] = useState([]);
  const [banner, setBanner] = useState(null);
  const [description, setDescription] = useState("");
  const [imgAtt1, setImgAtt1] = useState("");
  const [imgAtt2, setImgAtt2] = useState("");
  const [imgAtt3, setImgAtt3] = useState("");
  const [att1description, setAtt1description] = useState("");
  const [att2description, setAtt2description] = useState("");
  const [att3description, setAtt3description] = useState("");

  // untuk menghandle perubahan head
  const handleHeadChange = (selectedOptions) => {
    setHeadId(selectedOptions.value); // Simpan hanya ID
  };

  // untuk menghandle perubahan contributor
  const handleContributorChange = (selectedOptions) => {
    setContributorIds(selectedOptions.map((option) => option.value)); // Simpan hanya ID
  };

  // untuk menghandle perubahan gambar image
  const handleBanner = (e) => {
    setBanner(e.target.files[0]);
  };
  // untuk menghandle perubahan gambar image
  const handleAtt1 = (e) => {
    setImgAtt1(e.target.files[0]);
  };
  // untuk menghandle perubahan gambar image
  const handleAtt2 = (e) => {
    setImgAtt2(e.target.files[0]);
  };
  // untuk menghandle perubahan gambar image
  const handleAtt3 = (e) => {
    setImgAtt3(e.target.files[0]);
  };

  return (
    <>
      <div className="p-5">
        <div className="p-5 mb-5 shadow-md flex justify-between">
          <h1 className="text-xl font-semibold">Add Project</h1>
          <Link
            className="bg-red-500 text-white px-2 py-1 rounded-sm hover:scale-105"
            to={"/dashboard/cms-project"}
          >
            back
          </Link>
        </div>

        <div className="flex">
          <div className="w-1/2 p-5 mb-5 shadow-md">
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
                    name="banner"
                    accept="image/*"
                    onChange={handleBanner}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="head" className="font-semibold block mt-2">
                    Head of Project
                  </label>
                  <Select
                    id="head"
                    className="basic-single"
                    classNamePrefix="select"
                    options={memberOptions}
                    onChange={handleHeadChange}
                  />
                  <label
                    htmlFor="contributor"
                    className="font-semibold block mt-2"
                  >
                    Contributor
                  </label>
                  <Select
                    isMulti
                    name="contributorIds"
                    options={memberOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                    onChange={handleContributorChange}
                  />
                </div>
              </div>

              <div className="p-5 mb-5 shadow-md">
                <div className="mt-2">
                  <label htmlFor="imgAtt1" className="font-semibold block">
                    Image Attachment 1{" "}
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <input
                    id="imgAtt1"
                    type="file"
                    accept="image/*"
                    onChange={handleAtt1}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="att1description"
                    className="font-semibold block"
                  >
                    Image Attachment 1 Description
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <textarea
                    id="att1description"
                    placeholder="Project Description"
                    value={att1description}
                    onChange={(e) => setAtt1description(e.target.value)}
                    className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="imgAtt2" className="font-semibold block">
                    Image Attachment 2{" "}
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <input
                    id="imgAtt2"
                    type="file"
                    accept="image/*"
                    onChange={handleAtt2}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="att2description"
                    className="font-semibold block"
                  >
                    Image Attachment 2 Description
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <textarea
                    id="att2description"
                    placeholder="Project Description"
                    value={att2description}
                    onChange={(e) => setAtt2description(e.target.value)}
                    className="w-full border-[1px] border-slate-300 rounded-md px-2 py-1 text-lg"
                  />
                </div>

                <div className="mt-2">
                  <label htmlFor="imgAtt3" className="font-semibold block">
                    Image Attachment 3{" "}
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <input
                    id="imgAtt3"
                    type="file"
                    accept="image/*"
                    onChange={handleAtt3}
                  />
                </div>

                <div className="mt-2">
                  <label
                    htmlFor="att3description"
                    className="font-semibold block"
                  >
                    Image Attachment 3 Description
                    <span className="font-normal">(opsional)</span>
                  </label>
                  <textarea
                    id="att1description"
                    placeholder="Project Description"
                    value={att3description}
                    onChange={(e) => setAtt3description(e.target.value)}
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
          <div className="w-1/2"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
