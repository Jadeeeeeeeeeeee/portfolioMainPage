

function SideBar() {
    
    return(<>
    <div className="SideBar">
        <h1>JadeYeti's portafilo</h1>
        <div className="SideBarText">
            <a href="https://portfolio-main-page.vercel.app/"><li className="SideBarOption" style={{backgroundColor: "hsl(0, 0%, 70%)"}}>home</li></a>
            <a href="https://portfolio-project-page.vercel.app/"><li className="SideBarOption">my projects</li></a>
            <a href="https://portfolio-about-me-teal.vercel.app/"><li className="SideBarOption">a little about me</li></a>
        </div>
    </div>
    </>);
}

export default SideBar