const textBox = document.getElementById("text");
const buttons = document.getElementsByClassName("item");
let string = "";

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
    
        if (e.target.innerText === '=')
        {   
            string = string.replace("x", "*");
            string = eval(string);
        }
        else if (e.target.innerText === 'AC')
        {
            string = "";
        }
        else if (e.target.innerText==="+/-")
        {
            if (string[0]==='-')
            {
                string = string.replace("-","+");
            }
            else if (string[0]==='+')
            {
                string = string.replace("-","+");
            }
        }
        else
        {
            string += e.target.innerText;
        }
        
        textBox.value = string;
        // console.log(string);
    })
})

window.addEventListener("keydown", (e)=>{
    string = textBox.value;
    if (e.key>='0' && e.key<='9' || e.key=='+' || e.key=='-' || e.key=='/' || e.key=='%' || e.key=='*')
    {
        string +=e.key;
    }

    if (e.key === 'Backspace')
    {
        string = string.substring(0, string.length - 1)
    }
    if (e.key === 'Enter')
    {
        console.log(textBox.value)
        console.log(string)
        string = eval(textBox.value);
    }
    else
    {

    }
    textBox.value = string;
    // console.log(string);
})