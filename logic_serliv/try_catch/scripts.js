let obj = {name: 'Daniel', email: 'daniel@server.com'};

try {
    document.querySelector('output').innerHTML = `Name: ${obj.name} - Email: ${obj.email}`;
} catch (e) {
    console.log(e);
    console.log(e.message);
    alert(`It went bad !!! ${e.message}`);
} finally {
   // alert('End of program');
}
