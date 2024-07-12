import type { UUID } from "crypto"

interface BaseTechnique {
  name: string,
  description: string,
  coach: string,
  tags: string[]
}

export interface NewTechnique extends BaseTechnique {
}

export interface FullTechnique extends BaseTechnique {
  id: UUID,
  created: Date,
}