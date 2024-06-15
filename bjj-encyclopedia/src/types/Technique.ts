interface BaseTechnique {
  name: string,
  description: string,
  coachName: string,
  tags: string[]
}

interface NewTechnique extends BaseTechnique {
  name: string,
  description: string,
  coachName: string,
  tags: string[]
}
interface FullTechnique extends BaseTechnique {
  id: number,
}