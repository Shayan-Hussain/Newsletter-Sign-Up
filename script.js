
let email_input = document.querySelector("#email_input")

const get_arr = () => {
    if (localStorage.getItem("arr") == null) {
        let arr = [];
        return arr;
    }   else    {
        return JSON.parse(localStorage.getItem("arr"));
    }
}

const store_email = () => {
    let arr_stored = get_arr();

    arr_stored.push(email_input.value);

    localStorage.setItem("arr", JSON.stringify(arr_stored));
}

const display_success_dialog = () => {
    let content_element= document.querySelector(".content_element");

    content_element.innerHTML = "";

    content_element.style.width = "350px";
    content_element.style.height = "400px"
    content_element.classList.add("flx_dir_column")

    let content = `<div><img src="/assets/icon-success.svg"></div>
                   <div class="form_heading pdng_10x0px">Thanks for subscribing!</div>
                   <div class="pdng_10x0px">A confirmation email has been sent to <div class="fnt_wgt_700 dis_inline">${email_input.value}.<div> Please open it and click the button inside to confirm your subscription.
                   <button class="mrgn_tp_50px br_round" id="submit_cta" onclick="subscribe_page()">Dismiss message</button>`

    content_element.innerHTML = content;
}

const subscribe_page = () => {
    window.location.href = "index.html"
}

let form = document.querySelector("form")

form.addEventListener("submit", function(event) {
    event.preventDefault();
    store_email();
    display_success_dialog();
});