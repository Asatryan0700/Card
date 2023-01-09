export default {
    render(data) {
        return `
            ${this.css()}
            ${this.html(data)}
        `
    },
    html(data) {
        return `
            <div class="bcard">
               <div class="aaa">
                <div class="logo"><i class="fa-brands fa-${data.logo}"></i></div>
                </div>
                <div class="aab">
                <div class="user">${data.user}</div>
                <div class="line">${data.prof}</div>
                <div class="line">${data.mail}</div>
                <div class="line">${data.tel}</div>
                </div>
            </div>
        `;
    },
    css() {
        return `<style>
            .bcard {
                width: 85.6mm;
                height: 53.98mm;
                border-radius: 3.18mm;
                box-sizing: border-box;
                padding: 8mm;
                display: grid;
                grid-template-columns: auto 1fr;
                gap: 3mm 10mm;
                align-content: space-between;
                font-size: 16pt;
                font-family: sans-serif;
                background: rgb(2,0,36);
                            }
            .logo {
                grid-row-end: span 3;
                font-size: 32pt;
            }
            .user {
                font-size: 2em;
                grid-column-end: span 2;
            }
            .line {
                font-size: .7em;
                padding-bottom: 6px;
            }
            .aab{
                margin: 35px;
            }
        </style>`
    }
}
