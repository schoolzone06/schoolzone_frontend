import { Box } from "@mui/material";
import React from "react";
import Post from "@/components/Post";

interface Posts {
  category: string;
}

// eslint-disable-next-line
const Posts = ({ category }: Posts) => {
  return (
    <Box width="100%">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Posts;
