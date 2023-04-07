import Breadcrumb from "../components/Breadcrumb";
const Home = () => {
    const labels = ["Home"];

    return (
        <div id="content" className="app-content">
            <Breadcrumb labels={labels} />
        </div>
    )
}

export default Home