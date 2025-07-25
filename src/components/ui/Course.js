

const Course = ({name, date}) => {
  return (
       <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-700 cursor-pointer">
            <p className="my-4">{name}</p>
            <p className="my-4">{date}</p>
        </div>
  )
}

export default Course