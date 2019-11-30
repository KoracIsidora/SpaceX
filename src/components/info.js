class Info{
    constructor({name, ceo, founded, founder}){    // prosledjuje se ceo objekat, ali se izvlace samo info koje smo naznacili. // object desctructuring.
        this.node = document.createElement('section');

        // Data 
        this.name = name;
        this.ceo = ceo;
        this.founded = founded;
        this.founder = founder;

        this.banner = document.createElement('h1');
        this.banner.textContent = this.name;

        this.txtFounder = document.createElement('label');
        this.txtFounder.textContent = this.founder;

        this.txtFounded = document.createElement('label');
        this.txtFounded.textContent = this.founded;

        this.txtCeo = document.createElement('label');
        this.txtCeo.textContent = this.ceo;

        // this.buttonUp = document.createElement('button');
        // this.buttonUp.innerHTML = 'Up';

        // this.buttonDown = document.createElement('button');
        // this.buttonDown.innerHTML = 'Down';


        this.node.appendChild(this.banner);
        this.node.appendChild(this.txtFounder);
        this.node.appendChild(this.txtFounded);
        this.node.appendChild(this.txtCeo);
        // this.node.appendChild(this.buttonUp);
        // this.node.appendChild(this.buttonDown);
    }

    getNode(){
        return this.node;
    }

    sortUp(onClick){
        this.buttonUp.addEventListener('click', onClick);
    }

    sortDown(onClick){
        this.buttonDown.addEventListener('click', onClick);
    }
}

export{
    Info
}