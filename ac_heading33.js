$(function () {

    var allp_li = $('.entry-content *');

    if(allp_li[0].innerHTML != "　　　"){

        return false;

    };

    var allp_li_len = allp_li.length;
    var aryp_li = [];
    var fix_p_li = [];

    for(var i = 0; i < allp_li_len - 1 ; i++){

        aryp_li.push(allp_li[i].innerHTML);

    };

    var last_h33e = aryp_li.lastIndexOf('　　　　');
    var p_li = [];
    var fix_p_li = [];
    var flg_s = 0;
    var flg_c = 0;
    var flg_e = 0;
    var h33style = [];

    for(var i = 0; i < last_h33e +1    ; i++){

        if(allp_li[i].innerHTML === "　　" && allp_li[i + 1].localName === "h5"){

            if(flg_c === 0){
                $(allp_li[i]).replaceWith('<div class="new_h33s"></div>');

                flg_s = 1;
                continue;
            }
//*****************************************************************************************************
            else if(flg_c === 1){

            var h33style_02 = [];
            var p_li_02 = [];

            loop: for(var ii = i; ii < last_h33e + 1   ; ii++){

            if(allp_li[ii].innerHTML === "　　" && allp_li[ii + 1].localName === "h5"){
                flg_s = 1;
                flg_c = 0;
                continue;
            };

            if(flg_s === 1){

                h33style_02.push('<p class="ac_h33_ns">' + allp_li[ii].innerHTML + '</p>');
                h33style_02.push('<div class="ac_h33_contents_ns">');

                $(allp_li[ii]).addClass('h33s');

                var w2= 0;

                for(var w2 = 0; w2 < h33style_02.length ;w2++){
                    p_li_02.push(h33style_02[w2]);
                };

                h33style_02.length = 0;

                flg_s = 0;
                flg_c = 1;

                continue;

            }

            else if(allp_li[ii].innerHTML === "　　　　"){

                $(allp_li[ii]).removeClass().addClass("h33e");

                p_li_02.push('</div>');

                flg_c = 0;
                flg_e = 1;

                var fix_p_li = p_li_02.join('');

                p_li.push(fix_p_li);
                p_li_02.length = 0;


                flg_s = 0;
                flg_c = 1;

                flg_e = 0;
                i = ii + 1;

                for(var iii = ii+1; iii < last_h33e + 1;iii++){

                    if(allp_li[iii].innerHTML === "　　"){

                        break;
                    }
                    else if(allp_li[iii].innerHTML === "　　　　"){

                        break loop;
                    };
                };

            }

            else if(flg_c === 1){

                p_li_02.push(allp_li[ii].outerHTML);

                $(allp_li[ii]).addClass('h33c');

            };

            };

};
//*****************************************************************************************************

        };

        if(flg_s === 1){

            h33style.push('<p class="ac_h33">' + allp_li[i].innerHTML + '</p>');
            h33style.push('<div class="ac_h33_contents">');

            $(allp_li[i]).addClass('h33s');

            var w2= 0;

            for(var w2 = 0; w2 < h33style.length   ;w2++){
                p_li.push(h33style[w2]);
            };

            h33style.length = 0;

            flg_s = 0;
            flg_c = 1;

            continue;

        }

        else if(allp_li[i].innerHTML === "　　　　"){
            $(allp_li[i]).removeClass().addClass("h33e");

            if(i === last_h33e){
               p_li.push('<p style="text-align:right; font-size:10px;"><a class="ac_link" style="text-decoration:none" href="https://anywaycactus.hateblo.jp/">Customized by Twirus</a></p>');

            };

            p_li.push('</div>');

            flg_c = 0;
            flg_e = 1;
        }

        else if(flg_c === 1){

            p_li.push(allp_li[i].outerHTML);

            $(allp_li[i]).addClass('h33c');

        };

        if(flg_e === 1){

            var fix_p_li = p_li.join('');

            $('.new_h33s').html(fix_p_li);
            $('.new_h33s').addClass("ac_heading33").removeClass('new_h33s');

            p_li.length = 0;

            flg_e = 0;
        };

    };
    $('.h33s').remove();
    $(".h33c").remove();
    $(".h33e").remove();

});
