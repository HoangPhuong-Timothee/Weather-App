import './Footer.css'
const Footer=()=>{
    return (
        <div className="footer-wrapper">
           <div className="feel-like">
                <p  className='bold'>30F</p>
                <p>Feels Like</p>
           </div>
           <div className="humidity">
                <p className='bold'>72%</p>
                <p>Humidity</p>
           </div>
           <div className="feel-like">
                <p className='bold'>2MPH</p>
                <p>Winds</p>
           </div>
        </div>
    );
}

export default Footer;