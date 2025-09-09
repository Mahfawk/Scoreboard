
import Image from "next/image";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { columns, statistic } from "../components/column"
import { DataTable } from "../components/data-table"
import { Button } from "@/components/ui/button";


async function getData(team: "A" | "B"): Promise<statistic[]> {
  if(team=== "A"){
  return [
    {
      id: "23",
      name: "Paul",
      point: 12,
      rebound: 5,
      assist:15,
      fouls:4,
      outOfBounds:5
    },
    // ...
  ]
  }
  else{
    return [
    {
      id: "45",
      name: "Mahefa",
      point: 10,
      rebound: 14,
      assist:3,
      fouls:5,
      outOfBounds:4
    },
    // ...
  ]
  }
}

export default async function Home() {
    const dataA = await getData("A")
     const dataB = await getData("B")
  return (
   <>
      <section>
          <h1 className="text-center text-6xl">10:00</h1>
      </section>
      <section className="flex justify-around ">
      {/*Team A*/}
        <Card className="w-[40vw] text-center text-9xl">
          <CardHeader>
            <CardTitle className="text-6xl">
              TEAM A
            </CardTitle>
          </CardHeader>
          <div className="flex justify-center items-center">
            <Button className="text-4xl">-</Button>
            88
            <Button className="text-4xl">+</Button>
          </div>
        </Card>
      <h1 className="text-9xl text-center pt-[50]">
        VS
      </h1>
      {/*Team B*/}
        <Card className="w-[40vw] text-center text-9xl">
          <CardHeader>
            <CardTitle className="text-6xl">
              TEAM B
            </CardTitle>
          </CardHeader>
          <div className="flex justify-center items-center">
            <Button className="text-4xl">-</Button>
            88
            <Button className="text-4xl">+</Button>
          </div>
        </Card>
    </section>
    <section className="flex justify-arround ">
          <div className="container mx-auto py-10 px-10">
            <DataTable columns={columns} data={dataA} />
          </div>
          <div className="container mx-auto py-10 px-10">
            <DataTable columns={columns} data={dataB} />
          </div>
    </section>
   </>
  );
}
