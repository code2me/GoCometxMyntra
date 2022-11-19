
import { AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { ImTwitter, ImInstagram } from 'react-icons/im'
import "./index.css";

const Footer = () => {
  return (

    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>online shopping</h4>
            <ul>
              <li><a href="#">men</a></li>
              <li><a href="#">women</a></li>
              <li><a href="#">Kids</a></li>
              <li><a href="#">Home & living</a></li>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">gift cards</a></li>
              <li>
                <a href="#">myntra insider <span>New</span> </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>useful links</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">returns</a></li>
              <li><a href="#">track order</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>experience myntra app on mobile</h4>
            <a href=""
            ><img
                src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png"
                alt=""
              /></a>
            <a href=""
            ><img
                src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png"
                alt=""
              /></a>
            <h4>keep in touch</h4>
            <div className="social-links">
              < a href="#" > <AiFillFacebook /> </a>
              < a href="#" > <AiFillYoutube /> </a>
              < a href="#" > <ImTwitter /> </a>
              < a href="#" > < ImInstagram /> </a>
            </div>
          </div>

          <div className="footer-col">
            <div className="footer-promise">
              <img
                src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png"
                alt=""
              />
              <div>
                <strong>100% ORIGINAL</strong>

                <span>guarantee for all products at myntra.com</span>
              </div>
            </div>

            <div className="footer-promise">
              <img
                src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png"
                alt=""
              />
              <div>
                <strong>Return within 30days</strong>
                <span>of receiving your order</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer