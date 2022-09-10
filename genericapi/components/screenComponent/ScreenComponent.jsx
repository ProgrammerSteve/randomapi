const ScreenComponent=({children})=>{
  return(
  <div className='h-full grow bg-blue-200'>
    <div className="w-full h-full flex justify-between pl-5">
      {children}
    </div>
  </div>
  )
}
export default ScreenComponent