import Template from "./template.js";

export default class BCard extends HTMLElement {
    static get observedAttributes() {
        return ["logo", "mail", "user", "tel", "prof"]
    }
    attributeChangedCallback(name, prev, val) {
        if (prev !== val) {
            this.innerHTML = Template.render({
                logo: this.logo,
                mail: this.mail,
                user: this.user,
                tel: this.tel,
                prof: this.prof
            });
            console.log(name)
        }
    }
    connectedCallback() {
        this.data = {
            logo: this.logo,
            mail: this.mail,
            user: this.user,
            tel: this.tel,
            prof: this.prof
        }
        this.innerHTML = Template.render(this.data);
    }
    get logo() {
        return this.getAttribute("logo");
    }
    get mail() {
        return this.getAttribute("mail");
    }
    get user() {
        return this.getAttribute("user")
    }
    get tel() {
        return this.getAttribute("tel")
    }
    get prof() {
        return this.getAttribute("prof");
    }
}
