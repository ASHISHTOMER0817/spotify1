// import Link from '../Link'
import { useState } from "react";
const Header = () => {
  const [search, setSearch] = useState("");
  console.log("search is",search )
  async function SearchResult() {
    const url = "https://spotify-web2.p.rapidapi.com/search/?q=" + search;

    console.log("url is: ", url);
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b1de8876damsh6882c98db67483bp17156djsnced71ceb7ee8",
        "X-RapidAPI-Host": "spotify-web2.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="flex flex-row justify-between p-5 ">
      {/* <img className="w-20 h-20 rounded-2xl shadow-inner shadow-rose-900  " alt=" broke" src={Link}/> */}
      <input
        type="text"
        placeholder="search song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button" className="bg-red-700" onClick={SearchResult}>
        search
      </button>
    </div>
  );
};
export default Header;
