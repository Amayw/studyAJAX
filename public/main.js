//请求css
document.querySelector("#getcss").onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/index.css");
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const child = document.createElement("style");
      child.innerHTML = request.response;
      document.head.appendChild(child);
    }
  };
  request.send();
};

//请求js
document.querySelector("#getjs").onclick = () => {
  const request2 = new XMLHttpRequest();
  request2.open("GET", "/new.js");
  request2.onreadystatechange = () => {
    if (request2.readyState === 4 && request2.status === 200) {
      console.log("hi");
      const el = document.createElement("script");
      el.innerHTML = request2.response;
      document.body.appendChild(el);
    }
  };
  request2.send();
};

//请求html
document.querySelector("#gethtml").onclick = () => {
  const request3 = new XMLHttpRequest();
  request3.open("GET", "/new.html");
  request3.onreadystatechange = () => {
    if (request3.readyState === 4 && request3.status === 200) {
      console.log(request3.response);
      const el = document.createElement("div");
      el.innerHTML = request3.response;
      document.body.appendChild(el);
    }
  };
  request3.send();
};

//请求xml
document.querySelector("#getxml").onclick = () => {
  const request4 = new XMLHttpRequest();
  request4.open("GET", "/new.xml");
  request4.onreadystatechange = () => {
    if (request4.readyState === 4 && request4.status === 200) {
      const content = request4.responseText;
      console.log(content);
    }
  };
  request4.send();
};

//请求json
document.querySelector("#getjson").onclick = () => {
  const request5 = new XMLHttpRequest();
  request5.open("GET", "/new.json");
  request5.onreadystatechange = () => {
    if (request5.readyState === 4 && request5.status === 200) {
      const obj = JSON.parse(request5.response);
      console.log(obj);
    }
  };
  request5.send();
};

//分页请求
let n = 1;
document.querySelector("#getpage").onclick = () => {
  const request6 = new XMLHttpRequest();

  request6.open("GET", `/page${n + 1}.json`);
  console.log(n);
  request6.onreadystatechange = () => {
    if (request6.readyState === 4 && request6.status === 200) {
      const arr = JSON.parse(request6.response);
      arr.forEach((item) => {
        const el = document.createElement("li");
        el.textContent = item.id;
        document.querySelector("ul").appendChild(el);
      });
      n = n + 1;
      console.log(n);
    }
  };
  request6.send();
};
