<script>
$(function () {

    var allp_li = document.getElementsByTagName('p');

    var allp_li_len = allp_li.length;
    var aryp_li = [];
    var fix_p_li = [];



    for(var i = 0; i < allp_li_len - 1 ; i++){

        aryp_li.push(allp_li[i].innerHTML);

    };

    var last_h33e = aryp_li.lastIndexOf('h33e');

    for(var i = 0; i < last_h33e+1   ; i++){

        fix_p_li.push(allp_li[i]);

    };
    allp_li = fix_p_li;


    var p_li = [];
    var fix_p_li = [];
    var flg_s = 0;
    var flg_c = 0;
    var flg_e = 0;
    var h33style = [];

    var ccc = [];
    for(var i = 0; i < allp_li.length   ; i++){



        if(allp_li[i].innerHTML === "h33s"){


            $(allp_li[i]).replaceWith('<div class="new_h33s">????</div>');


            flg_s = 1;
            continue;
        };

        if(flg_s === 1){

            h33style.push('<p class="ac_entry_h33">' + allp_li[i].innerHTML + '</p>');
            h33style.push('<div class="ac_entry_h33_contents">');
            $(allp_li[i]).addClass("h33s_dl");

            var w2= 0;


            for(var w2 = 0; w2 < h33style.length  ;w2++){
                p_li.push(h33style[w2]);
            };

            h33style =[];




            flg_s = 0;
            flg_c = 1;

            continue;

        }

        else if(allp_li[i].innerHTML === "h33e"){
            $(allp_li[i]).removeClass().addClass("h33e");


            if(i === last_h33e){
               p_li.push('<p style="text-align:right; font-size:10px;"><a class="ac_link" style="text-decoration:none" href="https://anywaycactus.hateblo.jp/">Customized by Twirus</a></p>');
               };

            p_li.push('</div>');





            flg_c = 0;
            flg_e = 1;
        }

        else if(flg_c === 1){

            p_li.push('<p>' + allp_li[i].innerHTML + '</p>');


            $(allp_li[i]).addClass('h33c');


        };


        if(flg_e === 1){

            var fix_p_li = p_li.join('');

            $('.new_h33s').html(fix_p_li);
            $('.new_h33s').addClass("ac_h33").removeClass('new_h33s');

            p_li.length = 0;
            flg_e = 0;

        };

    };
    $(".h33c").remove();
    $(".h33e").remove();
    $('.h33s_dl').remove();

});
<script>
