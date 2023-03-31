import styles from "./index.css"

export enum Attribute {
    "personaje" = "personaje",
    "casaDeHogwarts" = "casaDeHogwarts",
    "apodo" = "apodo",
    "imagen" = "imagen",
}

class Tpost extends HTMLElement{
    personaje?: string;
    casaDeHogwarts?: string;
    apodo?: string;
    imagen?: string;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {

            personaje: null,
            casaDeHogwarts: null,
            apodo: null,
            imagen: null,


        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
      }


    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=
                `
                <section class="all">
                    <section >
                        <section class = "up">
                        <h1 class = "name">${this.personaje}</h1>
                        <img class="img" src="${this.imagen}">
                        <p class = "apodo">Apodo:${this.apodo}</p>
                        <p>house:${this.casaDeHogwarts}</p>
                        </section> 
                        </section> 
                `;
                const css = this.ownerDocument.createElement("style");
                css.innerHTML = styles;
                this.shadowRoot?.appendChild(css);
            }
        }
}
customElements.define("my-post", Tpost);
export default Tpost;