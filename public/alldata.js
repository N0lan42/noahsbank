function AllData(){

    const [data, setdata] = React.useState('');

    React.useEffect(() => {
      //fetch all account from API
      fetch('/account/all')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setdata(JSON.stringify(data));
        });
      }, []);


  return (
    <>
    <h5>All Data in Store</h5>
    {data}
    </>
  );
}
