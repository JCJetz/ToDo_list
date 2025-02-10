//Marcar/Desmarcar tareas como completadas
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
  });
 
  //Click on X to delte Todos
  $("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
      $(this).remove();
    });
    event.stopPropagation();
  });
 //Añadir nueva tarea cuando se presiona Enter
 $("input[type='text']").keypress(function(event){
   if(event.which === 13){
     //grabbing new todo from input
     var todoText = $(this).val();  // Obtener el texto del input
     $(this).val("");  // Limpiar el input
     // Crear y añadir nueva tarea, new li and add to ul
     $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + " </li>")
   }
 });
 // Mostrar/ocultar el input con animación
 $(".fa-plus").click(function(){
   $("input[type='text'").fadeToggle();
 });