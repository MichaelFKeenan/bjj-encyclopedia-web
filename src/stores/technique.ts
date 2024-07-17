import { apiPath } from '@/api'
import type { FullTechnique, NewTechnique } from '@/types/Technique'
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
    getTechnique: (state) => (techiqueId: string): FullTechnique | undefined => {
      return state.techniques.find((technique) => technique.id === techiqueId)
    }
  },
  actions: {
    async selectTechnique(){
      try {
        const response = await fetch(`${apiPath}/Techniques`);
        if(response.status === 200) {
          this.techniques = await response.json() as FullTechnique[];
        }
      }
      catch(e) { 
        console.log(e);
      }
    },
    async fetchTechniques(){
      try {
        const response = await fetch(`${apiPath}/Techniques`);
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
        const response = await fetch(`${apiPath}/Techniques`, {
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
    async editTechnique(technique: FullTechnique) {
      try {
        const response = await fetch(`${apiPath}/Techniques`, {
          method: "PUT", 
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
    async deleteTechnique(id: string, created: string) {
      try {
        const response = await fetch(`${apiPath}/Techniques/${id}/${encodeURIComponent(created)}`, {
          method: "DELETE",
        });
        if(response.status === 200) {
          console.log('good');
        }
      }
      catch(e) { 
        console.log(e);
      }
    }
  }
})
