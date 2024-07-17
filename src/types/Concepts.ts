interface BaseConcept {
  name: string,
  description: string,
  tags: string[]
}

export interface NewConcept extends BaseConcept {
}

export interface FullConcept extends BaseConcept {
  id: string,
  created: Date,
}