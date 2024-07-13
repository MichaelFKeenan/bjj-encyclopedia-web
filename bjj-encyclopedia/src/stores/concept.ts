import type { FullConcept, NewConcept } from '@/types/Concept'
import type { UUID } from 'crypto'
import { defineStore } from 'pinia'

interface State {
  concepts: FullConcept[]
}

export default defineStore('Concept', {
  state: (): State => {
    return {
      concepts: []
    }
  },
  getters: {
    //this should read from db via api
    //how to hydrate?
    getAllConcepts: (state) => state.concepts,
    getConcept: (state) => {
      return (conceptId: UUID) =>
        state.concepts.find((concept) => concept.id === conceptId)
    }
  },
  actions: {
    async fetchConcepts(){
      try {
        const response = await fetch('https://localhost:7181/Concepts');
        if(response.status === 200) {
          this.concepts = await response.json() as FullConcept[];
        }
      }
      catch(e) { 
        console.log(e);
      }
    },
    async addConcept(concept: NewConcept) {
      try {
        const response = await fetch('https://localhost:7181/Concepts', {
          method: "POST", 
          body: JSON.stringify(concept),
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
    async editConcept(concept: FullConcept) {
      try {
        const response = await fetch('https://localhost:7181/Concepts', {
          method: "PUT", 
          body: JSON.stringify(concept),
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
    async deleteConcept(id: UUID, created: string) {
      try {
        const response = await fetch(`https://localhost:7181/Concepts/${id}/${encodeURIComponent(created)}`, {
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
