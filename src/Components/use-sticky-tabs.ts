"use client"

import { useState, useEffect, useRef } from "react"

export const useStickyTabs = (features: any[]) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRefs = useRef<HTMLDivElement>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false)
  const [stickyOffset, setStickyOffset] = useState(0)

  const activeFeature = features[activeIndex]

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRefs.current) return

      const section = sectionRefs.current
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrollY = window.scrollY

      // Calculate the original position of the section
      const sectionTop = scrollY + rect.top
      const triggerPoint = sectionTop - windowHeight * 0.2

      // Check if we should make it sticky
      const shouldBeSticky = scrollY >= triggerPoint && !hasCompletedCycle

      if (shouldBeSticky && !isSticky) {
        setIsSticky(true)
        setStickyOffset(sectionTop)
        setIsScrolling(true)
      }

      if (isSticky && !hasCompletedCycle) {
        // Calculate scroll progress while sticky
        const stickyScrollDistance = windowHeight * 1.5 // Distance to scroll through all tabs
        const scrollProgress = Math.max(0, Math.min(1, (scrollY - triggerPoint) / stickyScrollDistance))

        // Calculate which tab should be active
        const newActiveIndex = Math.min(features.length - 1, Math.floor(scrollProgress * features.length))
        setActiveIndex(newActiveIndex)

        // Check if we've completed the cycle
        if (scrollProgress >= 0.95 && newActiveIndex === features.length - 1) {
          setHasCompletedCycle(true)
          setIsSticky(false)
          setIsScrolling(false)
        }
      }

      // Reset if scrolling back up
      if (scrollY < triggerPoint - 100) {
        setIsSticky(false)
        setHasCompletedCycle(false)
        setActiveIndex(0)
        setIsScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [features.length, isSticky, hasCompletedCycle])

  const handleTabClick = (index: number) => {
    setActiveIndex(index)
    setIsScrolling(false)

    // Re-enable scroll behavior after a short delay
    setTimeout(() => {
      if (isSticky) {
        setIsScrolling(true)
      }
    }, 1000)
  }

  return {
    activeIndex,
    sectionRefs,
    isScrolling,
    isSticky,
    hasCompletedCycle,
    activeFeature,
    handleTabClick,
    stickyOffset
  }
}
