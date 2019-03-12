window.addEventListener('DOMContentLoaded', function(){    
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

     let deadLine = '2019-2-28';
    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

         function updateClock() {
             let t = getTimeRemaining(endtime);

             if(t.seconds < 10) {
                seconds.textContent = '0' + t.seconds;
             } else if(t.minutes < 10) {
                minutes.textContent = '0' + t.minutes;     
             } else if(t.hours < 10) {
                hours.textContent = '0' + t.hours;                          
             } else{
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
            }

           if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
         }
    }

    setClock('timer',deadLine);

    // Modal
        function showPopup(selector) {
            let button = document.querySelectorAll(selector),
                closeButton = document.querySelector(selector),
                overlay = document.querySelector('.overlay'),
                close = document.querySelector('.popup-close');
        for(var i = 0; i < button.length; i++) {
            button[i].addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });    
        }
        close.addEventListener('click', function(){
            overlay.style.display = 'none';
            closeButton.classList.remove('more-splash');
            document.body.style.overflow = '';              
        });    
        }

         showPopup('.description-btn');
  


        //  let age = document.getElementById('age');
        //  function showUser(surname, name) {
        //      alert("Пользователь " + surname + " " + name + ", его возраст " + age.value);
        //  }
        //  showUser();
         
});



