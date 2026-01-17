import { AppProvider } from "@toolpad/core/AppProvider";
import {
  Crud,
  type DataModel,
  type DataSource,
  DataSourceCache,
} from "@toolpad/core/Crud";
import { useDemoRouter } from "@toolpad/core/internal";
import type ProjectI from "../interfaces/ProjectI"
import { useEffect } from "react";

export interface Note extends DataModel {
  id: number;
  date: string;
  project: string;
  hours: number;
  description: string;
}

let notesStore: Note[] = [
  {
    id: 1,
    project: "Grocery List Item",
    hours: 3,
    description: "",
    date: "",
  },
];

// === DataSource ===
export const projectsDataSource: DataSource<Note> = {
  fields: [
    {
      field: "project",
      headerName: "Project",
      flex: 2,
      type: "singleSelect",
      valueOptions: [
        { value: "viso", label: "Viso" },
        { value: "clientA", label: "ClientA" },
        { value: "clientB", label: "ClientB" },
      ],
    },
    { field: "hours", headerName: "Hours" },
    { field: "description", headerName: "Description" },
    {
      field: "date",
      headerName: "Date",
      type: "date",
      valueGetter: (value) => (value ? new Date(value as string) : null),
    },
  ],

  getMany: async ({ paginationModel }) => {

    const start = paginationModel.page * paginationModel.pageSize;
    const end = start + paginationModel.pageSize;
    return {
      items: notesStore.slice(start, end),
      itemCount: notesStore.length,
    };
  },

  //   getOne: async (id) => {
  //     await new Promise((r) => setTimeout(r, 500));
  //     const note = notesStore.find((n) => n.id === Number(id));
  //     if (!note) throw new Error("Note not found");
  //     return note;
  //   },

  createOne: async (data: Partial<Note>) => {
    const newNote: Note = {
      id: notesStore.reduce((max, n) => Math.max(max, n.id), 0) + 1,

      project: data.project ?? "",
      hours: data.hours ?? 0,
      description: data.description ?? "",
      date: data.date
        ? new Date(data.date).toISOString()
        : new Date().toISOString(),
    };

    notesStore = [...notesStore, newNote];
    return newNote;
  },
};

const projectsCache = new DataSourceCache();

interface Props {
  data: ProjectI[];
}

export default function ProjectsList({ data }: Props) {
  const router = useDemoRouter("/");
    useEffect(() => {
    notesStore = data.map((item) => ({
      id: item.id,
      project: item.project,
      hours: item.hours,
      description: item.description,
      date: new Date(item.date).toISOString(),
    }));
  }, [data]);
  return (
    <AppProvider router={router}>
      <Crud
        dataSource={projectsDataSource}
        dataSourceCache={projectsCache}
        rootPath=""
        initialPageSize={10}
      />
    </AppProvider>
  );
}
