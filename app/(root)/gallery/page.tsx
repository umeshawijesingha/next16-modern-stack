async function page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if(!response.ok) throw new Error("Failed to fectch data");
    const albums = await response.json();
    console.log("albums", albums)
  return (
    <div>
        <h1>Albums</h1>
        <ul>
            {albums.map((album: any) =>(
                <li key={album.id }>{album.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default page

