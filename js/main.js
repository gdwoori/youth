        const toogleBtn = document.querySelector('.toggle-btn');
        const menu = document.querySelector('.menu-1');

            toogleBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
        });
        
        function closePop() {
            document.all['layer_popup'].style.visibility = "hidden";
        }

        function linking() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('https://www.duranno.com/qt/view/bible.asp?qtDate=');
            }else{
                return false;
            }
        }

        function qthp() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('https://www.duranno.com/qt/');
            }else{
                return false;
            }
        }

        function gdwrhp() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('http://gdwoori.org/');
            }else{
                return false;
            }
        }

        function gdwryt() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('https://www.youtube.com/@user-fq2px5ss8t/featured');
            }else{
                return false;
            }
        }

        function youthsns() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('');
            }else{
                return false;
            }
        }

        function readingJesus() {
            if (confirm("링크로 이동합니다.") ==true){
                window.open('https://soundcloud.com/ouwa4isy5ly2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing');
            }else{
                return false;
            }
        }