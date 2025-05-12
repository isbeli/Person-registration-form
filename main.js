   function Pessoa(nome, idade, corFavorita) {
      this.nome = nome;
      this.idade = idade;
      this.corFavorita = corFavorita;
    }

    let pessoas = [];

    document.getElementById("my-form").addEventListener("submit", function (e) {
      e.preventDefault();

      let nome = document.getElementById("nome").value;
      let idade = parseInt(document.getElementById("idade").value);
      let cor = document.getElementById("cor").value;

      let novaPessoa = new Pessoa(nome, idade, cor);
      pessoas.push(novaPessoa);

      mostrarListaParcial();
      e.target.reset();
    });

    function mostrarListaParcial() {
      const div = document.getElementById("resultados");
      div.innerHTML = "<h3>Lista de Pessoas:</h3>";
      pessoas.forEach((p, i) => {
        div.innerHTML += `<div class="pessoa">${i + 1}. ${p.nome}, ${p.idade} anos, Cor favorita: ${p.corFavorita}</div>`;
      });
    }

    function finalizarCadastro() {
      if (pessoas.length === 0) {
        alert("Adicione pelo menos uma pessoa antes de finalizar.");
        return;
      }

      mostrarListaParcial();
      const div = document.getElementById("resultados");

      // Comparação: mais velha
      let maisVelha = pessoas[0];
      pessoas.forEach(p => {
        if (p.idade > maisVelha.idade) {
          maisVelha = p;
        }
      });

      div.innerHTML += `<h3>Comparações:</h3>`;
      div.innerHTML += `<p>👵 Pessoa mais velha: <strong>${maisVelha.nome}</strong> (${maisVelha.idade} anos)</p>`;

      // Comparação: cor favorita azul
      let azul = pessoas.filter(p => p.corFavorita.toLowerCase() === "azul");
      if (azul.length > 0) {
        div.innerHTML += `<p>💙 Pessoas com cor favorita <strong>azul</strong>:</p><ul>`;
        azul.forEach(p => div.innerHTML += `<li>${p.nome}</li>`);
        div.innerHTML += `</ul>`;
      } else {
        div.innerHTML += `<p>💙 Ninguém escolheu azul como cor favorita.</p>`;
      }
    }