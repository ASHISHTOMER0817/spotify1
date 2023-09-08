import images from "../images";
import { Link } from "react-router-dom";
// import Songs from '../songs/Songs'
const Body = () => {
  const border = "border-solid ";
  return (
    <div>
      <div>
        <h2 className="flex justify-center font-extrabold m-4 ">Suggestions</h2>
        <div className="flex flex-row justify-around">
          
          <Link to="/Songs" className={border}>
            <img
              className={images}
              src="https://newsd.in/wp-content/uploads/2018/09/Honey-1024x640.jpg"
              alt="loading"
            />
            <p>Honey singh</p>views-293846
          </Link>
          <Link className={border}>
            <img
              className={images}
              src="https://static.toiimg.com/photo/msid-66974798/66974798.jpg?517197"
              alt="loading"
            />
            <p>mika pajji</p>views-293846
          </Link>
          <Link className={border}>
            <img
              className={images}
              src="https://wallpapercave.com/wp/wp2936483.jpg"
              alt="loading"
            />
            <p>gurbinder singh</p>views-293846
          </Link>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center font-extrabold m-4 ">Top 3</h2>
        <div className="flex flex-row justify-around" >
          <Link className={border}>
            <img
              className={images}
              src="https://newsd.in/wp-content/uploads/2018/09/Honey-1024x640.jpg"
              alt="loading"
            />
            <p>Honey singh</p>views-293846
          </Link>
          <Link className={border}>
            <img
              className={images}
              src="https://static.toiimg.com/photo/msid-66974798/66974798.jpg?517197"
              alt="loading"
            />
            <p>mika pajji</p>views-293846
          </Link>
          <Link className={border}>
            <img
              className={images}
              src="https://wallpapercave.com/wp/wp2936483.jpg"
              alt="loading"
            />
            <p>gurbinder singh</p>views-293846
          </Link>
        </div>
      </div>
      <div>
        <h2 className="flex justify-center font-extrabold m-4  ">Recently Played</h2>
        <div className="flex flex-row justify-around">
          <Link className={border}>
            <img
              className={images}
              src="https://newsd.in/wp-content/uploads/2018/09/Honey-1024x640.jpg"
              alt="loading"
            />
            <p>Honey singh</p>views-293846
          </Link>
          <Link className={border}>
            <img
              className={images}
              src="https://static.toiimg.com/photo/msid-66974798/66974798.jpg?517197"
              alt="loading"
            />
            <p>mika pajji</p>views-293846
          </Link>
          <Link className={border}>
              <img
                className={images}
                src="https://wallpapercave.com/wp/wp2936483.jpg"
                alt="loading"
              />
              <p>gurbinder singh</p>views-293846
          </Link>
            
        </div>
      </div>
    </div>
  );
};
export default Body;
