import type { FullTechnique, NewTechnique } from '@/types/Technique'
import type { UUID } from 'crypto'
import { defineStore } from 'pinia'

interface State {
  techniques: FullTechnique[]
}

export default defineStore('Technique', {
  state: (): State => {
    return {
      techniques: []
    }
  },
  getters: {
    //this should read from db via api
    //how to hydrate?
    getAllTechniques: (state) => state.techniques,
    getTechnique: (state) => {
      return (techniqueId: UUID) =>
        state.techniques.find((technique) => technique.id === techniqueId)
    }
  },
  actions: {
    async fetchTechniques(){
      try {
        const response = await fetch('https://localhost:7181/Techniques');
        if(response.status === 200) {
          this.techniques = await response.json() as FullTechnique[];
        }
      } 
      catch(e) { 
        console.log(e);
      }
    },
    async addTechnique(technique: NewTechnique) {
      try {
        const response = await fetch('https://localhost:7181/Techniques', {
          method: "POST", 
          body: JSON.stringify(technique),
          headers: {
            "Content-Type": "application/json"
          }
        });
        if(response.status === 200) {
          console.log('good');
        }
      } 
      catch(e) { 
        console.log(e);
      }
    },
    editTechnique(technique: FullTechnique) {
      //do this properly in api
      const existingTechnique = this.techniques.find(x=>x.id == technique.id);
      if(!existingTechnique) return;
      existingTechnique.name = technique.name;
      existingTechnique.description = technique.description;
      existingTechnique.coach = technique.coach;
      existingTechnique.tags = technique.tags;
      console.log('existingTechnique', existingTechnique);
    },
    deleteTechnique(id: UUID) {
      //do this via api
      this.techniques = this.techniques.filter(technique => technique.id !== id);
    }
  }
})
