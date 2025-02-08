import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Select from "react-select";
import Notification from "../components/Notification";
import Loading from "../components/Loading";

export default function AddProject() {
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

    try {
      const response = await fetch("http://localhost:5000/projects", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setShowNotification(true);
      } else {
        alert("Gagal membuat proyek: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(`Gagal membuat proyek`);
    } finally {
      setIsLoading(false); // Matikan loading setelah request selesai
    }
  };

  // handle form/permintaan fe
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
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
  const [headLabel, setHeadLabel] = useState("");
  const [contributorIds, setContributorIds] = useState([]);
  const [contributorLabel, setContributorLabel] = useState(null);
  const [banner, setBanner] = useState(null);
  const [description, setDescription] = useState("");
  const [imgAtt1, setImgAtt1] = useState(null);
  const [imgAtt2, setImgAtt2] = useState(null);
  const [imgAtt3, setImgAtt3] = useState(null);
  const [att1description, setAtt1description] = useState("");
  const [att2description, setAtt2description] = useState("");
  const [att3description, setAtt3description] = useState("");

  // untuk menghandle perubahan head
  const handleHeadChange = (selectedOptions) => {
    setHeadLabel(selectedOptions.label);
    setHeadId(selectedOptions.value); // Simpan hanya ID
  };

  // untuk menghandle perubahan contributor
  const handleContributorChange = (selectedOptions) => {
    setContributorLabel(selectedOptions.map((option) => option.label));
    setContributorIds(selectedOptions.map((option) => option.value)); // Simpan hanya ID
  };

  const [bannerPreview, setBannerPreview] = useState(null);
  const [att1Preview, setAtt1Preview] = useState(null);
  const [att2Preview, setAtt2Preview] = useState(null);
  const [att3Preview, setAtt3Preview] = useState(null);

  const handleBanner = (e) => {
    const file = e.target.files[0];
    setBanner(file);
    setBannerPreview(URL.createObjectURL(file));
  };

  const handleAtt1 = (e) => {
    const file = e.target.files[0];
    setImgAtt1(file);
    setAtt1Preview(URL.createObjectURL(file));
  };

  const handleAtt2 = (e) => {
    const file = e.target.files[0];
    setImgAtt2(file);
    setAtt2Preview(URL.createObjectURL(file));
  };

  const handleAtt3 = (e) => {
    const file = e.target.files[0];
    setImgAtt3(file);
    setAtt3Preview(URL.createObjectURL(file));
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
          <div className="w-1/2">
            <h1 className="text-lg font-semibold p-3">Preview</h1>
            <div className="bg-slate-600 m-3 p-3">
              {title && (
                <h1 className="text-white text-lg font-semibold">{title}</h1>
              )}
              {headLabel && (
                <span className="flex text-white gap-2">
                  Head : {headLabel}
                </span>
              )}

              {contributorLabel && (
                <span className="flex gap-2 text-white mb-3">
                  Contributor :
                  <div className="flex gap-2">
                    {contributorLabel.map((cont) => {
                      return (
                        <h1 className="cursor-pointer flex text-white gap-2">
                          <h1
                            className="first-letter:uppercase text-white hover:text-blue-600"
                            key={cont}
                          >
                            {cont}
                          </h1>
                          {" | "}
                        </h1>
                      );
                    })}
                  </div>
                </span>
              )}

              <div className="bg-white p-4 rounded-sm shadow-lg">
                {bannerPreview && (
                  <img
                    src={bannerPreview}
                    alt="Banner Preview"
                    className="w-full"
                  />
                )}
                {description && <h1 className="py-3">{description}</h1>}
                {att1Preview && (
                  <img
                    src={att1Preview}
                    alt="Attachment 1 Preview"
                    className="w-full"
                  />
                )}
                {att1description && <h1 className="py-3">{att1description}</h1>}
                {att2Preview && (
                  <img
                    src={att2Preview}
                    alt="Attachment 2 Preview"
                    className="w-full"
                  />
                )}
                {att2description && <h1 className="py-3">{att2description}</h1>}
                {att3Preview && (
                  <img
                    src={att3Preview}
                    alt="Attachment 3 Preview"
                    className="w-full"
                  />
                )}
                {att3description && <h1 className="py-3">{att3description}</h1>}
              </div>
            </div>
          </div>
        </div>
        {showNotification && (
          <Notification
            close={() => setShowNotification(false)}
            button="close"
            what="Project Added Successfully"
            daijoubu={true}
          />
        )}
        {isLoading && <Loading what={"Creating Project!"}/>}
      </div>
      <Footer />
    </>
  );
}
