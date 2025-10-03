"use client"
import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { columns, statistic } from "../components/column"
import { DataTable } from "../components/data-table"
import { Button } from "@/components/ui/button";
import { useState } from "react";

async function getData(team: "A" | "B"): Promise<statistic[]> {
  if (team === "A") {
    return [
      {
        id: "23",
        name: "Paul",
        point: 12,
        rebound: 5,
        assist: 15,
        fouls: 4,
        outOfBounds: 5
      },
    ]
  } else {
    return [
      {
        id: "45",
        name: "Mahef",
        point: 10,
        rebound: 14,
        assist: 3,
        fouls: 5,
        outOfBounds: 4
      },
    ]
  }
}

export default function Home() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  // Charger les données (option : useEffect si API réelle)
  const [dataA] = useState<statistic[]>([
    { id: "23", name: "Paul", point: 12, rebound: 5, assist: 15, fouls: 4, outOfBounds: 5 }
  ]);
  const [dataB] = useState<statistic[]>([
    { id: "45", name: "Mahef", point: 10, rebound: 14, assist: 3, fouls: 5, outOfBounds: 4 }
  ]);

  return (
    <>
      <section>
        <h1 className="text-center text-6xl">10:00</h1>
      </section>

      {/* Scores */}
      <section className="flex justify-around ">
        {/* Team A */}
        <Card className="w-[40vw] text-center text-9xl">
          <CardHeader>
            <CardTitle className="text-6xl">
              <input type="text" className="text-center" placeholder="Team A"></input>
            </CardTitle>
          </CardHeader>
          <div className="flex justify-center items-center gap-4">
            <Button className="text-4xl" onClick={() => setScoreA(scoreA - 1)}>-</Button>
            <span className="text-9xl" style={{fontFamily:"Tektur"}}>{scoreA}</span>
            <Button className="text-4xl" onClick={() => setScoreA(scoreA + 1)}>+</Button>
          </div>
        </Card>

        <h1 className="text-9xl text-center pt-[50]">
          VS
        </h1>

        {/* Team B */}
        <Card className="w-[40vw] text-center text-9xl">
          <CardHeader>
            <CardTitle className="text-6xl">
              <input type="text" className="text-center" placeholder="Team B"></input>
            </CardTitle>
          </CardHeader>
          <div className="flex justify-center items-center gap-4">
            <Button className="text-4xl" onClick={() => setScoreB(scoreB - 1)}>-</Button>
            <span className="text-9xl " style={{fontFamily:"Tektur"}}>{scoreB}</span>
            <Button className="text-4xl" onClick={() => setScoreB(scoreB + 1)}>+</Button>
          </div>
        </Card>
      </section>

      {/* Tableaux */}
      <section className="flex justify-around">
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
