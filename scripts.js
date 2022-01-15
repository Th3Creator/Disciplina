function pnHojes () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaSeg", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaSeg"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojest () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaTer", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaTer"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojesqua () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaQua", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaQua"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojesqui () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaQuint", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaQuint"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojessex () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaSex", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaSex"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojessab () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("TarefaSab", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("TarefaSab"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnHojesdomin () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Hoje';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("Data", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("Data"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnMaterias() {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons);

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Materias';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');

    segundadiv.innerHTML = '<p class="psegundadiv">Fundamentos de Cálculo <br>Fundamento de Geo.Analí <br><br>Metodologia de Pesquisa<br><br>Informática e Sociedade<br><br> Fundamentos de S.I<br><br> Programação de computadores</p>';

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    body.classList.replace('body', 'body2');
}


function pnPendentes () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Pendentes';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("Pendentes", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("Pendentes"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnDatas () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Datas';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("Data", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("Data"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}

function pnUrgente () {
    const dias = document.querySelector('.dias');
    const localizacao = document.querySelector('.localizacao');
    const buttons = document.querySelector('.buttons');
    const blcdias = document.querySelector('.blcdias');
    const body = document.querySelector('.body');
    const h1 = document.querySelector('.h1')

    h1.parentNode.removeChild(h1);
    dias.parentNode.removeChild(dias);
    buttons.parentNode.removeChild(buttons)

    const primeiradiv = document.createElement('div');
    primeiradiv.classList.add('primeiradiv');

    const h2divnova = document.createElement('h2');
    h2divnova.classList.add('h2divnova');
    h2divnova.innerText = 'Urgente';
    
    const segundadiv = document.createElement('div');
    segundadiv.classList.add('segundadiv');


    const ul = document.createElement('ul');
    ul.classList.add('ul');
    segundadiv.appendChild(ul);

    const inputcreate = document.createElement('input');
    inputcreate.placeholder = "Tarefa...";
    inputcreate.type = "text";
    inputcreate.classList.add('inputtarefa');

    const buttoncreate = document.createElement('button');
    buttoncreate.classList.add('buttonadc');
    buttoncreate.innerText= "Adicionar";

    const buttoncreatesave = document.createElement('button');
    buttoncreatesave.classList.add('buttonsave')
    buttoncreatesave.innerText= "Salvar";

    const buttoncreateloading = document.createElement('button');
    buttoncreateloading.classList.add('buttonloading');
    buttoncreateloading.innerText= "Carregar";

    blcdias.insertBefore( primeiradiv, localizacao);
    primeiradiv.appendChild(h2divnova);
    primeiradiv.appendChild(segundadiv);
    primeiradiv.appendChild(inputcreate);
    primeiradiv.appendChild(buttoncreate);
    localizacao.appendChild(buttoncreatesave);
    localizacao.appendChild(buttoncreateloading);
    body.classList.replace('body', 'body2');

    buttoncreate.addEventListener('click', function() {
        const licreate = document.createElement('li');
        licreate.classList.add('li')
        const valor = document.querySelector('.inputtarefa').value;
        const span = document.createElement('span'); // Span para deixar o icone de exclusão ao lado do li
        const icone = document.createElement('i');
        icone.classList.add('close')
        icone.classList.add('far')
        icone.classList.add('fa-trash-alt')
        const ulcreate = document.querySelector('.ul');

        licreate.innerHTML = valor;

        ulcreate.appendChild(licreate)
        licreate.appendChild(span)
        licreate.appendChild(icone)

        var close = document.getElementsByClassName("close");

        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
        var div = this.parentElement;
         div.style.display = "none";
    }
  }
    })

    buttoncreatesave.addEventListener('click', function(){
        const ulpracopiar = document.querySelector('.ul');
        var ulclone = ulpracopiar.cloneNode(true);
        /* Eu vou ter que copiar cada texto da li e depois adicionar um for percorrendo por cada uma e adci-
        onando no documento 
        */
        var textli = [];
        for(var i = 0; i < ulpracopiar.children.length; i++){
          var api = ulpracopiar.children[i].cloneNode(true).innerText;
          textli.push(api);
        }       
       localStorage.setItem("Urgente", JSON.stringify(textli));
       document.location.reload(true);
    })

    buttoncreateloading.addEventListener('click', function(){
       
        var itensarray = JSON.parse(localStorage.getItem("Urgente"));
        console.log(itensarray)

        for(var c = 0; c < itensarray.length; c++) {
            const simboraul = document.querySelector('.ul');
            // alternativa colocar em objeto
           var liadc = document.createElement('li');
           liadc.classList.add('li')

            liadc.innerText = itensarray[c];
           simboraul.appendChild(liadc);
        }
    })
}


/* 
 Botão que limpa o cache 
 Salvar e relogar o site 
 Toltip do viadinho 

*/