import { useQuery } from "@tanstack/react-query"

export const useGetTasks = () => {
  return useQuery({
    queryKey: "tasks",
    queryFn: async () => {
      // pegar os dados da API
      const response = await fetch("http://localhost:3000/tasks", {
        method: "GET",
      })
      return response.json()
    },
  })
}
