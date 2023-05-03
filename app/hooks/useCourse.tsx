"use client"
import { CourseSyllabus, QuaterType } from '@/DataType/DataType'
import React, { useCallback, useEffect, useState } from 'react'

const useCourse = (href:string, coursesquaters:CourseSyllabus[]) => {
    
    console.log("href ", href)
    const [course, setCourse] = useState<CourseSyllabus >({id: 0,
      title: "Loading",
      description: "Loading",
      basepath: "Loading",
      quaters: [
          {
              id: 0,
              title: "Loading",
              richtext: "Loading"
          }]})
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
   useEffect(() => {
    ( async () => {setLoading(true)
    let i =  coursesquaters.findIndex((item) => item.basepath == href)
    if(i > -1) {
        const newobj =  coursesquaters[i];
        setCourse(newobj);
        setLoading(false)
        return;
    }
    setError(true)
    setLoading(false);})()
    },[href, coursesquaters])
  return {course, loading, error}
}

export default useCourse