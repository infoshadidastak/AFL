var jfa = jQuery.noConflict();
jfa(document).ready(function(){
    jfa('.on').click(function(){
        var str = jfa(this).attr('class');
        var str1 = jfa.trim(str);
        var d1=str1.indexOf(" ");
        var kc = 50 + '%';
        var strRs=str1.substr(d1+1,str.length);  
        //console.log(strRs);
        console.log(jfa('.'+strRs));
        jfa('.'+strRs).removeClass('jf_off');
       jfa(this).addClass('jf_on');
       jfa('.jf_on + .jf_slide').css("left",kc); 
    });
     jfa('.off').click(function(){
        var str = jfa(this).attr('class');
        var str = jfa(this).attr('class');
        var str1 = jfa.trim(str);
        var toTal = str.length;
        var d1=str1.indexOf(" ");
        var strRs=str1.substr(d1+1,str.length);
        console.log(strRs);
        jfa('.'+strRs).removeClass('jf_on');
       jfa(this).addClass('jf_off');
       jfa('.jf_off + .on + .jf_slide').css("left",0); 
    });
});