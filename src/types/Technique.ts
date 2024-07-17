export interface Attempt {
  isSuccessfull: boolean,
  notes?: string,
  created: Date,
}

interface BaseTechnique {
  name: string,
  description?: string,
  coach?: string,
  tags?: string[]
  attempts: Attempt[]
}

export interface NewTechnique extends BaseTechnique {
}

export interface FullTechnique extends BaseTechnique {
  id: string,
  created: Date,
}

