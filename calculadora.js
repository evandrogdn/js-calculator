var calc = document.getElementById("calculadora");

const criaBotao = (widht, text, operador = false) => {
    let el = document.createElement("input");
    el.setAttribute("type", "button");
    el.setAttribute("value", text);
    el.style.width = widht;
    el.style.marginRight = "10px";
    el.style.marginTop = "10px";
    el.addEventListener("click", () => calculator(el, operador));
    return el;
};

const criaVisor = () => {
    let el = document.createElement("input");
    el.style.width = "146px";
    el.setAttribute("id", "visor");
    return el;
};

const lineBreak = () => document.createElement("br");

var aux;

const calculator = (element, operator) => {
    if (operator && element.value !== "="){
        if (aux) aux += document.getElementById("visor").value;
        else aux = document.getElementById("visor").value;
        document.getElementById("visor").value = "";
        aux += element.value
    } else if (element.value === "="){
        aux += document.getElementById("visor").value;
        document.getElementById("visor").value = eval(aux);
    } else {
        if (document.getElementById("visor").value !== '') document.getElementById("visor").value += element.value;
        else document.getElementById("visor").value += element.value;
    }
};

const calculadora = () => {
    calc.appendChild(criaVisor());
    calc.appendChild(lineBreak());

    calc.appendChild(criaBotao("30px", "9"));
    calc.appendChild(criaBotao("30px", "8"));
    calc.appendChild(criaBotao("30px", "7"));
    calc.appendChild(criaBotao("30px", "/", true));
    calc.appendChild(lineBreak());

    calc.appendChild(criaBotao("30px", "6"));
    calc.appendChild(criaBotao("30px", "5"));
    calc.appendChild(criaBotao("30px", "4"));
    calc.appendChild(criaBotao("30px", "*", true));
    calc.appendChild(lineBreak());

    calc.appendChild(criaBotao("30px", "3"));
    calc.appendChild(criaBotao("30px", "2"));
    calc.appendChild(criaBotao("30px", "1"));
    calc.appendChild(criaBotao("30px", "+", true));
    calc.appendChild(lineBreak());

    calc.appendChild(criaBotao("30px", "0"));
    calc.appendChild(criaBotao("70px", "=", true));
    calc.appendChild(criaBotao("30px", "-", true));
};

calculadora();
