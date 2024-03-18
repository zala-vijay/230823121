function App(props) {
    return (
      <>
      <div style={{"backgroundColor":"black","padding":"5px","marginTop":"10px"}}>
        <p style={{"color":"white","fontSize":"10px","margin":"0px","padding":"0px"}}>{props.title}</p>      
      </div>
      <div style={{"backgroundColor":"grey","padding":"10px"}}>
        <p style={{"color":"white","fontSize":"10px","margin":"0px","padding":"0px"}}>{props.content}</p>
      </div>
      </>
    );
  }
  
  export default App;