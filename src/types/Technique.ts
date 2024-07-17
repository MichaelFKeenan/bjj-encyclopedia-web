import type { UUID } from "crypto"

interface BaseTechnique {
  name: string,
  description?: string,
  coach?: string,
  tags?: string[]
  attempts: Attempt
}

export interface NewTechnique extends BaseTechnique {
}

export interface FullTechnique extends BaseTechnique {
  id: UUID,
  created: Date,
}

export interface Attempt {
  isSuccessfull: boolean,
  notes?: string,
  created: Date,
}
