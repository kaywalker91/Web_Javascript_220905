
    // document.getElementById("num1");
    // document.querySelector("#num1");

    //->단일 객체 반환
    // ->
    // var id1 = document.document.getElementById("num1");
    // id1.value=10;

    // document.getElementsByClassName("classname");
    // document.querySelectorAll(".classname");

    //배열 형태로 반환
    // ->
    // var class1 = document.getElementsByClassName("classname");
    // class1[0].value=10;

    // document.getElementsByName("name");
    // document.getElementsByTagName("name");

    // document.querySelectorAll("name");

    //getElements는 정적배열 querySelectorAll는 동적배열

    function plus(){

        var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var res = document.getElementById("res");

        var number1 = parseInt(num1.value);
        var number2 = parseInt(num2.value);
        var sum = number1+number2;

        console.log(number1);
        console.log(number2);

        res.innerHTML = sum;

    }

    function input(){

        var name = document.querySelector("#name").value;
        var job = document.querySelector("#job").value;
        var city = document.querySelector("#city").value;
        var output = document.querySelector("#output");
        
        if(job == "군인"){
            output.innerHTML = "이름 : "+name+ " / 직업 : "+job+" / 사는곳 : " +city;
        }
        
    }

