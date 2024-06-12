const section = document.querySelector(".hide-section");
const formContainer = document.querySelector(".login-container");
const loginContainer = document.querySelector(".login");
const profile = document.querySelector("img");


profile.onclick = () => {
    requestAnimationFrame(() => {
        loginContainer.classList.remove("hide-login");
        formContainer.classList.remove("hide-form");

        setTimeout(() => {
            section.classList.remove("hide-section");
        }, 1000);
    });
};