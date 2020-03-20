import React, { useEffect, useState } from "react";
import "./addproduct.scss";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import ImageUploader from "react-images-upload";

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
  const [loading, setLoading] = useState(true);
  var tree = [];

  useEffect(() => {
    var i = 0;
    var margin = 50;

    for (let j = 0; j < Data.length - 1; j++)
      if (i === 0) {
        Data.sort(function(a, b) {
          var textA = a.code.toUpperCase();
          var textB = b.code.toUpperCase();
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      } else {
        Data.sort(function(a, b) {
          var textA = "";
          var textB = "";

          if (a.code.split[i - 1] === a.code.split[i]) {
            textA =
              a.code.split("-")[i] === undefined
                ? ""
                : a.code.split("-")[i].toUpperCase();
            textB =
              b.code.split("-")[i + 1] === undefined
                ? ""
                : b.code.split("-")[i + 1].toUpperCase();
          }
          console.log("a: " + textA + " b: " + textB);
          return textA < textB ? -1 : textA > textB ? 1 : 0;
        });
      }
    i++;
    console.log(Data);

    // for (let i = 1; i < Data.length; i++) {
    //   machingCatagory(Data[i - 1].code, Data[i].code)
    //     ? tree.push(
    //         <div style={{ marginLeft: (margin += 50) }}>{Data[i].name}</div>
    //       )
    //     : { machingCatagory(Data[])
    //       tree.push(<div style={{ marginLeft: margin }}>{Data[i].name}</div>);
    // }

    setLoading(false);

    console.log(tree);
  }, []);

  return loading ? (
    "Loading.."
  ) : (
    <div className="collections">
      {/* {props.data.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))} */}

      {tree.map(item => (
        <item>ok</item>
      ))}
    </div>
  );
};

const machingCatagory = (previous, current) => {
  console.log("previous array: " + previous + " and current: " + current);
  return current.toString().includes(previous.toString());
};

export default function AddProduct() {
  const [data, setData] = useState({ title: "", dexcription: "", images: [] });

  const handelChange = eve => {
    setData(([eve.target.name] = eve.target.value));
  };

  const handelFileChange = eve => {
    console.log(eve);
    setData(([eve.target.name] = eve.target.files));
    console.log(data);
  };

  useEffect(() => {});

  return (
    <div className="add_product">
      <div>
        <Catagory data={Data} />
      </div>
      <div className="adding ">
        <form>
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
              className="Editor"
              editor={ClassicEditor}
              data="<p>Hello Admin</p><br/> Details<br/> <br/>"
              onInit={editor => {
                // You can store the "editor" and use when it is needed.
                console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
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
            <input type="file" multiple onChange={handelFileChange} />
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
                  <input type="text" onChange={handelChange} name="catagory" />
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

const BesicDetails = () => {
  return (
    <div>
      <input type="text" name="Name" placeholder="name" />
    </div>
  );
};
