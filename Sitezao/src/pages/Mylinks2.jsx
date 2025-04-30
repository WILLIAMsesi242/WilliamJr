import '../components/Lindo.css'

function Mylink2() {

  const linkUrl1 = "https://www.instagram.com/_gordin.019/"
  const linkText1 = "Instagram";

  const linkStyle1 = {
    color: 'purple',
    textDecoration: 'none',
    fontSize: '20px',
  }

  return (

  <a href={linkUrl1} target="_blank" style={linkStyle1}>
  {linkText1}
</a>

)
}

export default Mylink2