
function Login(){
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

// get elements
const email    = document.getElementById('email');
const password = document.getElementById('password');
const signIn    = document.getElementById('signIn');
const logout   = document.getElementById('logout');
const signInMsg = document.getElementById('signInMsg');
const routeMsg = document.getElementById('routeMsg');


// login state
firebase.auth().onAuthStateChanged(firebaseUser => {
  console.log("user", firebaseUser)
  //const uid = user.uid;
  //console.log(uid)
  if(firebaseUser){
    console.log('User is logged in');
      
  }
  else{
      console.log(firebaseUser + ' is not logged in');
      
  }
});


function callOpenRoute(){
  (async () => {
      let response = await fetch('/open');
     // let text     = await response.text();
      console.log('response.text:', response);
      // routeMsg.innerHTML = text;
  })();
};

function callAuthRoute(){
  // call server with token
if (firebase.auth().currentUser) {
  firebase.auth().currentUser.getIdToken()
  .then(idToken => {
      
      console.log('idToken:', idToken);
      //async "iffe" function -> auto-executes
      (async () => {
          let response = await fetch('/auth', {
              method: 'GET',
              headers: {
                  'Authorization': idToken
              }
          });
          
          console.log('response:', response);
          
      })();

  }).catch(e => console.log('e:', e));
} else {
  console.warn('There is currently no logged in user. Unable to call Auth Route.');
}
};


// function Login(){ /////////////////////////////////////////////////
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState(''); 
    

  return (
    <>
    
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={show ? 
        <LoginForm setShow={setShow} setStatus={setStatus}/> :
        <PostLogin setShow={setShow} setStatus={setStatus}/>  
        
      }
    />
    
    </>
  ) 
};
function Abutton() {
  return (
    <button type="submit" className="btn btn-light" onClick={callAuthRoute}>Auth</button>
  )
}

function PostLogin(props){
  const ctx = React.useContext(UserContext);
  return(<>
  
  
   
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>
        Authenticate again
    </button>
    
  </>);

};

// fetch('/account/all') `/account/login/${email}/${password}`
function LoginForm(props){
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState(''); 
 // const [username, setUsername] = React.useState('');
 const ctx = React.useContext(UserContext);
  
 
 function handle(){
    const uri = `/account/login/${email}/${password}`;
   // firebase.auth().signOut();
   const createUserResult = firebase
   
       .auth()
       .signInWithEmailAndPassword(email, password)
     console.log(createUserResult);
     
    (async () => {
      var res  = await fetch(uri);
      var data = await res.json();
     // console.log("email:" + data.balance);
     // console.log(email);
      userEmail.innerHTML = `Hello ${email}`;
      
      const balance = data.balance;
      const name = data.name;
      ctx.users.push({name,email,password,balance});
      

     

    })();
    
    props.setShow(false);
    if (!email) {
      console.log('one')      
      props.setStatus('fail!')      
      return;      
    }
    if (password == password) {
      console.log('two') 
                
      props.setStatus('');
      props.setShow(false);
      return email;      
    }
    console.log('three')          
    props.setStatus('fail!'); 
           
  } 
  function logout() {
    firebase.auth().signOut();
    var name     = 'null';
    var email    = 'null';
    var password = 'null';
    var balance  = 'null';
    ctx.users.push({name,email,password,balance});
    userEmail.innerHTML = ``;
  };

  return (<>
    
    Email<br/>
    <input type="email" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      id="email"
      onChange={e => setEmail(e.currentTarget.value)}/>
      <br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password}
      id="password" 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" className="btn btn-light" onClick={handle}>Login</button> <br/> <br/>
    <button type="submit" className="btn btn-light" onClick={logout}>Logout</button>
  </>);
} 
//<button onClick="{callAuthRoute()}">Call Route</button>

