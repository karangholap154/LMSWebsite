import React, { useContext, useEffect, useState } from "react";
import {AppContext} from '../../context/AppContext'
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import YouTube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {

  const {enrolledCourses, calculateChapterTime} = useContext(AppContext)
  const { courseId } = useParams()
  const [courseData, setCourseData] = useState(null)
  const [openSections, setOpenSections] = useState({})
  const [playerData, setPlayerData] = useState(null)

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course)
      }
    })
  }

  useEffect(() => {
    getCourseData()
  }, [enrolledCourses])

  // Toggle section open state
  const toggleSection = (index) => {
    setOpenSections((prev) => (
      { ...prev, [index]: !prev[index] }
    ))
  }
  
  return (
    <>
      <div className="flex flex-col gap-10 p-4 sm:p-10-reverse md:grid md:grid-cols-2 md:px-36">
        {/* For Left Column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>

          <div className="pt-5">
            {courseData && courseData.courseContent.map((chapter, index) => (
              <div
                key={index}
                className="mb-2 bg-white border border-gray-300 rounded"
              >
                <div
                  className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex items-center gap-2">
                    <img
                      className={`transform transition-transform ${
                        openSections[index] ? "rotate-180" : ""
                      }`}
                      src={assets.down_arrow_icon}
                      alt="arrow"
                    />
                    <p className="text-sm font-medium md:text-base">
                      {chapter.chapterTitle}
                    </p>
                  </div>
                  <p className="text-sm md:text-default">
                    {chapter.chapterContent.length} Lectures -{" "}
                    {calculateChapterTime(chapter)}
                  </p>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openSections[index] ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <ul className="py-2 pl-4 pr-4 text-gray-600 list-disc border-t border-gray-300 md:pl-10">
                    {chapter.chapterContent.map((lecture, i) => (
                      <li key={i} className="flex items-start gap-2 py-1">
                        <img
                          src={false ? assets.blue_tick_icon : assets.play_icon}
                          alt="play"
                          className="w-4 h-4 mt-1"
                        />
                        <div className="flex items-center justify-between w-full text-xs text-gray-800 md:text-default">
                          <p className="text-sm font-medium">
                            {lecture.lectureTitle}
                          </p>
                          <div className="flex gap-2">
                            {lecture.lectureUrl && (
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    ...lecture, chapter: index + 1, lecture: i + 1
                                  })
                                }
                                className="text-blue-500 cursor-pointer"
                              >
                                Watch
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate this course:</h1>
            <Rating initialRating={0}/>
          </div>
          
        </div>

        {/* For Right Column */}
        <div className="md:mt-10">
          {playerData ? (
            <div>
              <YouTube videoId={playerData.lectureUrl.split('/').pop()} iframeClassName='w-full aspect-video' />
              <div className="flex items-center justify-between mt-1">
                <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                <button className="text-blue-600">{false ? 'Completed' : 'Mark Complete'}</button>
              </div>
            </div>
            ) : 
            < img src={courseData ? courseData.courseThumbnail : ''} alt="" />
          }
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Player;