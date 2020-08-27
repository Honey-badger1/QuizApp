

export default class GetInform {
    constructor() {
        this._apiBase = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple';
    }

    GetInform  = async () => {
        const res = await fetch(`${this._apiBase}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch +` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getQuestion(){
        return this.GetInform()
     
    }

}