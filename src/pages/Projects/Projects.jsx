import React from "react";
import "./Projects.css";
import Spin from "react-reveal/Spin";

function Projects() {
  return (
    <>
      <div className="container project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          here are my top recent projects with live link and source code
        </p>
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://img.freepik.com/free-photo/delicious-burger-with-fresh-ingredients_23-2150857908.jpg?uid=R164187097&ga=GA1.1.123056461.1726748667&semt=ais_hybrid"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Next.js</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">burger shop website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://nextjs-burger-app-lake.vercel.app/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://img.freepik.com/premium-photo/real-estate-agent-holding-key-with-tiny-red-house_1230717-166767.jpg?w=900"
                    alt="project3"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">HTML</span>
                  <span className="card-detail-badge">CSS</span>
                  <span className="card-detail-badge">JavaScript</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">real estate website</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://abdullatifyousuf.github.io/demo_website/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full Stack</span>
                  <img
                    src="https://img.freepik.com/free-vector/cartoon-bookstore-interior-with-books-shelves_107791-20532.jpg?t=st=1737040624~exp=1737044224~hmac=63791e13c7e1ff4214770f49dc84aeef8ef12dfd2c14b5bf61a774c778edfa61&w=1060"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title">
                    <h5 className="text-uppercase">weather App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://weatherappreact-5d0d6.web.app/"
                    target="_blank"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
}

export default Projects;
