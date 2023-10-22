function quote() {
    let r = Math.floor(Math.random() * 4) + 1;

    switch (r) {
        case 1: document.getElementById("quote").textContent = "\"A rose by any other name would smell as sweet.";
            document.getElementById("author").textContent = "	-William Shakespeare";
            break;

        case 2: document.getElementById("quote").textContent = "\"Ask not what your country can do for you;- ask what you can do for your country.	\"";
            document.getElementById("author").textContent = "	-John Kennedy";
            break;

        case 3: document.getElementById("quote").textContent = "\“Thinking is the hardest work there is, which is the probable reason why so few engage in it.\"";
            document.getElementById("author").textContent = "	-HENRY FORD ";
            break;

        case 4: document.getElementById("quote").textContent = "\" Imagination is more important than knowledge.\"";
            document.getElementById("author").textContent = "	-Albert Einstein";
            break;

    }
}