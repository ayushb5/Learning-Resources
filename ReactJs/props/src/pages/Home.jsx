import TreeCard from "../components/TreeCard"
import treesData from "../data/trees.json"
function Home() {
    return (
        <ul className="grid grid-col-3 container">
            {treesData.map((item) => <TreeCard key={item.id} item={item} />)}
        </ul>
    )
}

export default Home