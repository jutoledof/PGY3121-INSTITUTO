$(document).ready(function() {

    $("#creaCarta").hide();
    $("#formulario").submit(function(event) {
    
          event.preventDefault();
          let rut =  $("#rut").val();
          let nombre =  $("#nombre").val();
          let apellidoPaterno =  $("#apellidoPaterno").val();
          let apellidoMaterno =  $("#apellidoMaterno").val();
          let fechaNacimiento =  $("#fechaNacimiento").val();
          let edad =  $("#edad").val();
          let genero =  $("#genero").val();
          let email =  $("#email").val();
          let celular =  $("#celular").val();
          let profesion =  $("#profesion").val();
          let motivacion =  $("#motivacion").val();
    
          let flag = true;
          if (rut.length < 9 || rut.length > 10) 
          {
            $("#mrut").html(' • El Rut debe tener entre 9 y 10 caracteres.');
            flag = false;
          }
          else
          {
              $("#mrut").html('');
          }
    
          if (nombre.length < 3 || nombre.length > 20) 
          {
            $("#mnombre").html(' • El Nombre debe tener entre 3 y 20 caracteres.');
            flag = false;
          }
          else
          {
              $("#mnombre").html('');
          }
    
          if (apellidoPaterno.length < 3 || apellidoPaterno.length > 20) 
          {
            $("#mapellidoPaterno").html(' • El Apellido Paterno debe tener entre 3 y 20 caracteres.');
            flag = false;
          }
          else
          {
              $("#mapellidoPaterno").html('');
          }
    
          if (apellidoMaterno.length < 3 || apellidoMaterno.length > 20) 
          {
            $("#mapellidoMaterno").html(' • El Apellido Materno debe tener entre 3 y 20 caracteres.');
    
            flag = false;
          }
          else
          {
              $("#mapellidoMaterno").html('');
          }
    
          if(fechaNacimiento ==="") 
          {
          
            $("#mfechaNacimiento").html(' • Debe ingresar Fecha Nacimiento.');
            flag = false;
          }
          else
          {
              $("#mfechaNacimiento").html('');
          }
    
          if (edad === "") 
          {
            $("#medad").html(' • Debe seleccionar Edad.');
            flag = false;
          }
          else
          {
              $("#medad").html('');
          }
    
          if (genero === "") 
          {
            $("#mgenero").html(' • Debe seleccionar un Genero.');
            flag = false;
          }
          else
          {
              $("#mgenero").html('');
          }
          
          if(email ==="") 
          {
            $("#memail").html(' • Debe ingresar Email.');
            flag = false;
          }
          else
          {
              $("#memail").html('');
          }
    
          if (celular.length < 9 || celular.length > 12) 
          {
            $("#mcelular").html(' • El Celular debe tener entre 9 y 12 caracteres.');
            flag = false;
          }
          else
          {
              $("#mcelular").html('');
          }
    
          if(profesion ==="") 
          {
            $("#mprofesion").html(' • Debe ingresar Profesión.');
            flag = false;
          }
          else
          {
              $("#mprofesion").html('');
          }
    
          if(motivacion ==="") 
          {
            $("#mmotivacion").html(' • Debe ingresar Motivación.');
            flag = false;
          }
          else
          {
              $("#mmotivacion").html('');
          }
    
          if(flag)
          { 
            $("#creaCarta").show();
            $("#alertas").removeClass("text-bg-danger");
    
              let texto ="Estimados señores,<br>"+
    
              "<br><br>Me dirijo a ustedes para presentar mi candidatura para la posición de apoyo ambiental en Chiloé, la cual vi anunciada en su sitio web. Creo que mi formación y experiencia pueden ser de gran utilidad para su organización."+
              
              "<br><br>Mi nombre es "+nombre+" "+apellidoPaterno+" "+apellidoMaterno +" y tengo "+edad+" años. Soy graduado en "+profesion+" y tengo una gran motivación por trabajar en el campo del medio ambiente, especialmente en la preservación de la biodiversidad de Chiloé."+
              
              "<br><br>Además, he tenido la oportunidad de participar en proyectos de investigación relacionados con el medio ambiente y la conservación de especies nativas. Esto me ha permitido desarrollar habilidades en el manejo de herramientas y técnicas de investigación, así como en la interpretación de datos científicos."+
              
              "<br><br>Estoy seguro de que mi experiencia y conocimientos pueden ser útiles para su organización y estoy muy motivado para aprender más sobre las iniciativas y proyectos que desarrollan. Quedo a su disposición para ampliar cualquier información que necesiten en relación a mi formación y experiencia."+
              
              "<br><br>Quedo atento a sus comentarios y me pueden contactar a través de mi correo electrónico "+email+" o al número de celular "+celular+" para cualquier consulta adicional."+
              
              "<br><br>Agradezco de antemano la oportunidad de presentar mi candidatura y quedo a la espera de su respuesta."+
              
              "<br><br>Atentamente,<br><br><br>"+
              
              nombre+" "+apellidoPaterno+" "+apellidoMaterno;
    
              $("#carta").html(texto);
              event.preventDefault();
    
          }
          else
          {
            $("#alertas").addClass("col-sm text-bg-danger");
            $("#creaCarta").hide();
          }
    
    
    
      
    });
      
    });