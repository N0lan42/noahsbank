function Home(){
  const ctx = React.useContext(UserContext);
  //const newU = ctx.users[1].name;
  //console.log(ctx.users[1].name);
  var newU = '';
  if (ctx.users.length > 1) {
    newU = "Welcome " + (ctx.users[1].name);
  }

  else {
    newU = "Please login";
  } ;

  return (
    <>
    
    <h2>{newU}</h2>
    
    <Card
      txtcolor="bl1ack"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
      css=".bg-dark.bg-gradient"
    />
</>
  );  
}
