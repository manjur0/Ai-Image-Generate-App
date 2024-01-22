import { useState } from "react";
import defaultImg from "../../assets/default.jpg";
import "./ImageGenerator.css";
import { useRef } from "react";
const ImageGenerator = () => {
  const [imageURL, setImageURL] = useState("/");
  const inputRef = useRef(null);
  const imageGenerator = async () => {
    if (inputRef.current.value === "") {
      return 0;
    }
    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
          "user-agent": "chrome",
        },
        body: JSON.stringify({
          prompt: inputRef.current.value,
          n: 1,
          size: "350x350",
        }),
      }
    );
    let data = await response.json();
    console.log(data);
    let data_array = data.data;
    setImageURL(data_array[0].url);
  };
  return (
    <div className="ai_image_generator">
      <h1 className="header text-4xl font-bold text-center ">
        AI Image <span className="text-green-400">Generator</span>
      </h1>
      <div className="img_loading">
        <div className="image flex justify-center">
          <img
            className=" rounded-md"
            src={imageURL === "/" ? defaultImg : imageURL}
            alt="default image"
          />
        </div>
        <div className="search-box">
          <input
            type="text"
            ref={inputRef}
            className="search-input"
            placeholder="Describe What You Want To Generate"
          />
          <div onClick={() => imageGenerator()} className="search-btn  ">
            Generate
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
