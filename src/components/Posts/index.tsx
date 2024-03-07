import { Box } from "@mui/material";
import React from "react";
import Post from "@/components/Post";

interface Posts {
  category: string;
}

const Posts = ({ category }: Posts) => {
  console.log(category);
  return (
    <Box width="100%">
      <Post />
      <Post />
    </Box>
  );
};

export default Posts;
