!function(){"use strict";const e=document.querySelector(".modal"),t=(document.querySelector(".call__link-order"),document.querySelector(".call__link-order-footer"),document.querySelectorAll(".call-order")),o=document.querySelector(".overlay"),c=document.querySelector(".modal__button-close");t.forEach((t=>{t.addEventListener("click",(()=>{o.classList.add("overlay--visible"),e.classList.add("modal--visible"),l()}))}));const n=document.querySelectorAll(".fix-jump");function l(){const e=window.innerWidth-document.body.offsetWidth+"px";document.body.classList.add("body--overflow-hidden"),n.forEach((t=>{t.style.paddingRight=e})),document.body.style.paddingRight=e}function r(){document.body.classList.remove("body--overflow-hidden"),n.forEach((e=>{e.style.paddingRight="0px"})),document.body.style.paddingRight="0px"}c.addEventListener("click",(()=>{o.classList.remove("overlay--visible"),e.classList.remove("modal--visible"),r()})),o.addEventListener("click",(function(t){t.target==o&&(o.classList.remove("overlay--visible"),e.classList.remove("modal--visible"),r())}));var a=function(){document.querySelectorAll(".form").forEach((t=>{t.addEventListener("submit",(function(t){t.preventDefault(),1==function(e){let t=!0;return e.querySelectorAll("input").forEach((e=>{!function(e){const t=e.parentNode;t.classList.contains("error-label")&&(t.querySelector(".error-text").remove(),t.classList.remove("error-label"),e.classList.remove("invalid"))}(e),""==e.value&&(t=!1,function(e,t){const o=e.parentNode;o.classList.add("error-label");const c=document.createElement("span");c.classList.add("error-text"),c.textContent="Поле не заполнено",e.classList.add("invalid"),o.append(c)}(e))})),t}(this)&&(o.classList.add("overlay--visible"),e.classList.remove("modal--visible"),function(){const e=document.createElement("div");e.className="modal-send";const t=document.createElement("div");t.className="modal-send-content";const c=document.createElement("h2");c.className="modal-send-text",c.innerText="Вы подписались",t.append(c),e.append(t),o.prepend(e),l(),setTimeout((()=>{e.remove(),o.classList.remove("overlay--visible"),r()}),1e3)}())}))}))};window.addEventListener("DOMContentLoaded",(()=>{(function(){new Swiper(".swiper1",{direction:"horizontal",loop:!1,slidesPerView:"1",spaceBetween:24,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0}});const e=new Swiper(".swiper2",{direction:"horizontal",loop:!1,slidesPerView:"auto",spaceBetween:32,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),t=document.querySelectorAll("[data-tab]"),o=document.querySelectorAll("[data-tab-value]");for(const c of t)c.addEventListener("click",(function(){for(const e of t)e.classList.remove("product__tabs-button--active");c.classList.add("product__tabs-button--active");for(const e of o)e.dataset.tabValue===c.dataset.tab?e.classList.remove("product__card--none"):e.classList.add("product__card--none");e.update()}))})(),l(),r(),function(){const t=document.querySelector(".header__top-content"),c=document.querySelector(".nav"),n=document.querySelector(".header__contacts"),a=document.querySelector(".header__bottom-content"),s=document.querySelector(".header__logo"),d=document.querySelector(".header__logo-image"),i=document.querySelector(".header__catalog-search"),u=document.querySelector(".catalog__search-form"),m=document.querySelector(".header__control"),p=document.querySelector(".mobile__form-wrapper"),_=document.querySelector(".mobile__contacts-wrapper"),b=document.querySelector(".mobile__nav-wrapper"),v=document.querySelector(".mobile__buttons-wrapper"),y=document.querySelector(".product__cards-content"),S=document.querySelector(".product__tabs-content"),f=document.querySelector(".product__tabs-link");window.innerWidth<=992&&function(){const n=document.querySelector(".header__mobile"),a=document.querySelector(".header__catalog-search"),i=document.querySelector(".catalog__button"),S=document.querySelector(".burger");let q=!1;const g=S.cloneNode(!0);g.className="burger--mobile",a.prepend(g),g.addEventListener("click",(()=>{n.classList.toggle("header__mobile--visible"),g.classList.toggle("burger--mobile-open"),i.classList.toggle("catalog__button--padding"),q?(r(),q=!1):(l(),q=!0)})),t.prepend(s),d.src="images/logo-mobile.svg",b.append(c);const h=t.querySelector(".header__contacts").cloneNode(!0);h.className="header__contacts-mobile",_.append(h);const L=h.querySelector(".header__contacts-call");L.className="header__contacts-call-mobile";const w=L.querySelectorAll(".call__link");w.forEach((e=>{e.className="call__link-mobile"}));const E=h.querySelector(".header__contacts-mail");E.className="header__contacts-mail-mobile",E.querySelector(".mail__link").className="mail__link-mobile";const k=w[0].cloneNode(!0);k.className="call__link-mobile-button",v.prepend(k);const N=h.querySelector(".call__link-order");N.className="call__link-order-mobile",v.append(N),N.addEventListener("click",(()=>{o.classList.add("overlay--visible"),e.classList.add("modal--visible"),l()})),p.append(u),t.append(m),y.append(f)}(),window.innerWidth>992&&(a.prepend(s),d.src="images/logo.png",t.prepend(c),t.append(n),i.append(u),a.append(m),S.append(f))}(),a(),function(){const e=document.querySelector(".to-top"),t=document.querySelector("#to-top");e.addEventListener("click",(function(e){e.preventDefault();const o=setInterval((function(){window.scrollBy(0,-50),window.scrollY<=t.offsetTop&&clearInterval(o)}),10)}))}();const t=document.querySelector(".catalog__button");t.addEventListener("click",(()=>{t.classList.toggle("catalog__button--open")}))}))}();