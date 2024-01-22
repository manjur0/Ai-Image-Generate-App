import defaultImg from "../../assets/default.jpg";
import "./ImageGenerator.css";
const ImageGenerator = () => {
  return (
    <div className="ai_image_generator">
      <h1 className="header text-4xl font-bold text-center ">
        AI Image <span className="text-green-400">Generator</span>
      </h1>
      <div className="img_loading">
        <div className="image">
          <img
            className="w-[350px] rounded-md"
            src={defaultImg}
            alt="default image"
          />
        </div>
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Describe What You Want To Generate"
          />
          <button className="search-btn  ">Generate</button>
        </div>
      </div>
    </div>
  );
};

export default ImageGenerator;
