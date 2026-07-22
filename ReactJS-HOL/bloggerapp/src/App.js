import React from "react";

import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

import { books, blogs, courses } from "./Data";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "40px",
      }}
    >
      {showCourses ? (
        <div style={{ borderRight: "3px solid green", padding: "20px" }}>
          <CourseDetails courses={courses} />
        </div>
      ) : null}

      {showBooks ? (
        <div style={{ borderRight: "3px solid green", padding: "20px" }}>
          <BookDetails books={books} />
        </div>
      ) : null}

      {showBlogs ? (
        <div style={{ padding: "20px" }}>
          <BlogDetails blogs={blogs} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
