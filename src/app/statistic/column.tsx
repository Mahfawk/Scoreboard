"use client"
import { ColumnDef } from "@tanstack/react-table"

export type statistic ={
    id:string
    name:string
    point: number
    rebound : number
    assist: number
    fouls:number
    outOfBounds:number
}

export const columns: ColumnDef<statistic>[]=[
    {
        accessorKey: "name",
        header:"Name",
    },
    {
        accessorKey: "point",
        header :"Point"
    },
    {
        accessorKey: "rebound",
        header :"Rebound"
    },
    {
        accessorKey: "assist",
        header : "Assist"
    },
    {
        accessorKey:"fouls",
        header:"Fouls"
    },
    {
        accessorKey: "outOfBounds",
        header:"Out of Bounds"
    }
]