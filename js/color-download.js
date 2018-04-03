    document.write("<p> Generated Android Color Code <a id=\"btnXmlGenerate\"  class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#style-modal\"> Download</a> <input class='form-control' type=\"text\" id=\"copyText\" value=\"Click to copy color\" /> </p>");  
//            array with colors 
    
            var a = [['#F44336','red500'],["#FFEBEE","red50"],["#FFCDD2","red100"],["#EF9A9A","red200"],["#E57373","red300"],["#EF5350","red400"],["#F44336","red500"],["#E53935","red600"],["#D32F2F","red700"],["#C62828","red800"],["#B71C1C","red900"],["#FF8A80","reda100"],["#FF5252","reda200"],["#FF1744","reda400"],["#D50000","reda700"],['#E91E63','pink500'],["#FCE4EC","pink50"],["#F8BBD0","pink100"],["#F48FB1","pink200"],["#F06292","pink300"],["#EC407A","pink400"],["#E91E63","pink500"],["#D81B60","pink600"],["#C2185B","pink700"],["#AD1457","pink800"],["#880E4F","pink900"],["#FF80AB","pinka100"],["#FF4081","pinka200"],["#F50057","pinka400"],["#C51162","pinka700"],['#9C27B0','purple500'],["#F3E5F5","purple50"],["#E1BEE7","purple100"],["#CE93D8","purple200"],["#BA68C8","purple300"],["#AB47BC","purple400"],["#9C27B0","purple500"],["#8E24AA","purple600"],["#7B1FA2","purple700"],["#6A1B9A","purple800"],["#4A148C","purple900"],["#EA80FC","purplea100"],["#E040FB","purplea200"],["#D500F9","purplea400"],["#AA00FF","purplea700"],['#673AB7','dpurple500'],["#EDE7F6","dpurple50"],["#D1C4E9","dpurple100"],["#B39DDB","dpurple200"],["#9575CD","dpurple300"],["#7E57C2","dpurple400"],["#673AB7","dpurple500"],["#5E35B1","dpurple600"],["#512DA8","dpurple700"],["#4527A0","dpurple800"],["#311B92","dpurple900"],["#B388FF","dpurplea100"],["#7C4DFF","dpurplea200"],["#651FFF","dpurplea400"],["#6200EA","dpurplea700"],['#3F51B5','indigo500'],["#E8EAF6","indigo50"],["#C5CAE9","indigo100"],["#9FA8DA","indigo200"],["#7986CB","indigo300"],["#5C6BC0","indigo400"],["#3F51B5","indigo500"],["#3949AB","indigo600"],["#303F9F","indigo700"],["#283593","indigo800"],["#1A237E","indigo900"],["#8C9EFF","indigoa100"],["#536DFE","indigoa200"],["#3D5AFE","indigoa400"],["#304FFE","indigoa700"],['#2196F3','blue500'],["#E3F2FD","blue50"],["#BBDEFB","blue100"],["#90CAF9","blue200"],["#64B5F6","blue300"],["#42A5F5","blue400"],["#2196F3","blue500"],["#1E88E5","blue600"],["#1976D2","blue700"],["#1565C0","blue800"],["#0D47A1","blue900"],["#82B1FF","bluea100"],["#448AFF","bluea200"],["#2979FF","bluea400"],["#2962FF","bluea700"],['#03A9F4','lightblue500'],["#E1F5FE","lightblue50"],["#B3E5FC","lightblue100"],["#81D4FA","lightblue200"],["#4FC3F7","lightblue300"],["#29B6F6","lightblue400"],["#03A9F4","lightblue500"],["#039BE5","lightblue600"],["#0288D1","lightblue700"],["#0277BD","lightblue800"],["#01579B","lightblue900"],["#80D8FF","lightbluea100"],["#40C4FF","lightbluea200"],["#00B0FF","lightbluea400"],["#0091EA","lightbluea700"],['#00BCD4','cyan500'],["#E0F7FA","cyan50"],["#B2EBF2","cyan100"],["#80DEEA","cyan200"],["#4DD0E1","cyan300"],["#26C6DA","cyan400"],["#00BCD4","cyan500"],["#00ACC1","cyan600"],["#0097A7","cyan700"],["#00838F","cyan800"],["#006064","cyan900"],["#84FFFF","cyana100"],["#18FFFF","cyana200"],["#00E5FF","cyana400"],["#00B8D4","cyana700"],['#009688','teal500'],["#E0F2F1","teal50"],["#B2DFDB","teal100"],["#80CBC4","teal200"],["#4DB6AC","teal300"],["#26A69A","teal400"],["#009688","teal500"],["#00897B","teal600"],["#00796B","teal700"],["#00695C","teal800"],["#004D40","teal900"],["#A7FFEB","teala100"],["#64FFDA","teala200"],["#1DE9B6","teala400"],["#00BFA5","teala700"],['#4CAF50','green500'],["#E8F5E9","green50"],["#C8E6C9","green100"],["#A5D6A7","green200"],["#81C784","green300"],["#66BB6A","green400"],["#4CAF50","green500"],["#43A047","green600"],["#388E3C","green700"],["#2E7D32","green800"],["#1B5E20","green900"],["#B9F6CA","greena100"],["#69F0AE","greena200"],["#00E676","greena400"],["#00C853","greena700"],['#8BC34A','lightgreen500'],["#F1F8E9","lightgreen50"],["#DCEDC8","lightgreen100"],["#C5E1A5","lightgreen200"],["#AED581","lightgreen300"],["#9CCC65","lightgreen400"],["#8BC34A","lightgreen500"],["#7CB342","lightgreen600"],["#689F38","lightgreen700"],["#558B2F","lightgreen800"],["#33691E","lightgreen900"],["#CCFF90","lightgreena100"],["#B2FF59","lightgreena200"],["#76FF03","lightgreena400"],["#64DD17","lightgreena700"],['#CDDC39','lime500'],["#F9FBE7","lime50"],["#F0F4C3","lime100"],["#E6EE9C","lime200"],["#DCE775","lime300"],["#D4E157","lime400"],["#CDDC39","lime500"],["#C0CA33","lime600"],["#AFB42B","lime700"],["#9E9D24","lime800"],["#827717","lime900"],["#F4FF81","limea100"],["#EEFF41","limea200"],["#C6FF00","limea400"],["#AEEA00","limea700"],['#FFEB3B','yellow500'],["#FFFDE7","yellow50"],["#FFF9C4","yellow100"],["#FFF59D","yellow200"],["#FFF176","yellow300"],["#FFEE58","yellow400"],["#FFEB3B","yellow500"],["#FDD835","yellow600"],["#FBC02D","yellow700"],["#F9A825","yellow800"],["#F57F17","yellow900"],["#FFFF8D","yellowa100"],["#FFFF00","yellowa200"],["#FFEA00","yellowa400"],["#FFD600","yellowa700"],['#FFC107','amber500'],["#FFF8E1","amber50"],["#FFECB3","amber100"],["#FFE082","amber200"],["#FFD54F","amber300"],["#FFCA28","amber400"],["#FFC107","amber500"],["#FFB300","amber600"],["#FFA000","amber700"],["#FF8F00","amber800"],["#FF6F00","amber900"],["#FFE57F","ambera100"],["#FFD740","ambera200"],["#FFC400","ambera400"],["#FFAB00","ambera700"],['#FF9800','orange500'],["#FFF3E0","orange50"],["#FFE0B2","orange100"],["#FFCC80","orange200"],["#FFB74D","orange300"],["#FFA726","orange400"],["#FF9800","orange500"],["#FB8C00","orange600"],["#F57C00","orange700"],["#EF6C00","orange800"],["#E65100","orange900"],["#FFD180","orangea100"],["#FFAB40","orangea200"],["#FF9100","orangea400"],["#FF6D00","orangea700"],['#FF5722','deeporange500'],["#FBE9E7","deeporange50"],["#FFCCBC","deeporange100"],["#FFAB91","deeporange200"],["#FF8A65","deeporange300"],["#FF7043","deeporange400"],["#FF5722","deeporange500"],["#F4511E","deeporange600"],["#E64A19","deeporange700"],["#D84315","deeporange800"],["#BF360C","deeporange900"],["#FF9E80","deeporangea100"],["#FF6E40","deeporangea200"],["#FF3D00","deeporangea400"],["#DD2C00","deeporangea700"]];     

            
        
            a.forEach(function(item,index,array){
                if(index % 15 == 0){
                    document.write("<div class='clearfix'></div>");
                }        
               document.write("<div class='block' data-color='" + item[0] +"' style='background-color:"+ item[0] +";' onClick = 'colorClick(\""+item[0]+"\",\""+item[1]+"\")'></div>");
            });
        
        
            var b = [['#795548','brown500'],["#EFEBE9","brown50"],["#D7CCC8","brown100"],["#BCAAA4","brown200"],["#A1887F","brown300"],["#8D6E63","brown400"],["#795548","brown500"],["#6D4C41","brown600"],["#5D4037","brown700"],["#4E342E","brown800"],["#3E2723","brown900"],['#9E9E9E','grey500'],["#FAFAFA","grey50"],["#F5F5F5","grey100"],["#EEEEEE","grey200"],["#E0E0E0","grey300"],["#BDBDBD","grey400"],["#9E9E9E","grey500"],["#757575","grey600"],["#616161","grey700"],["#424242","grey800"],["#212121","grey900"],['#607D8B','bluegrey500'],["#ECEFF1","bluegrey50"],["#CFD8DC","bluegrey100"],["#B0BEC5","bluegrey200"],["#90A4AE","bluegrey300"],["#78909C","bluegrey400"],["#607D8B","bluegrey500"],["#546E7A","bluegrey600"],["#455A64","bluegrey700"],["#37474F","bluegrey800"],["#263238","bluegrey900"],["#000000","black"],["#FFFFFF","white"]];
        
            b.forEach(function(item,index,array){
                if(index % 11 == 0){
                    document.write("<div class='clearfix'></div>");
                }        
               document.write("<div class='block' data-color='" + item[0] +"' style='background-color:"+ item[0] +";' onClick = 'colorClick(\""+item[0]+"\",\""+item[1]+"\")'></div>");
            });

            function colorClick(color,colorName){
                /* Get the text field */
                var copyText = document.getElementById("copyText");
                copyText.value = "<color name=\""+colorName+"\">"+color+"</color>";

                /* Select the text field */
                copyText.select();

                /* Copy the text inside the text field */
                document.execCommand("Copy");

                /* Alert the copied text */
                alert("Copied the text: " + copyText.value);

            }

           
        $(document).ready(function() {
            function h(a, b, c) {
                var d = document.getElementById(b).innerText,
                    e = document.createElement("a");
                c = c || "text/xml", e.setAttribute("download", a), e.setAttribute("href", "data:" + c + ";charset=utf-8," + encodeURIComponent(d)), e.click()
            }

            var i = "colors.xml";
            $("#downloadLink").click(function() {
                h(i, "xmlColors", "text/xml");
                
            });

            a.forEach(function(item,index,array){
                $('#xmlColors').append("&lt;color name=\""+item[1]+"\"&gt;"+item[0]+"&lt;/color&gt;<br>"); 
             });
                 
             b.forEach(function(item,index,array){
                $('#xmlColors').append("&lt;color name=\""+item[1]+"\"&gt;"+item[0]+"&lt;/color&gt;<br>"); 
             });
           
        });


