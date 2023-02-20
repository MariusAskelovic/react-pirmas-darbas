import './Footer.css'

const Footer = (props) => {
  return (
    <div className="Footer">
      {props.name} &copy; Visos teisės saugomos {props.year}
    </div>
  )
}

export default Footer
