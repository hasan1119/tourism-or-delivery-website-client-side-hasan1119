import axios from "axios";
import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios("https://afternoon-citadel-33920.herokuapp.com/blogs").then((res) =>
      setBlogs(res.data)
    );
  }, []);
  return blogs;
};

export default useBlogs;
