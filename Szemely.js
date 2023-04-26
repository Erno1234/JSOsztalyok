class Szemely {
    #szuletesiNev;
    constructor(nev, szulDatum, szuloElem){
        this.nev=nev;
        this.szulDatum=szulDatum;
        this.setSzuletesinev(nev);
        szuloElem.append(`
        <div class="szemely">
            <h3>${this.#szuletesiNev}</h3>
            <p>${this.kor()}</p>    
        </div>
    `)
    this.szemelyElem=$(".szemely:last-child")
    console.log(this.nev)
    
    this.szemelyElem.on("click", ()=>{
        console.log(this)      
    })
}
    getSzuletesinev(){
        return this.#szuletesiNev;
    }
    setSzuletesinev(ujnev){

        this.#szuletesiNev=ujnev;
    }
    kor(){
        const d = new Date();
        let year = d.getFullYear();
        let aktualisKor = year-this.szulDatum;
        return aktualisKor;
    }


}
export default Szemely;