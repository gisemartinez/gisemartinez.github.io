$(function(){
//para cambiar estilos segun la interfaz mobil.muy trucho,cambiar
if(jQuery.browser.mobile)
{
    alert("es movil");
}else{
    console.log("no es movil")
};
var user = $("input[name=user]");
var pass = $("input[name=pass]");
            $('button[type="submit"]').click(function(e) {
                e.preventDefault();
                //valido solo si no estan vacios. deben chequear mas cosas
                if (user.val() != ""  &&  pass.val()!= "") {
                    //$("body").scrollTo("#output");
                    $("#output").addClass("alert alert-success animated fadeInUp")
                        .html("Bienvenido de vuelta " 
                            + "<span style='text-transform:uppercase'>" 
                            + user.val() 
                            + "</span>");
                    $("#output").removeClass(' alert-danger');
                    $("input").css({
                        "height":"0",
                        "padding":"0",
                        "margin":"0",
                        "opacity":"0"
                    });

                    //change button text 
                    $('button[type="submit"]')
                        .html("continue")
                            .removeClass("btn-info")
                                .addClass("btn-default")
                                    .click(function()
                                            {
                                                $("body")
                                                    .children()
                                                        .remove();
                                                $("body").load("dash/blank.html")

                                            }
                                        )
                        
                    //show avatar
                    $(".avatar").css({
                        "background-image": "url('http://api.randomuser.me/0.3.2/portraits/women/35.jpg')"
                    });
                } else {
                    //remove success mesage replaced with error message
                    $("#output").removeClass(' alert alert-success');
                    if(user.val()=="")
                    {
                        (pass.val()=="")?
                            $("#output").addClass("alert alert-danger animated fadeInUp").html("Olvidó ambos campos")
                        :   $("#output").addClass("alert alert-danger animated fadeInUp").html("Olvidó el username")
                    }else{
                        $("#output").addClass("alert alert-danger animated fadeInUp").html("Olvidó el password");
                    }
             
                }
                //console.log(textfield.val());

            });
});
