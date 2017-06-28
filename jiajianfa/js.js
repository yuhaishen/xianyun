/**
 * Created by yuhai on 2017/6/6.
 */

window.onload=function (){
//初始化html内容
            var icount=prompt("你想出多少题目？","20");
            if(parseInt(icount)){
                icount=parseInt(icount);
                }else{
                    alert('您输入的非数字，无法执行操作');
                }

            var ol=document.getElementsByTagName('ol')[0];
            var    tmp=ol.innerHTML;
            for(var i=1;i<icount;i++)
                {
                    ol.innerHTML+=tmp;
                }

        //开始数学相关处理
            var table=document.getElementsByTagName('table');
            var deshu1;
            var deshu2,a,b,c,a_f,a_s,b_f,b_s,c_f,c_s,deshu1_f,deshu1_s,deshu2_f,deshu2_s,connect1,connect2;
            for(var i=0;i<table.length;i++) {

                do {
                     a = Math.floor(Math.random() * 100);
                     b = Math.floor(Math.random() * 100);
                     c = Math.floor(Math.random() * 100);
                    a_f = Math.floor(a / 10);
                    a_s = a % 10;
                    b_f = Math.floor(b / 10);
                    b_s = b % 10;
                    c_f = Math.floor(c/ 10);
                    c_s = c % 10;
                     var arr = ['+', '-'];
                     var fu1 = arr[Math.floor(Math.random() + 0.5)];
                     var fu2 = arr[Math.floor(Math.random() + 0.5)];
                     connect1 = a + fu1 + b;
                    connect2 = a + fu1 + b + fu2 + c;
                    deshu1 = eval(connect1);
                    deshu1_f=Math.floor(deshu1 / 10);
                    deshu1_s=deshu1%10;

                    deshu2 = eval(connect2);
                    deshu2_f=Math.floor(deshu2 / 10);
                    deshu2_s=deshu2%10;

                } while (deshu1 < 0 || deshu1 >= 100 || deshu2 < 0 || deshu2 > 99)
                // document.write(connect2 + "=" + deshu2+"<br>");
                // alert(li[i].getElementsByTagName('p')[0].innerHTML)
                document.getElementsByTagName('li')[i].getElementsByTagName('span')[0].innerHTML='&nbsp;&nbsp;'+connect2+'=';
                document.getElementsByTagName('li')[i].getElementsByTagName('span')[1].innerHTML=deshu2;
                var tmp_af=table[i].tBodies[0].rows[0].getElementsByTagName('td')[1];
                var tmp_as=table[i].tBodies[0].rows[0].getElementsByTagName('td')[2];
                var tmp_fu1=table[i].tBodies[0].rows[1].getElementsByTagName('td')[0];
                var tmp_bf=table[i].tBodies[0].rows[1].getElementsByTagName('td')[1];
                var tmp_bs=table[i].tBodies[0].rows[1].getElementsByTagName('td')[2];

                var tmp_deshu1f=table[i].tBodies[1].rows[0].getElementsByTagName('td')[1];
                var tmp_deshu1s=table[i].tBodies[1].rows[0].getElementsByTagName('td')[2];
                var tmp_fu2=table[i].tBodies[1].rows[1].getElementsByTagName('td')[0];
                var tmp_cf=table[i].tBodies[1].rows[1].getElementsByTagName('td')[1];
                var tmp_cs=table[i].tBodies[1].rows[1].getElementsByTagName('td')[2];

                var tmp_deshu2f=table[i].getElementsByTagName('tfoot')[0].rows[0].getElementsByTagName('td')[1];
                var tmp_deshu2s=table[i].getElementsByTagName('tfoot')[0].rows[0].getElementsByTagName('td')[2];

                if(a_f>0) {tmp_af.getElementsByTagName('div')[0].style.opacity=1 ;}
                tmp_as.getElementsByTagName('div')[0].style.opacity=1;
                tmp_fu1.getElementsByTagName('div')[0].style.opacity=1;
                if(b_f>0)  {tmp_bf.getElementsByTagName('div')[0].style.opacity=1;}
                tmp_bs.getElementsByTagName('div')[0].style.opacity=1;

                if(deshu1_f>0)  {tmp_deshu1f.getElementsByTagName('div')[0].style.opacity=1;}
                tmp_deshu1s.getElementsByTagName('div')[0].style.opacity=1;
                tmp_fu2.getElementsByTagName('div')[0].style.opacity=1;
                if(c_f>0)  {tmp_cf.getElementsByTagName('div')[0].style.opacity=1;}
                tmp_cs.getElementsByTagName('div')[0].style.opacity=1;

                if(deshu2_f>0)  {tmp_deshu2f.getElementsByTagName('div')[0].style.opacity=1;}
                tmp_deshu2s.getElementsByTagName('div')[0].style.opacity=1;

                if(a_f>0) {tmp_af.getElementsByTagName('div')[0].innerHTML= a_f;}
                tmp_as.getElementsByTagName('div')[0].innerHTML=a_s;
                tmp_fu1.getElementsByTagName('div')[0].innerHTML=fu1;
                if(b_f>0)  {tmp_bf.getElementsByTagName('div')[0].innerHTML=b_f;}
                tmp_bs.getElementsByTagName('div')[0].innerHTML=b_s;

                if(deshu1_f>0)  {tmp_deshu1f.getElementsByTagName('div')[0].innerHTML=deshu1_f;}
                tmp_deshu1s.getElementsByTagName('div')[0].innerHTML=deshu1_s;
                tmp_fu2.getElementsByTagName('div')[0].innerHTML=fu2;
                if(c_f>0)  {tmp_cf.getElementsByTagName('div')[0].innerHTML=c_f;}
                tmp_cs.getElementsByTagName('div')[0].innerHTML=c_s;

                if(deshu2_f>0)  {tmp_deshu2f.getElementsByTagName('div')[0].innerHTML=deshu2_f;}
                tmp_deshu2s.getElementsByTagName('div')[0].innerHTML=deshu2_s;

             //   alert(getStyle(body,'height'));

            }







}