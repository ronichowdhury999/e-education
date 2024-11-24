import Banner from "../../Components/Banner/Banner"
import Container from "../../Components/Container/Container"
import FavouriteCourse from "../../Components/FavoriteCourse/FavoriteCourse"
import FeaturedCourse from "../../Components/FeaturedCourse/FeaturedCourse"
import FeaturedInstructor from "../../Components/FeaturedInstructor/FeaturedInstructor"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import TrendingCourse from "../../Components/TrendingCourse/TrendingCourse"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="my-20">
        <div>
          <Banner/>
          <FavouriteCourse/>
          <FeaturedCourse/>
          <TrendingCourse/>
          <FeaturedInstructor/>
          <Footer/>
        </div>
      </Container>
    </div>
  )
}

export default Home