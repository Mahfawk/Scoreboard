import { columns, statistic } from "./column"
import { DataTable } from "./data-table"

async function getData(): Promise<statistic[]> {
  // Fetch data from your API here.
  return [
    {
      id: "23",
      name: "Paul",
      point: 12,
      rebound: 5,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}