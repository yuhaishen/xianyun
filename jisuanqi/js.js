/**
 * Created by yuhai on 2017/6/24.
 */
$(function () {
   var result=0;
   var str="";
   var stro=0;
   $('input').focus();
    $('input').eq(0).val(0);
   //清理非小数前面的0
  function quling(){
          str=$('input').eq(0).val();

          if(str.charAt(0)=='0'&&str.charAt(1)!='.')
              {
                  str=str.substr(1);
                  $('input').eq(0).val(str);
              }


  }
  // $(document).onkeydown(function () {
  //     quling();
  // })

     $('input').blur(function () {
        $(this).focus();
    });

    $('table div').click(function () {
        if($('input').eq(0).val()==result)
        {
            $('input').eq(0).val(0);
        }
        quling();
    });

    $('table div').eq(0).click(function () {
         stro=result;
     //   alert(stro);
    });
    $('table div').eq(1).click(function () {
        $('input').eq(0).val(stro);
    });
    $('table div').eq(2).click(function () {
        str=$('input').eq(0).val();
        str=str.substring(0,str.length-1);
        $('input').eq(0).val(str);
    });

    $('table div').eq(3).click(function () {
        result=0;
        $('input').eq(0).val(0);
    });
    $('table div').eq(4).click(function () {
        stro+=result;
    });

    $('table div').eq(5).click(function () {
        stro*=result;
    });
    $('table div').eq(6).click(function () {
        stro=0;
    });

    // alert($('table div').get(4).innerHTML);
    $('table div').eq(7).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'/');
    });
    $('table div').eq(8).click(function () {
        // alert($('input').eq(0).val());
        $('input').eq(0).val($('input').eq(0).val()+'7');
    });
    $('table div').eq(9).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'8');
    });
    $('table div').eq(10).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'9');
    });
    $('table div').eq(11).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'*');
    });
    $('table div').eq(12).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'4');
    });
    $('table div').eq(13).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'5');
    });
    $('table div').eq(14).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'6');
    });

    $('table div').eq(15).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'-');
    });
    $('table div').eq(16).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'1');
    });
    $('table div').eq(17).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'2');
    });
    $('table div').eq(18).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'3');
    });
    $('table div').eq(19).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'+');
    });
    $('table div').eq(20).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'0');
    });
    $('table div').eq(21).click(function () {
        $('input').eq(0).val($('input').eq(0).val()+'.');
    });

    $('table div').eq(22).click(function () {

    });


    $('table div').eq(23).click(function () {
        result=eval(result+$('input').eq(0).val());
        $('input').eq(0).val(result);


    });


    $('input').keydown(function (e) {

        if(e.keyCode>=65&&e.keyCode<=90)
        { return false;}
        quling();
        if(e.keyCode==13||e.keyCode==100)
        {
            result=eval(result+$('input').eq(0).val());
            $('input').eq(0).val(result);
        }
    });



});

