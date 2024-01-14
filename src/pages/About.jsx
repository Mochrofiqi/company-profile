import Carouseltim from "../components/tentang/Carouseltim"
import Deskripsi from "../components/tentang/Deskripsi"
import Direksi from "../components/tentang/Direksi"
import Komisaris from "../components/tentang/Komisaris"
import Visi from "../components/tentang/Visi"
import Visimisi from "../components/tentang/Visimisi"
import Vpmanager from "../components/tentang/Vpmanager"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const About = () => {
    return (
        <>
      <NavBar />
        <div className="bg-neutral-500">
            <div className=" mx-28">
                <Deskripsi />
                {/* <Visimisi /> */}
                <Visi />
                <Komisaris />
                <Direksi />
                <Vpmanager />
                <Carouseltim />
            </div>
        </div>
      <Footer />
        </>

    )
}

export default About