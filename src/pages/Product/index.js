import {
  useEffect,
  useState
} from "react";
import {
  fetchAproduct
}
  from "utils/fetchAproduct";
import "./index.css";
import { AiOutlineStar } from 'react-icons/ai';

function Products() {
  const [isFetching, setIsFetching] = useState(true);
  const [item, setItem] = useState(null);
  const [filterData, setFilterData] = useState({
    gender: [],
    categories: [],
    price: [],
  });

  let data = sessionStorage.getItem("key");

  useEffect(() => {
    setIsFetching(true);
    fetchAproduct().then((product) => {
      //console.log(product)
      product[0].map((item) => {
        if (item.url === data) {
          setItem(item);
          console.log(item)
          //setFilterData(filter_data);
        }
      })
    });
  }, []);


  return (<div>
    {item ? (
      <div>
        <div className="Homediv">
          Home / <span className="bold semi-bold">Shirts for Men & Women</span>
        </div>
        <div className="product-main-div">
          <div className="imgdiv">
            <img src={item.searchImage} alt="" />
            <img src={item.images[1].src} alt="" />
            <img src={item.images[2].src} alt="" />
            <img src={item.images[3].src} alt="" />
          </div>
          <div className="right-div">
            <h1 className="text-lg font-bold">
              {item.brand}
            </h1>
            <div className="titlediv">
              {item.title}
            </div>
            <div className="flex">
              {Math.round(item.rating)}<AiOutlineStar/> Rating
            </div>
            <div className="flex flex-row text-lg font-bold">
              <h1 className="font-500">
                ₹ {item.discountedPrice}
              </h1>
              <div className="ml-2 text-orange-500">
                MRP ₹ <span style={{ textDecoration: 'line-through' } }> {item.originalPrice} </span>
              </div>
              <div className="ml-2">
                {item.discountPercentage}
              </div>
            </div> inclusive of all taxes <div>
              Select Size
            </div>
              <ul className="sizelist" style={{ listStyle: 'none' }}>
                <li>xs</li>
                <li>s</li>
                <li>m</li>
                <li>l</li>
                <li>xl</li>
                <li>xxl</li>
                <li>4xl</li>
              </ul>
          
          <div className="buttons">
            <button className="btn1">ADD TO BAG</button>
            <button className="btn2"> WISHLIST </button>
          </div>

        </div>

        </div>

      </div>
      ) : (<div>loading</div>)
    }
  </div>

  );
}

export default Products;