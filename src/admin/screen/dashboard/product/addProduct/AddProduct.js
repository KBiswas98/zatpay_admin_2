import React, { useEffect, useState } from "react";
import "./addproduct.scss";
import { message } from "antd";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Host } from "../../../../constant/Constant";
import axios from "axios";

const Data = [
  {
    name: "man",
    code: "man",
    image: "https://www.google.com"
  },
  {
    name: "pants",
    code: "man-pants",
    image: "https://www.google.com"
  },
  {
    name: "a",
    code: "man-pants-fullpant",
    image: "https://www.google.com"
  },
  {
    name: "b",
    code: "man-pants-fullpant-wolo",
    image: "https://www.google.com"
  },
  {
    name: "c",
    code: "man-pants-fullpant-molo",
    image: "https://www.google.com"
  },
  {
    name: "d",
    code: "man-pants-fullpant-molo-koso",
    image: "https://www.google.com"
  },
  {
    name: "e",
    code: "woman-pants-fullpant-molo-koso",
    image: "https://www.google.com"
  },
  {
    name: "f",
    code: "woman-sari-fullpant-molo-koso",
    image: "https://www.google.com"
  },
  {
    name: "g",
    code: "tv",
    image: "https://www.google.com"
  },
  {
    name: "h",
    code: "man-pants-fullpant-molo-koso-saki",
    image: "https://www.google.com"
  },
  {
    name: "h",
    code: "anna-pants-fullpant-molo-koso-saki",
    image: "https://www.google.com"
  },
  {
    name: "h",
    code: "anna-apan-fullpant-molo-koso-saki",
    image: "https://www.google.com"
  },
  {
    name: "h",
    code: "anna-apan-appu-molo-koso-saki",
    image: "https://www.google.com"
  },
  {
    name: "h",
    code: "anna-apan",
    image: "https://www.google.com"
  }
];

const Catagory = props => {
  return <div className="collections">ok</div>;
};

export default function AddProduct() {
  const [data, setData] = useState({
    title: "No name",
    description: "",
    catagory: "/woman/sari",
    stock: "",
    price: "",
    offerPrice: "",
    color: "",
    brand: "",
    size: "",
    delivery: "",
    youtube: ""
  });
  const [images, setImages] = useState("");

  const handelChange = eve => {
    console.log(data)
    setData(({ ...data, [eve.target.name] : eve.target.value.toString()}));
  };

  const handelFileChange = eve => {
    // console.log(eve.target);
    setImages(eve.target.files);
    // setData({images : eve.target.files});
    // console.log(data);
  };

  const handelProductSubmit = event => {
    console.log(data);

    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.title);
    formData.append("description", data.description);
    formData.append("catagory", data.catagory);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("offer_price", data.offerPrice);
    formData.append("brand", data.brand);
    formData.append("color", data.color);
    formData.append("size", data.size);
    formData.append("delivery", data.delivery);
    formData.append("youtube", data.youtube);
    formData.append("images", data.imgaes);

    for (const file of images) {
      formData.append("files", file);
    }

    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };

    console.log(formData);

    axios
      .post(`${Host}/product/add`, formData, config)
      .then(res => {
        console.log(res)
        res.status === 200
          ? message.success(res.data)
          : message.error(res.data);
        console.log("Data Loaded.");
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {});

  return (
    <div className="add_product">
      <div>
        <Catagory data={Data} />
      </div>
      <div className="adding ">
        <form onSubmit={handelProductSubmit}>
          <div className="part1 card">
            <h2>Product Details</h2>
            <label>Name</label>
            <br />
            <input
              className="input_a"
              name="title"
              placeholder="Title"
              onChange={handelChange}
            />
            <br />
            <br />
            <label>Details</label>
            <br />
            <CKEditor
              name="description"
              className="Editor"
              editor={ClassicEditor}
              data="<p>Hello Admin</p><br/> Details<br/> <br/>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const _data = editor.getData();
                setData( {...data,  description:  data.description + _data });
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                console.log("Focus.", editor);
              }}
            />
          </div>
          <div className="part1 card">
            <h2>Images</h2>
            <input
              name="images"
              type="file"
              multiple
              onChange={handelFileChange}
            />
          </div>
          <div className="part2 card">
            <h2>Price</h2>
            <br />
            <div className="holder">
              <div className="section">
                <label>Price</label>
                <br />
                <input type="number" onChange={handelChange} name="price" />
              </div>
              <div className="section">
                <label>Offer Price</label>
                <br />
                <input
                  type="number"
                  onChange={handelChange}
                  name="offerPrice"
                />
              </div>
            </div>
          </div>
          <div className="card part3">
            <h2>Other Information</h2>
            <div className="holder">
              <div>
                <div className="section">
                  <label>Stock*</label>
                  <br />
                  <input type="number" onChange={handelChange} name="stock" />
                </div>
                <div className="section">
                  <label>Brand*</label>
                  <br />
                  <input type="text" onChange={handelChange} name="brand" />
                </div>
                <div className="section">
                  <label>Catagory*</label>
                  <br />
                  <input value={data.catagory} type="text" onChange={handelChange} name="catagory" />
                </div>
                <div className="section">
                  <label>youtube</label>
                  <br />
                  <input type="text" onChange={handelChange} name="youtube" />
                </div>
              </div>

              <div>
                <div className="section">
                  <label>Size</label>
                  <br />
                  <input type="text" onChange={handelChange} name="size" />
                </div>
                <div className="section">
                  <label>color</label>
                  <br />
                  <input type="text" onChange={handelChange} name="color" />
                </div>
                <div className="section">
                  <label>delivery</label>
                  <br />
                  <input type="text" onChange={handelChange} name="delivery" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <input
              type="submit"
              value="submit"
              className="button-x"
              style={{
                marginLeft: 10,
                color: "black",
                borderColor: "black"
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

