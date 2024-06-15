import { defineStore } from 'pinia'

interface State {
  techniques: FullTechnique[]
}

let nextId = 3

const defaultState: FullTechnique[] = [
  {
    id: 1,
    name: 'anem 1',
    description: 'description 1',
    coachName: 'coachName 1',
    tags: ['tag1', 'tag2']
  },
  {
    id: 2,
    name: 'anem 2',
    description: 'description 2',
    coachName: 'coachName 2',
    tags: ['tag3', 'tag4']
  }
]

export default defineStore('Technique', {
  state: (): State => {
    return {
      techniques: defaultState
    }
  },
  getters: {
    //this should read from db via api
    //how to hydrate?
    getAllTechniques: (state) => state.techniques,
    getTechnique: (state) => {
      return (techniqueId: number) =>
        state.techniques.find((technique) => technique.id === techniqueId)
    }
  },
  actions: {
    addTechnique(technique: NewTechnique) {
      //this should write to db via api
      const simulatedCreate: FullTechnique = {
        id: nextId++,
        name: technique.name,
        description: technique.description,
        tags: technique.tags,
        coachName: technique.coachName
      };
      this.techniques.push(simulatedCreate)
    },
    editTechnique(technique: FullTechnique) {
      //do this properly in api
      const existingTechnique = this.techniques.find(x=>x.id == technique.id);
      if(!existingTechnique) return;
      existingTechnique.name = technique.name;
      existingTechnique.description = technique.description;
      existingTechnique.coachName = technique.coachName;
      existingTechnique.tags = technique.tags;
      console.log('existingTechnique', existingTechnique);
    },
    deleteTechnique(id: number) {
      //do this via api
      this.techniques = this.techniques.filter(technique => technique.id !== id);
    }
  }
})
