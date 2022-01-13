var data=0;
a=document.getElementById("counting").innerText;
a.innerText= data;

function increment() {
    data=data+1;
    document.getElementById("counting").innerText= data;
}

function decrement() {
    data=data-1;
    document.getElementById("counting").innerText= data;
}

