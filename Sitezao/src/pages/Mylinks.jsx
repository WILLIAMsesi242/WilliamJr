import '../components/Lindo.css'

function Mylink() {

    const linkUrl = "https://wa.me/5519986039634";
    const linkText = "Whatsapp";
    
    const linkStyle = {
      color: 'green',
      textDecoration: 'none',
      fontSize: '20px',
    }

    return (
      <div>

      <a href={linkUrl} target="_blank" style={linkStyle}>
          {linkText}
        </a>
      
      </div>
    );
    }

    export default Mylink