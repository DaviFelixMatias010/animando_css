function add_card(){
    //criando elementos

    const card = document.createElement("div");
    const content = document.createElement("div");
    const container = document.querySelector(".container");
    const tag_h2 = document.createElement("h2");
    const tag_h3 = document.createElement("h3");
    const btn = document.createElement("a");
    const title = document.getElementById("title");
    const card_content = document.getElementById("content_form");
    
    //add conteudo
    let content_title = title.value;
    let content_card = card_content.value;
    tag_h2.innerHTML = content_title;
    tag_h3.innerHTML = content_card;
    btn.innerHTML = "saiba mais";

    //acessando atributos

    content.className = "content";
    card.className = "cards";
    btn.className = "info";
    
    //adicionando elementos
    
    container.appendChild(card);
    card.appendChild(content);
    content.appendChild(tag_h2);
    content.appendChild(tag_h3);
    content.appendChild(btn);

}