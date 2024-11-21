import Banner from "../../Components/Banner/Banner"
import Container from "../../Components/Container/Container"
import FavouriteCourse from "../../Components/FavoriteCourse/FavoriteCourse"
import Navbar from "../../Components/Navbar/Navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Container className="my-20">
        <div>
          <Banner/>
          <FavouriteCourse/>
        </div>
      </Container>
    </div>
  )
}

export default Home