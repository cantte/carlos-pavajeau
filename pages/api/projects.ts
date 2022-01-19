// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  title: string
  description: string
  githubUrl: string
}

const data: Data[] = [
  {
    title: 'Kaizen',
    description:
      'Web software for the management of administrative control of sanitation companies.',
    githubUrl: 'https://github.com/cantte/Kaizen',
  },
  {
    title: 'Armory.Api',
    description: 'Api for the administration of the data of an armory.',
    githubUrl: 'https://github.com/cantte/Armory.Api',
  },
  {
    title: 'Armory.Web',
    description: 'Web software for the management of an armory.',
    githubUrl: 'https://github.com/cantte/Armory.Web',
  },
  {
    title: 'Rusell.Api',
    description: 'Api for the administration of travel companies.',
    githubUrl: 'https://github.com/cantte/Rusell.Api',
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json(data)
}
