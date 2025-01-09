import Container from "../../Components/Container/Container"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"


const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <div className="my-20 text-center bg-red-200 py-4 rounded-sm">
          <h1 className="text-4xl font-semibold">Contact us</h1>
          <div className=" md:mx-10 md:grid md:grid-cols-3 justify-center gap-10 mt-10">
            <div className="">
              <h3 className="text-xl font-semibold">Address : </h3>
              <p>Bashundhara R/A, Dhaka-1229</p>
              <p>Thakurgaon Govt. College, Code 3502, EIIN 129305, Thakurgaon Sadar, Thakurgaon., Sadar ,Thakurgaon - 5100</p> 
              <p>College Code, 3401, EIIN, 120818. Address, Suihari, Sadar, Dinajpur, Sadar - 5200, Thana, Dinajpur Sadar. District, Dinajpur, Division, Rangpur.</p>
            </div>
            <div className=" md:my-0 my-10">
              <h3 className="text-xl font-semibold">Phone : </h3>
              <p>Dhaka: +880-2
                Dinajpur: +880-531 <br />
                Faridpur: +880-631
                Feni: +880-331 <br />
                Chattogram Division: +8801708123141 <br />
                Dhaka Division: +8801708123142 <br />
                Khulna Division: +8801708123143 <br />
                Rajshahi Division: +8801708123144</p>
            </div >
            <div className="">
              <h3 className="text-xl font-semibold">Email : </h3>
              <p>Dhaka: dcdhaka@mopa.gov.bd <br />
                Bagerhat Sadar: unobagerhat@mopa.gov.bd <br />
                Mongla: unomongla@mopa.gov.bd <br />
                Chattogram Division: ace.chattogramdiv@lged.gov.bd <br />
                Dhaka Division: ace.dhakadiv@lged.gov.bd <br />
                Khulna Division: ace.khulnadiv@lged.gov.bd <br />
                Rajshahi Division: ace.rajshahidiv@lged.gov.bd
              </p>
            </div >
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default ContactUs