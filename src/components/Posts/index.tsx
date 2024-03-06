import React from "react";

interface Posts {
  category: string;
}
const Posts = ({ category }: Posts) => {
  return (
    <div>
      <h1>{category}</h1>
    </div>
  );
};

export default Posts;
