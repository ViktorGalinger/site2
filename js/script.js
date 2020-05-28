$(function () {
   $('.slider').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
   });

   // $('.open-btn').on('click', function () {
   //    $('.menu').addClass('active');
   // });
   // $('.open-btn').on('dblclick', function () {
   //    $('.menu').removeClass('active');
   // });

});

var link = document.querySelector(".open-btn");
var result = document.querySelector(".menu");

link.addEventListener("click", function () {
   result.classList.toggle("active");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      /* При нажатии Escape */
      evt.preventDefault(); /* Отменяем действие по умолчанию у кнопки (к пр. Full screen) */

      if (result.classList.contains("active")) {
         /* Если в меню есть класс активе, мы его удаляем */
         result.classList.remove("active");
      }
   }
});

var jsTriggers = document.querySelectorAll('.js-tab-trigger');
jsTriggers.forEach(function (item, i) {
   item.addEventListener('click', function () {
      var tabName = this.dataset.tab,
         tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

      document.querySelectorAll('.js-tab-content.active').forEach(function (item, i) {
         item.classList.remove('active');
      });
      document.querySelectorAll('.js-tab-trigger.active').forEach(function (item, i) {
         item.classList.remove('active');
      });

      tabContent.classList.add('active');
      this.classList.add('active');
   });
})