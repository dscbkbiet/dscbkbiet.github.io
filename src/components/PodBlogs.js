import React from "react";
import blogImg from "../Assets/img/blog.jpg";
import podImg from "../Assets/img/pod.jpg";

const PodBlogs = () => {
  return (
    <>
      <div className="stuff__container flex-col justify-center items-center">
        <span className="flex items-center w-full justify-center flex-col">
          <h1 className="font-semibold"> Podcasts & Blogs</h1>
          <p className="text-gray-500 text-lg">
            <i>Our insights on Topics you like..</i>👀
          </p>
        </span>
        <span>
          <span
            id="blog_space"
            className="flex justify-center items-center space-x-20 mb-10"
          >
            <img src={blogImg} atl="blog_img" className="object-contain h-96" />
            <span className="max-w-2xl">
              <h1 className="font-semibold mb-3">Blogs</h1>
              <hr></hr>
              <p className="mb-4 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eleifend erat, quis rhoncus lectus. Maecenas mattis ante in
                pulvinar venenatis. Ut vestibulum gravida quam, id porttitor
                lectus posuere eu. Curabitur imperdiet porta ligula, quis
                iaculis mi rhoncus vitae.
              </p>
              <a
                href="https://medium.com/gdsc-bkbiet"
                target="_blank"
                className=""
              >
                <span className="gdsc_btn pl-0 cursor-pointer">
                  <span className="p-2 rounded-md rounded-tr-none rounded-br-none  bg-blue-900 mr-2">
                    😎
                  </span>
                  To Medium
                </span>
              </a>
            </span>
          </span>
          <span
            id="pod_space"
            className="flex justify-center items-center space-x-20"
          >
            <span className="max-w-2xl">
              <h1 className="font-semibold mb-3">Podcasts</h1>
              <hr></hr>
              <p className="mb-4 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a
                eleifend erat, quis rhoncus lectus. Maecenas mattis ante in
                pulvinar venenatis. Ut vestibulum gravida quam, id porttitor
                lectus posuere eu. Curabitur imperdiet porta ligula, quis
                iaculis mi rhoncus vitae.
              </p>
              <a
                href="https://open.spotify.com/show/63yaglAHUitrDjH9WCXlSZ"
                target="_blank"
              >
                <span className="gdsc_btn pl-0 cursor-pointer">
                  <span className="p-2 rounded-md rounded-tr-none rounded-br-none  bg-blue-900 mr-2">
                    🎧
                  </span>
                  To Spotify
                </span>
              </a>
            </span>
            <img src={podImg} atl="blog_img" className="object-contain h-96" />
          </span>
        </span>
      </div>
    </>
  );
};
{
  /* <a href='https://www.freepik.com/vectors/website'>Website vector created by stories - www.freepik.com</a> 
  <a href='https://www.freepik.com/vectors/communication'>Communication vector created by freepik - www.freepik.com</a>
  */
}
export default PodBlogs;
