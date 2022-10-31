import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="h-36 px-10 md:px-40 flex flex-col justify-center items-center bg-gray-100">
            <Link to='/'> <h1 className="text-base md:text-4xl font-serif px-5 font-bold tracking-wide">THE WALL STREET JOURNAL</h1> </Link>
            <hr className="border-black border-1 w-full mt-10" />
            <hr className="border-black border-1 w-full mt-1" />
        </nav>
    )
}
export default Navbar