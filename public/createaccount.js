function CreateAccount(){
  const firebaseConfig = {
    apiKey: "AIzaSyALvzrkLKXqRhxSepoZJ2eP2riY2uYBwEA",
    authDomain: "badbankcap-425be.firebaseapp.com",
    projectId: "badbankcap-425be",
    storageBucket: "badbankcap-425be.appspot.com",
    messagingSenderId: "163691827582",
    appId: "1:163691827582:web:f3c13712d8ca38c53f632f"
  }; 
  (async () => {
    try {
        firebase.initializeApp(firebaseConfig);
        //if user is logged in, it persists through refreshes, this eliminates that issue
        await firebase.auth().signOut();
        const createUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword("example@mit.edu", "secret")
            console.log('createUserResult', createUserResult)
        firebase.auth().signOut();
    } catch(e) {
        console.log(e);
    }
  })();
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    />
  )
}

function CreateMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  
  const ctx = React.useContext(UserContext);
  function handle(){
    const createUserResult = firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
  console.log(createUserResult);

    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
      var res  = await fetch(url);
      var data = await res.json();
      console.log(data);
      userEmail.innerHTML = `Hello ${email}`;
      const balance = data.balance;
      const name = data.name;
      ctx.users.push({name,email,password,balance});
    })();
    props.setShow(false);
  }    

  return (<>

    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}>Create Account</button>

  </>);
}