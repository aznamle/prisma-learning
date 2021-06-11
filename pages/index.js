import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient

export default function Home({ data }) {


  console.log(data)
  return (
    <div>

    </div>
  )
}

export async function getServerSideProps() {

  const data = await prisma.anime.findMany()

  return {
    props: {
      data: data
    }
  }
}