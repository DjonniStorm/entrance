(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&l(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <div id="about">
    <div id="name">
      <h1>Пазушкин Илья Павлович</h1>
      <h3>Желаемая должность:<br/> участник курса Frontend-разработчик</h3>
    </div>
    <div id="photo">
      <img src="/profile_image.png" alt="фото"/>
    </div>
  </div>
  <hr />
  <div>
    <h2>Образование</h2>
    <div class="center">
      <h3>Специальность: Программный инженер</h3>
      <h4>2023-2027, бюджетная форма обучения</h4>
      <h3>Факультет информационных систем и технологий <br /> 
        Ульяновский государственный технический университет <br />
        г. Ульяновск
      </h3>
      <h3>Курс обучения: 2</h3>
    </div>
  </div>
  <hr />
  <div>
    <h2>Профессиональные навыки</h2>
    <div class="center">
      <ul>
        <li class="normal">HTML</li>
        <li class="normal">CSS</li>
        <li class="normal">JavaScript</li>
        <li class="maybe-normal">TypeScript</li>
        <li class="maybe-normal">Vite</li>
      </ul>
    </div>
  </div>
  <hr />
  <div>
    <h2>Цели посещения курсов</h2>
    <div class="center" id="purpose">
      <h3>Цели:</h3>
      <ul>
        <li>Заполнение пробелов в знаниях CSS и JS</li>
        <li>Изучение современных подходов к разработке</li>
        <li>Изучение новых фреймворков</li>
      </ul>
      <h5>О курсах узнал <a href="https://codecup.online/" target="_blank">на сайте</a></h5>
    </div>
  </div>
  <hr />
  <div>
    <h2>Контакты:</h2>  
    <div class="center" id="contacts">
      <ul>
        <li>телефон: <a href="tel:+79876392410" target="_blank">+7-987-639-24-10</a></li>
        <li>почта: <a href="mailto:i.pazushkin@vk.com" target="_blank">i.pazushkin@vk.com</a></li>
        <li>GitHub: <a href="https://github.com/DjonniStorm" target="_blank">@DjonniStorm</a></li>
      </ul>
    </div>
  </div>
`;
