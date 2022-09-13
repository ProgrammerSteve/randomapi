import PostContainer from "../../components/postContainer/PostContainer";
import Image from "next/image";
import { IconMoodHappy, IconDots, IconMessage } from "@tabler/icons";

const imageUrl="https://images.unsplash.com/photo-1662746038135-fa453567b14b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

const userLiked=true;
const comments=['','','']
const likes=5;

const GalleryPic=()=>{
  return(
    <div className="bg-red-500 h-64 w-48 flex flex-col">
    <div className="bg-green-500 grow w-48 relative">
      <Image src={imageUrl} alt={'splash image'}  objectFit='cover' layout="fill"/>
    </div>
    <div className="bg-yellow-500 h-10 w-48 flex justify-between items-center px-3">
          <span className="flex justify-start gap-2">
          {`${likes} `}<IconMoodHappy fill={`${userLiked?"yellow":"none"}`}/> {`${comments.length} `}<IconMessage/> 
          </span>
          <span>
          <IconDots/>
          </span>
    </div>
  </div>
  )
}

const generateGallery=(x)=>{
  const elements=[]
  for(let i=0;i<x;i++){
    elements.push(<GalleryPic/>)
  }
  return elements
}

const Gallery=()=>{
  return(
    <PostContainer>
      <div className="flex flex-row flex-wrap gap-5">

  {generateGallery(35)}


      </div>
    </PostContainer>
    
  )
}
export default Gallery;