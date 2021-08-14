const CourseForm = (props) => {
  return (
    <form onSubmit={props.handelAdd}>
      <input placeholder="Add your Course" 
      autoComplete='off'  type="text" id="name" onChange={props.handelChange} value={props.name} />
      <button type="submit" className='Add'>Add</button>
    </form>);



}



export default CourseForm;