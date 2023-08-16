
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

const mobile_submit = () => {

    email_input = document.querySelector("#email_input")

    let main = document.querySelector("main");

    main.innerHTML = "";

    let mobile_success = `<div class="mobile_success bg_white cover_viewport">
                            <div><img src="/assets/icon-success.svg"></div>
                            <div class="form_heading pdng_10x0px">Thanks for subscribing!</div>
                            <div class="pdng_10x0px">A confirmation email has been sent to <div class="fnt_wgt_700 dis_inline">${email_input.value}.<div> Please open it and click the button inside to confirm your subscription.
                            <button class="mrgn_tp_50px br_round" id="submit_cta" onclick="mobile()" >Dismiss message</button>
                        </div>`

    main.innerHTML = mobile_success;

}

const mobile = () => {
    let width = window.innerWidth;

    if (width <= 650) {
        let main = document.querySelector("main");

        main.innerHTML = "";

        let mobile_screen = `<div class="dsply_flx_column bg_white cover_viewport">
                            <div class="hero_img">
                                <img src="/assets/illustration-sign-up-mobile.svg">
                            <div>
                            <div class="mobile_form">
                                <div class="form_heading pdng_10x0px">
                                    Stay updated!
                                </div>
                                <div>
                                    Join 60,000+ product managers receiving monthly updates on:
                                </div> 
                                <ul class="pdng_10x0px">
                                    <li>Product discovery and building what matters</li>
                                    <li>Measuring to ensure updates are a success</li>
                                <li>And much more!</li>
                                </ul> 
                                <label for="email" class="lable">Email address</label>
                                <div class="email_input mrgn_10x0px">
                                <input type="email" name="email" class="br_round" id="email_input" placeholder="email@company.com" value="">
                                </div>
                                <button class="mrgn_10x0px br_round" id="submit_cta" onclick="mobile_submit()">Subscribe to monthly newsletter</button>
                            </div>`
        main.innerHTML = mobile_screen;

    }   else    {
        return;
    }
}

mobile();