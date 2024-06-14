import { defineStore } from 'pinia'

interface State {
  techniques: Technique[]
}

const defaultState: Technique[] = [{
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
}]

export default defineStore('Technique', {
  state: (): State => {
    return {
      techniques: defaultState,
    }
  },
})
