!function(){"use strict";const e=document.querySelector(".modal"),t=document.querySelector(".call__link-order"),o=document.querySelector(".call__link-order-footer"),c=document.querySelector(".overlay"),n=document.querySelector(".modal__button-close");t.addEventListener("click",(()=>{c.classList.add("overlay--visible"),e.classList.add("modal--visible"),r()}));const l=document.querySelectorAll(".fix-jump");function r(){const e=window.innerWidth-document.body.offsetWidth+"px";document.body.classList.add("body--overflow-hidden"),l.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}function a(){document.body.classList.remove("body--overflow-hidden"),l.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}o.addEventListener("click",(()=>{c.classList.add("overlay--visible"),e.classList.add("modal--visible"),r()})),n.addEventListener("click",(()=>{c.classList.remove("overlay--visible"),e.classList.remove("modal--visible"),a()})),c.addEventListener("click",(function(t){t.target==c&&(c.classList.remove("overlay--visible"),e.classList.remove("modal--visible"),a())}));var s=function(){const e=document.querySelector(".footer__form");e.addEventListener("submit",(function(t){t.preventDefault(),1==function(e){let t=!0;return e.querySelectorAll("input").forEach((e=>{!function(e){const t=e.parentNode;t.classList.contains("error-label")&&(t.querySelector(".error-text").remove(),t.classList.remove("error-label"),e.classList.remove("invalid"))}(e),""==e.value&&(t=!1,function(e,t){const o=e.parentNode;o.classList.add("error-label");const c=document.createElement("span");c.classList.add("error-text"),c.textContent="Поле не заполнено",e.classList.add("invalid"),o.append(c)}(e))})),t}(e)&&(c.classList.add("overlay--visible"),function(){const e=document.createElement("div");e.className="modal-send";const t=document.createElement("div");t.className="modal-send-content";const o=document.createElement("h2");o.className="modal-send-text",o.innerText="Вы подписались",t.append(o),e.append(t),c.prepend(e),r(),setTimeout((()=>{e.remove(),c.classList.remove("overlay--visible"),a()}),1e3)}())}))};window.addEventListener("DOMContentLoaded",(()=>{(function(){new Swiper(".swiper1",{direction:"horizontal",loop:!1,slidesPerView:"1",spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}});const e=new Swiper(".swiper2",{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelectorAll("[data-tab]"),o=document.querySelectorAll("[data-tab-value]");for(const c of t)c.addEventListener("click",(function(){for(const e of t)e.classList.remove("product__tabs-button--active");c.classList.add("product__tabs-button--active");for(const e of o)e.dataset.tabValue===c.dataset.tab?e.classList.remove("product__card--none"):e.classList.add("product__card--none");e.update()}))})(),r(),a(),function(){const e=document.querySelector(".header__top-content"),t=document.querySelector(".nav"),o=document.querySelector(".header__contacts"),n=document.querySelector(".header__bottom-content"),l=document.querySelector(".header__logo"),s=document.querySelector(".header__logo-image"),d=document.querySelector(".header__catalog-search"),i=document.querySelector(".catalog__search-form"),u=document.querySelector(".header__control"),m=document.querySelector(".mobile__form-wrapper"),p=document.querySelector(".mobile__contacts-wrapper"),_=document.querySelector(".mobile__nav-wrapper"),v=document.querySelector(".mobile__buttons-wrapper"),b=document.querySelector(".product__cards-content"),y=document.querySelector(".product__tabs-content"),S=document.querySelector(".product__tabs-link");window.innerWidth<=992&&function(){const o=document.querySelector(".header__mobile"),n=document.querySelector(".header__catalog-search"),d=document.querySelector(".catalog__button"),y=document.querySelector(".burger");let f=!1;const g=y.cloneNode(!0);g.className="burger--mobile",n.prepend(g),g.addEventListener("click",(()=>{o.classList.toggle("header__mobile--visible"),g.classList.toggle("burger--mobile-open"),d.classList.toggle("catalog__button--padding"),f?(a(),f=!1):(r(),f=!0)})),e.prepend(l),s.src="images/logo-mobile.svg",_.append(t);const q=e.querySelector(".header__contacts").cloneNode(!0);q.className="header__contacts-mobile",p.append(q);const L=q.querySelector(".header__contacts-call");L.className="header__contacts-call-mobile";const h=L.querySelectorAll(".call__link");h.forEach((e=>{e.className="call__link-mobile"}));const w=q.querySelector(".header__contacts-mail");w.className="header__contacts-mail-mobile",w.querySelector(".mail__link").className="mail__link-mobile";const E=h[0].cloneNode(!0);E.className="call__link-mobile-button",v.prepend(E);const k=q.querySelector(".call__link-order");k.className="call__link-order-mobile",v.append(k),k.addEventListener("click",(()=>{c.classList.add("overlay--visible"),r()})),m.append(i),e.append(u),b.append(S)}(),window.innerWidth>992&&(n.prepend(l),s.src="images/logo.png",e.prepend(t),e.append(o),d.append(i),n.append(u),y.append(S))}(),s(),function(){const e=document.querySelector(".to-top"),t=document.querySelector("#to-top");e.addEventListener("click",(function(e){e.preventDefault();const o=setInterval((function(){window.scrollBy(0,-50),window.scrollY<=t.offsetTop&&clearInterval(o)}),10)}))}();const e=document.querySelector(".catalog__button");e.addEventListener("click",(()=>{e.classList.toggle("catalog__button--open")}))}))}();