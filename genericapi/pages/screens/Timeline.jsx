import Post from '../../components/post/Post';
import PostContainer from '../../components/postContainer/PostContainer';
import { postStream } from '../../utils/utils';

const Timeline=()=>{
  return(
  <PostContainer>
    <Post PostInfo={postStream[0]}/>
    <Post PostInfo={postStream[1]}/>
    <Post PostInfo={postStream[2]}/>
    <Post PostInfo={postStream[3]}/>
  </PostContainer>
  )
}

export default Timeline;