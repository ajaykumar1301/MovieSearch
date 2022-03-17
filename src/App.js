import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./Container/CardContainer";


function App() {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [type, setType] = useState(0);
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&query=${searchText}`
      );
      setContent(data.results);
      // setNumOfPages(data.total_pages);
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // window.scroll(0, 0);
    fetchSearch();
    console.log("hcucuu", fetchSearch)
    // eslint-disable-next-line
  }, [searchText]);
  return (
    <div className="flex flex-col w-full h-full p-0 m-0">
      <Navbar searchText={searchText} setSearchText={setSearchText} fetchSearch={fetchSearch}/>
      <CardContainer searchText={searchText} setSearchText={setSearchText} content={content} setContent={setContent}/>
    </div>
  );
}

export default App;
