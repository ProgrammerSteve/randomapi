import styles from "./PostContainer.module.css"

const PostContainer=({children})=>{
  return(
    <div className={`w-3/4 h-full overflow-y-scroll pt-5 ${styles.postContainer}`}>
      {children}
    </div>
  )
}
export default PostContainer;