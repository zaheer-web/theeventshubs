import React from 'react'
import GalleryHero from './GalleryHero'
import AllPhotos from './AllPhotos'
import Divider from '../home/Divider'
import GallerySection from './GallerySection'
import ReelsSection from './ReelsSection'


function Gallery() {
  return (
    <>
    <GalleryHero/>
    <Divider/>
    <AllPhotos/>
    <Divider/>
    <ReelsSection/>

    <Divider/>
    <GallerySection/>

    
    </>
  )
}

export default Gallery