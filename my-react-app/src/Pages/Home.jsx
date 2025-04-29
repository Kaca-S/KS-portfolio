function Home() {

    const handleEvent = () => {
        console.log("You clicked me!");
    }
    return <div>
        <button className="home-btn" onClick={handleEvent}>Click Me!</button>
    </div>
}

export default Home;