import { useQuery } from "@tanstack/react-query"

import { api } from "../../lib/axios"

export const useGetTasks = () => {
  return useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      const { data: getTasks } = await api.get("/tasks")
      return getTasks
    },
  })
}
