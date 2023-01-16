let log=[{
    username:'720721104057@hicet.ac.in',
    password:'123'
},{
    username:'720721104015@hicet.ac.in',
    password:'123'
},{
    username:'720721104050@hicet.ac.in',
password:'123'
},{
    username:'720721104048@hicet.ac.in',
    password:'123'}]

function validate()
{
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
    for(i=0;i<log.length;i++){
        if(username === log[i].username && password === log[i].password)
        {
            window.location.assign("index2.html");
            alert("login successfull");
            return false
        }
        else{
            // alert("login failed");
        }
    }
}
// if(username=="log.username"&&password=="log.password")
// {
//     window.location.assign("index2.html");
//     alert("login successfull");
//     return false
// }
// else{
//     alert("login failed")
// }
// }

