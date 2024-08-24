import React, { useState } from "react";
import ToggleSwitch from "../Components/ToggleSwitch";
import MessageItem from "../Components/MessageItem";
import ProjectCard from "../Components/ProjectCard";

function Profile() {
  const [selectedOption, setSelectedOption] = useState("App");

  const options = [
    { name: "App", icon: "fa-house" },
    { name: "Message", icon: "fa-comment-dots" },
    { name: "Settings", icon: "fa-cog" },
  ];

  const handleClick = (option) => {
    setSelectedOption(option);
  };

  const [settings, setSettings] = useState({
    follow: false,
    answer: false,
    mention: false,
    launches: false,
    updates: true,
    newsletter: false,
  });
  const handleToggle = (key) => {
    setSettings((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };
  const messages = [
    {
      imgSrc: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Sophie B.",
      message: "Hi! I need more information...",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Alexander",
      message: "Awesome work, can you...",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/women/15.jpg",
      name: "Ivanna",
      message: "About files I can...",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/67.jpg",
      name: "Peterson",
      message: "Have a great afternoon...",
    },
    {
      imgSrc: "https://randomuser.me/api/portraits/men/26.jpg",
      name: "Bruce Mars",
      message: "Hi! I need more information...",
    },
  ];

  const projects = [
    {
      imageSrc:
        "https://cdn.educba.com/academy/wp-content/uploads/2022/12/ReactJS-Projects.jpg",
      title: "Modern",
      description:
        "As Uber works through a huge amount of internal management turmoil.",
      projectNumber: 1,
      team: [
        {
          imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
          name: "Jack Danial",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
          name: "Ronald Trump",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
          name: "Dany xaviar",
        },
      ],
    },
    {
      imageSrc:
        "https://www.crio.do/blog/content/images/2021/04/Javascript-projects---Resume-builder.png",
      title: "Scandinavian",
      description:
        "Music is something that every person has his or her own specific opinion about.",
      projectNumber: 2,
      team: [
        {
          imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
          name: "Uma Shankar",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
          name: "Kim John",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
          name: "Amir ghan",
        },
      ],
    },
    {
      imageSrc:
        "https://logicmojo.com/assets/dist/new_pages/images/react-intro.jpg",
      title: "Minimalist",
      description:
        "Different people have different taste, and various types of music.",
      projectNumber: 3,
      team: [
        {
          imgSrc: "https://randomuser.me/api/portraits/men/7.jpg",
          name: "Altaf Ali",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/8.jpg",
          name: "Mishel Kiz",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/9.jpg",
          name: "Umar Ashraf",
        },
      ],
    },
    {
      imageSrc:
        "https://miro.medium.com/v2/resize:fit:1358/1*B0CPQBb2NyTIeVx9tFSPRQ.png",
      title: "Gothic",
      description:
        "Why would anyone pick blue over pink? Pink is obviously a better color.",
      projectNumber: 4,
      team: [
        {
          imgSrc: "https://randomuser.me/api/portraits/men/10.jpg",
          name: "Anuree KS",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/11.jpg",
          name: "Bovas Ba ji",
        },
        {
          imgSrc: "https://randomuser.me/api/portraits/men/12.jpg",
          name: "Joshua Mthew",
        },
      ],
    },
  ];
  return (
    <>
      <div
        className="bg-black w-full rounded-2xl"
        style={{ backgroundColor: "#000", height: "200px" }}
      ></div>

      <div
        className="relative m-3"
        style={{ top: "-195px", backgroundColor: "transparent",zIndex: 1  }}
      >
        <div className="bg-white rounded-2xl p-2">
          <div className="bg-white  flex flex-col lg:flex-row items-center md:justify-between">
            <div className="flex gap-3  items-center bg-white ">
              <div className="bg-white ">
                <img
                  src="https://shanibacreative.com/wp-content/uploads/2020/06/membuat-foto-profil-yang-bagus-834x556.jpg"
                  className="rounded-full"
                  width={100}
                  alt="Profile"
                />
              </div>
              <div className="bg-white mt-2">
                <h5 className="font-bold bg-white">Darwin Jobs</h5>
                <p className="text-gray-300 bg-white text-sm">CEO/Co-Founder</p>
              </div>
            </div>
            <div className="flex space-x-4 bg-gray-100 p-2 rounded-lg md:mt-0 flex space-x-4  w-auto mr-3">
              {options.map((option) => (
                <button
                  key={option.name}
                  className={`flex items-center px-4 py-2 space-x-2 rounded-lg transition-all duration-500 ease-linear ${
                    selectedOption === option.name
                      ? "bg-white shadow-lg text-black"
                      : "bg-transparent text-gray-500"
                  }`}
                  onClick={() => handleClick(option.name)}
                >
                  <i
                    className={`fa ${option.icon}`}
                    style={{ backgroundColor: "transparent" }}
                  ></i>
                  <span style={{ backgroundColor: "transparent" }}>
                    {option.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 bg-white p-4 mt-2">
            <div className="bg-white">
              <h6 className="font-bold bg-white">Platform Settings</h6>

              <div className="  space-y-4 bg-white">
                <p className="text-gray-500 bg-white text-md font-bold mt-4">
                  Account
                </p>
                <ToggleSwitch
                  label="Email me when someone follows me"
                  checked={settings.follow}
                  onChange={() => handleToggle("follow")}
                />
                <ToggleSwitch
                  label="Email me when someone answers on my post"
                  checked={settings.answer}
                  onChange={() => handleToggle("answer")}
                />
                <ToggleSwitch
                  label="Email me when someone mentions me"
                  checked={settings.mention}
                  onChange={() => handleToggle("mention")}
                />
                <p className="text-gray-500 bg-white text-md font-bold mt-4">
                  Application
                </p>

                <ToggleSwitch
                  label="New launches and projects"
                  checked={settings.launches}
                  onChange={() => handleToggle("launches")}
                />
                <ToggleSwitch
                  label="Monthly product updates"
                  checked={settings.updates}
                  onChange={() => handleToggle("updates")}
                />
                <ToggleSwitch
                  label="Subscribe to newsletter"
                  checked={settings.newsletter}
                  onChange={() => handleToggle("newsletter")}
                />
              </div>
            </div>
            <div className="bg-white">
              <div className="flex justify-between bg-white">
                <h6 className="font-bold bg-white">Profile Information</h6>
                <i class="fa-solid fa-pencil bg-white me-3"></i>
              </div>
              <p className="bg-white">
                Hi, I'm Alec Thompson, Decisions: If you can't decide, the
                answer is no. If two equally difficult paths, choose the one
                more painful in the short term (pain avoidance is creating an
                illusion of equality).
              </p>
              <hr />
              <h6 className="bg-white font-bold pt-2">
                First Name:{" "}
                <span className="text-gray-400 bg-white font-normal">
                  Alen M.THompson
                </span>
              </h6>
              <h6 className="bg-white font-bold pt-2">
                Mobile:
                <span className="text-gray-400 bg-white font-normal">
                  (44) 123 1234 123
                </span>
              </h6>
              <h6 className="bg-white font-bold pt-2">
                Email:
                <span className="text-gray-400 bg-white font-normal">
                  alecthompson@mail.com
                </span>
              </h6>

              <h6 className="bg-white font-bold pt-2">
                Location:
                <span className="text-gray-400 bg-white font-normal">USA</span>
              </h6>
              <h6 className="bg-white font-bold pt-2">
                Social:
                <span className="text-gray-400 bg-white font-normal">
                  <i
                    class="fa-brands fa-facebook bg-white ml-2"
                    style={{ color: " #381cc4" }}
                  ></i>
                  <i
                    class="fa-brands fa-square-x-twitter bg-white ml-2"
                    style={{ color: "#000000" }}
                  ></i>
                  <i
                    class="fa-brands fa-square-instagram bg-white ml-2"
                    style={{ color: " #ff2e9d" }}
                  ></i>
                </span>
              </h6>
            </div>
            <div className="bg-white ml-4">
              <h6 className="font-bold bg-white">Messages</h6>

              {messages.map((msg, index) => (
                <MessageItem
                  key={index}
                  imgSrc={msg.imgSrc}
                  name={msg.name}
                  message={msg.message}
                />
              ))}
            </div>
          </div>
          <div className="p-6 bg-white">
            <h2 className="text-xl font-bold mb-2 bg-white">Projects</h2>
            <p className="text-gray-500 mb-4 bg-white">Architects design houses</p>
            <div className="grid grid-cols-1 bg-white lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  projectNumber={project.projectNumber}
                  team={project.team}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-black relative w-full rounded-2xl "
        style={{ backgroundColor: "#000", height: "200px",top: "-390px",zIndex: 0 }}
      ></div>

    </>
  );
}

export default Profile;
