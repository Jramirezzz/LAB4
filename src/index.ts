// import "./components/index.js";
import carta, {Attribute} from "./components/card/index"
import  { getData } from "./data";

class Appcontainer extends HTMLElement{

    carta: carta[]=[];
    

    constructor(){
        super();
        this.attachShadow({mode:"open"});      
    }

    async connectedCallback() {
        const data = await getData() 

        data?.forEach((user:any) => {
            const sugest = this.ownerDocument.createElement(
                "my-post"
                ) as carta;
                sugest.setAttribute(Attribute.personaje, user.personaje);
                sugest.setAttribute(Attribute.casaDeHogwarts, user.casaDeHogwarts);
                sugest.setAttribute(Attribute.apodo, user.apodo);
                sugest.setAttribute(Attribute.imagen, user.imagen);
                this.carta.push(sugest);
             });
             
        this.render(this.carta);
    }
    
    render(carta:any) {
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;

           for (let index = 0; index < carta.length; index++) {
            this.shadowRoot?.appendChild(carta[index])
           }

           

        }
    }
}

customElements.define("my-contain", Appcontainer);