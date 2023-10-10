function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
 // const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState('');  
  const ctx = React.useContext(UserContext);  
  var email = '';
  if (ctx.users.length > 1) {
    email =  (ctx.users[1].email);
  }

  else {
    email = "Please login";
  } ;
  function handle(){
    // const user = ctx.users.find((user) => user.email == email);
    const url = `/account/findOne/${email}`;
    (async () => {
      var res  = await fetch(url);
      var data = await res.json();
      console.log(data);
      
      
      props.setStatus('Your balance is: ' + data.balance);
    })();

    if (!email) {
      props.setStatus('fail!')      
      return;      
    }

    setBalance(email.balance);
    console.log(email);
    ;      
    props.setShow(false);
  }

  return (<>

    Email<br/>
    <input type="input" 
      className="form-control" 
      placeholder={email} 
      /><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>
        Check Balance
    </button>

  </>);
}