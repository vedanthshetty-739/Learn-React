
function Header(props){
    const {banner, paragraph} = props;
    console.log(paragraph)
    return (
      <>
        <h1>{banner}</h1>
        <p>{paragraph}</p>
      </>
       
    );
  }


  export default Header;