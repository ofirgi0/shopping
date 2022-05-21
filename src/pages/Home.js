import ItemCard from "../ui-widgets/ItemCard";


const Home = () => {
    var initialItems = JSON.parse(localStorage.getItem("items"));
    return (
        <ItemCard item = {initialItems[0]}/>
    )

};







export default Home;