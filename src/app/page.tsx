
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
import { columns, statistic } from "./statistic/column"
import { DataTable } from "./statistic/data-table"


async function getData(): Promise<statistic[]> {
  // Fetch data from your API here.
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

export default async function Home() {
    const data = await getData()
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
          88
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
          88
        </Card>
    </section>
    <section className="flex justify-arround ">
          <div className="container mx-auto py-10 px-10">
            <DataTable columns={columns} data={data} />
          </div>
          <div className="container mx-auto py-10 px-10">
            <DataTable columns={columns} data={data} />
          </div>
    </section>
   </>
  );
}
