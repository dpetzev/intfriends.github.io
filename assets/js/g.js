function store() {
    localStorage.setItem('name', nm.value);
    localStorage.setItem('email', email.value);
    localStorage.setItem('message', message.value);
    document.getElementById("result").innerHTML = localStorage.getItem("email");
    
}
