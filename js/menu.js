//export
export default function menu(elemtBtnOpen, elemtBtnClose, elemtMenu) {
  const $btnOpen = document.getElementById(elemtBtnOpen);
  const $btnClose = document.getElementById(elemtBtnClose);
  const $menu = document.getElementById(elemtMenu);
  const $overlay = document.getElementById("overlay");

  $btnOpen.addEventListener("click", (e) => {
    console.log($btnOpen);
    console.log($btnClose);
    console.log($menu);

    $btnOpen.classList.remove("btn__open");
    $btnOpen.classList.add("btn__open--noActive");

    $btnClose.classList.remove("btn__close");
    $btnClose.classList.add("btn__close--active");

    $menu.classList.add("menu--active");
  });

  $btnClose.addEventListener("click", () => {
    $btnClose.classList.remove("btn__close--active");
    $btnClose.classList.add("btn__close");

    $btnOpen.classList.remove("btn__open--noActive");
    $btnOpen.classList.add("btn__open");

    $menu.classList.remove("menu--active");
  });
}
