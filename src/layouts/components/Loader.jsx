import { ThreeDots } from "react-loader-spinner"
import { Circles } from "react-loader-spinner"

const Loader = () => {
    return (
        <ThreeDots
            height="100"
            width="100"
            color="gray"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass="loader-wrapper" />
    )
}
export default Loader;