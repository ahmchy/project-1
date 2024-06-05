const Project = ({ projects }) => {
  console.log(projects);
  return (
    <div id="projects" className="max-w-screen-xl mx-auto">
      <p className="mt-10 text-6xl font-bold "> Projects</p>
      <div className="grid grid-cols-3 gap-5 pb-5">
        {" "}
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-auto my-10 border border-solid shadow-md bg-warning/10 border-warning/5 rounded-small bg-zinc-50 hover:shadow-xl hover:border hover:border-primary lg:my-14"
          >
            <a
              //   to={`/projectdetails/${project.slug}`}
              className="flex flex-col "
            >
              {/* <div className="">
                <img
                  className="bg-blue-50 rounded-tl-xl rounded-tr-xl lg:rounded-tr-none lg:rounded-l-xl "
                //   src="./default-img.png"
                  src={
                    project.image === null
                      ? "./default-project-img.png"
                      : project.image
                    // project.image
                  }
                  
                  alt="Shoes"
                />
              </div> */}
              {/* <div className="flex flex-col justify-around pt-5 mt-5 md:pt-0">
                <div className="">
                  <h2 className="text-2xl font-semibold capitalize md:text-2xl lg:text-3xl">
                    {project.name}
                  </h2>
                  <div className="pt-6 text-black md:text-xs lg:text-lg lg:block px-9 lg:pl-10">
                    {project.description.length > 110
                      ? project.description.slice(0, 50) + "..."
                      : project.description}{" "}
                  </div>
                </div>
                <div className="flex justify-center gap-4 pb-8 pt-7 md:pb-5 lg:py-5 lg:gap-4">
                  {project.technologies.map((item, index) => (
                    <div
                      className="px-2 text-white transition duration-300 ease-in-out bg-accent/60 rounded-mid hover:scale-125 drop-shadow-xl"
                      key={index}
                    >
                      <p className="capitalize">{item}</p>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="flex items-center justify-center p-10 bg-gray-200">
                <div className="container">
                  <div className="text-center">
                    <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-3xl">
                      {project.name}
                    </h2>
                    <h3 className="text-xl md:text-2xl mt-10">
                      {project.description.length > 110
                        ? project.description.slice(0, 50) + "..."
                        : project.description}{" "}
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 mt-10 justify-center">
                    
                    {
                       project.technologies.map((item, index) => (
                    <div key={index} className="m-3">
                      <a
                        href="#"
                        title="Quicktoolz On Facebook"
                        className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                      >
                        <span className="mx-auto">{item}</span>
                      </a>
                    </div>


                       ))
                    }

                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
