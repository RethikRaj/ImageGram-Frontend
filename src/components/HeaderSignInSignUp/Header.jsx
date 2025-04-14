function Header({pageName}){
    return(
        <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-3xl">Imagegram</h1>
            <p className="text-sm">{pageName} to see photos from your friends and upload photos to your friends</p>
        </div>
    )
}

export default Header;