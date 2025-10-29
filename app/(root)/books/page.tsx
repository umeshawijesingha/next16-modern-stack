 'use cache'

import {cacheLife } from "next/cache";

 async function page() {
  // 'use cache '  //function level cache

  cacheLife("hours") //Cache for an hour
    const response = await fetch("http://localhost:3000/api/books");
    const books = await response.json();
    console.log("books", books)
  return (
    <main>
        <code>{JSON.stringify(books,null,2)}</code>
    </main>
  )
}

export default page