import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import { notifyError, notifySuccess } from "../utilities/sharedFunctions";

const AddBook = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  //states for user name,photo url, email,password and error
  const [err, setErr] = useState("");
  const [wait, setWait] = useState(false);
  // const [img, setImg] = useState("");
  const [districts, setDistricts] = useState([]);
  useEffect(() => {
    fetch("https://bdapis.com/api/v1.2/districts")
      .then((res) => res.json())
      .then((data) => {
        setDistricts(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //------------------

  // const { data, isLoading } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () =>
  //     fetch(`${process.env.REACT_APP_serverUrl}/categories`).then((res) =>
  //       res.json()
  //     ),
  // });
  // let categories = [];
  // if (!isLoading) {
  //   if (data?.status) {
  //     categories = data.data;
  //   }
  // }

  const categories = [
    { _id: 1, name: "Education" },
    { _id: 2, name: "TextBook" },
    { _id: 3, name: "Story" },
    { _id: 4, name: "Literature" },
    { _id: 5, name: "Novel" },
  ];

  const [details, setDetails] = useState("");
  const handleTextArea = (e) => {
    if (e.target.value.length < 10) {
      setDetails("");
      setErr("Too short for description");
      return;
    }
    setErr("");
    setDetails(e.target.value);
  };

  const handleImg = (e) => {
    e.preventDefault();
    setWait(true);
    const tempImg = e.target.img.files[0];
    const formData = new FormData();
    formData.append("image", tempImg);
    //--------
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=3290e1e03d48d672b6164162e678e16b`;

    fetch(imgbbUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        // setImg(data.data.url);
        // console.log(img);
        // console.log(data.data.url);
        setWait(false);
        handlePost(e, data.data.url);
      });
  };
  const notifyHandle = (data) => {
    if (data.status) {
      notifySuccess("successfully posted ");
      navigate("../profile");
    } else {
      notifyError("Something went wrong");
    }
  };

  const handlePost = (e, img) => {
    e.preventDefault();
    const bookName = e.target.book_name.value;
    const authorName = e.target.author_name.value;
    const price = e.target.price.value;
    const location = {
      area: e.target.area.value,
      locationDetails: e.target.location.value,
    };
    const details = e.target.details.value;
    const category = e.target.category.value;
    const condition = e.target.condition.value;
    const edition = e.target.edition.value;
    const number = e.target.number.value;
    const current = new Date();
    const postTime = current.toISOString();
    const seller = user?.email;
    const advertize = false;

    const book = {
      bookName,
      authorName,
      price,
      location,
      details,
      category,
      condition,
      edition,
      number,
      postTime,
      seller,
      img,
      advertize,
    };
    e.target.reset();
    console.log(book);
    fetch(`http://localhost:5000/books`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => notifyHandle(data));
  };

  return (
    <div>
      <div className="max-w-2xl mx-4 md:mx-auto my-4 p-8 space-y-3 rounded-xl bg-gray-600 shadow-md text-gray-800">
        <h1 className="text-red-500">{err}</h1>

        <h1 className="text-2xl text-white font-bold text-center">
          Add Book for sale
        </h1>

        <form
          onSubmit={handleImg}
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-1 text-sm">
            <input
              required
              type="text"
              name="Book name"
              id="book_name"
              placeholder="Book Name"
              className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
            />
          </div>
          <div className="space-y-1 text-sm">
            <input
              required
              type="text"
              name="Author name"
              id="author_name"
              placeholder="Author Name"
              className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
            />
          </div>
          <select
            defaultValue="Standard"
            name="category"
            id="category"
            className="select bg-white text-gray-400 select-bordered w-full rounded-md"
          >
            {/* {!isLoading && */}
            <option disabled defaultChecked>
              Select Category
            </option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="">
            <textarea
              required
              onChange={handleTextArea}
              rows="3"
              name="details"
              id="details"
              //   cols="50"
              placeholder="Book details..."
              className="p-4 w-full rounded-md resize-none "
            ></textarea>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="space-y-1 text-sm">
              <input
                required
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
              />
            </div>
            <select
              name="condition"
              id="condition"
              className="select bg-white  text-gray-400 select-bordered w-full rounded-md"
            >
              <option disabled defaultChecked>
                Condition
              </option>
              <option value="Excellent">Excellent</option>
              <option value="Good">Good</option>
              <option value="Fair">Fair</option>
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <select
              name="area"
              id="area"
              className="select bg-white  text-gray-400 select-bordered w-full rounded-md"
            >
              <option disabled defaultChecked>
                Area
              </option>
              {districts.map((district) => (
                <option key={district.district}>{district?.district}</option>
              ))}
            </select>
            <div className="space-y-1 text-sm">
              <input
                required
                type="text"
                name="location"
                id="location"
                placeholder="Location Details"
                className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="space-y-1 text-sm">
              <input
                required
                type="text"
                name="edition"
                id="edition"
                placeholder="Edition / Purchase Year"
                className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
              />
            </div>
            <div className="space-y-1 text-sm">
              <input
                required
                type="text"
                name="number"
                id="number"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-md border-gray-300   focus:border-yellow-300"
              />
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <p className="text-md text-white font-semibold">
              Picture of your Book
            </p>
            <input
              className="text-white"
              required
              type="file"
              name="img"
              id="img"
              accept="image/*"
            />
          </div>

          <div className="block w-full  text-center rounded-md text-gray-50 bg-gray-600">
            {wait ? (
              <p className="p-3">image uploading. please wait..</p>
            ) : (
              <button
                className="block w-full p-3 text-center rounded-md text-gray-50 bg-cyan-400 hover:bg-cyan-600"
                type="submit"
              >
                Post
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
