import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Home from "./Components/Home/home";
import Services from "./Components/Services/services";
import Blog from "./Components/Blog/blog";
import About from "./Components/About/about";
import Contact from "./Components/Contact/contact";
import Machinery from "./Components/Machinery/machinery";
import Physiotherapy from "./Components/Services/Services_Detail/Physiotherapy/physiotherapy";
import CervicalTraction from "./Components/Services/Services_Detail/Cervical Traction/cervical_traction";
import SportInjuries from "./Components/Services/Services_Detail/Sport_Injuries/sport_injuries";
import Osteoarthritis from "./Components/Services/Services_Detail/Osteoarthritis/osteoarthritis";
import Rheumatoidarthritis from "./Components/Services/Services_Detail/Rheumatoid-arthritis/rheumatoid_arthritis";
import Nerveimpingement from "./Components/Services/Services_Detail/Nerve_Impingement/nerve_impingement";
import Tendinitis from "./Components/Services/Services_Detail/Tendinitis/tendinitis";
import Edema from "./Components/Services/Services_Detail/Edema/edema";
import Neuropathy from "./Components/Services/Services_Detail/Neuropathy/Neuropathy";
import Booking from "./Components/Services/Booking/booking";
import Post1 from "./Components/Blog/Blog_Posts/Post_1/post1";
import Post2 from "./Components/Blog/Blog_Posts/Post_2/post2";
import Post3 from "./Components/Blog/Blog_Posts/Post_3/post3";
import Post4 from "./Components/Blog/Blog_Posts/Post_4/post4";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <>
          <Navbar />
        </>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="services" element={<Services />}/>
              <Route path="services/cervical_traction" element={<CervicalTraction />} />
              <Route path="services/cervical_traction/booking" element={<Booking />} />
              <Route path="services/sport_injuries" element={<SportInjuries />} />
              <Route path="services/sport_injuries/booking" element={<Booking />} />
              <Route path="services/physiotherapy" element={<Physiotherapy />} />
              <Route path="services/physiotherapy/booking" element={<Booking />} />
              <Route path="services/osteoarthritis" element={<Osteoarthritis />} />
              <Route path="services/osteoarthritis/booking" element={<Booking />} />
              <Route path="services/rheumatoid_arthritis" element={<Rheumatoidarthritis />} />
              <Route path="services/rheumatoid_arthritis/booking" element={<Booking />} />
              <Route path="services/nerve_impingement" element={<Nerveimpingement />} />
              <Route path="services/nerve_impingement/booking" element={<Booking />} />
              <Route path="services/tendinitis" element={<Tendinitis />} />
              <Route path="services/tendinitis/booking" element={<Booking />} />
              <Route path="services/edema" element={<Edema />} />
              <Route path="services/edema/booking" element={<Booking />} />
              <Route path="services/neuropathy" element={<Neuropathy />} />
              <Route path="services/neuropathy/booking" element={<Booking />} />
            <Route path="blog" element={<Blog />} />
              <Route path="blog/booking" element={<Booking />} />
              <Route path="blog/post1" element={<Post1 />} />
              <Route path="blog/post2" element={<Post2 />} />
              <Route path="blog/post3" element={<Post3 />} />
              <Route path="blog/post4" element={<Post4 />} />
            <Route path="machinery" element={<Machinery />}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </div>
        <>
          <Footer />
        </>
      </div>
    </Router>
  );
}

export default App;
