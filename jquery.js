
    $(document).ready(function(){
        // $('#menuID').show();
        // $('.icon').css({'background-color':'#F7F7F6','width':'110%'})
        $('.icon').click(function(){
            $('.icon').css({'display':'none'});
            $('.close').show();
            $('#menuID').css({"background-color": "#F7F7F6","margin-top":"0px"});
            $('#menuID').slideToggle(500);
        });
        $('.close').css({'background-color':'#F7F7F6','width':'110%'})
        $('.close').click(function(){
            $('#menuID').slideToggle(500);
            $('#menuID').css({"background-color": "#F7F7F6","margin-top":"0px"});
            $('.close').css({'display':'none'});
            $('.icon').show();
        });
        $('#East').click(function(){
            $('.triangle-East').hide();
            // $('.menu-East').css({'flex-wrap':'wrap'})
            $('#menu-East').slideToggle();
        });
        $('#North').click(function(){
            $('.triangle-North').hide();
            // $('.menu-East').css({'flex-wrap':'wrap'})
            $('#menu-North').slideToggle();
        })
        $('#West').click(function(){
            $('.triangle-West').hide();
            // $('.menu-East').css({'flex-wrap':'wrap'})
            $('#menu-West').slideToggle();
        })
        $('#South').click(function(){
            $('.triangle-South').hide();
            // $('.menu-East').css({'flex-wrap':'wrap'})
            $('#menu-South').slideToggle();
        });
    });
    // 
    