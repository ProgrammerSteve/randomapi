import Image from "next/image";
import {IconMoodHappy,IconMessage,IconDots} from '@tabler/icons'

const Post=({PostInfo})=>{
  const {imageUrl,name, message, likes,userLiked, comments}=PostInfo
  
  return(
    <div className="mb-8 w-full h-40 flex">
      <div className="w-1/4 h-full overflow-hidden relative rounded-2xl">
        <Image src={imageUrl} alt={'splash image'}  objectFit='cover' layout="fill"/>
      </div>
      <div className="w-3/4 h-full rounded-2xl px-5">
        
        <div className="w-full h-1/6 px-5 pt-2 rounded-t-2xl font-bold bg-gray-200">
          {`${name}`}
        </div>
        <div className="w-full h-2/3 px-5 pt-2  bg-gray-200">
          
            {message}
      
        </div>
        
        <div className="w-full h-1/6 flex justify-between px-3 rounded-br-2xl bg-gray-100">
          <span className="flex gap-2">
          {`${likes} `}<IconMoodHappy fill={`${userLiked?"yellow":"none"}`}/> {`${comments.length} `}<IconMessage/>
          </span>
          <span>
          <IconDots/>
          </span>
        </div>

      </div>
    </div>
  )
}
export default Post;