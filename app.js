$(document).ready(function () {
  $(".add-btn").on("click", function () {
    let $tarefaInput = $("input").val();
    let $novoItem = $("<li>");

    $novoItem.text($tarefaInput);

    $("ul").append($novoItem);

    $("input").val("");
  });

  $("ul").on("click", "li", function () {
    $(this).toggleClass("tarefa-completa");
  });

  $(".limpar-lista-btn").click(function () {
    $("ul li").remove();
  });

  /*$(".limpar-feito-btn").on('click', function(){
    $("li").filter(function() {
      return $(this).css('text-decoration') === 'line-through';
    }).remove();
  })*/ /* Tentativa de implementar a função de limpar apenas as tarefas concluidas */
  

  $("form").on("submit", function (e) {
    e.preventDefault();
  });
});
