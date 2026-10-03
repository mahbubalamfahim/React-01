

const Button = ({btnName,className}) => {
  return (
    <button className={`px-7 py-4 ${className} mr-3 text-white rounded-xl`}>{btnName}</button>
  )
}

export default Button