import { Link, useLoaderData } from "react-router-dom"
import Container from "../../Components/Container/Container";
import { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Instructorr from "./Instructorr";

const Instructors = () => {
    const instructorsData = useLoaderData()
    const [showInstructor, setShowInstructor] = useState(6)

    return (
        <div>
            <Navbar/>
            <Container>
            <div className="text-center my-20">
                <h2 className='text-5xl font-bold'>Instructors</h2>
                <div className='flex justify-center items-center gap-4 my-8'> <Link to="/" className='font-semibold hover:text-blue-500'>Home</Link> <span className='bg-orange-500 w-2 h-1 rounded-xl'> {""}</span>
                    <h3 className='font-semibold'>Instructors</h3> </div>
            </div>
            <div className="mt-20 grid md:grid-cols-3 grid-cols-1 gap-6 rounded-lg">

                {
                    instructorsData && instructorsData.slice(0, showInstructor).map(instructor => <Instructorr key={instructor.id} instructor={instructor}></Instructorr>)
                }
            </div>
            <div className="text-center my-14">
                {
                    showInstructor < instructorsData.length && <div>
                        <button onClick={() => { setShowInstructor(prevData => prevData + 3) }} className="btn text-white btn-error ">View all</button>
                    </div>
                }
            </div>
        </Container>
        <Footer/>
        </div>
    )
}

export default Instructors