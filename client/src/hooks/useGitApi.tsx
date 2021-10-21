import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { gitApiResponse } from "./gitApiResponseType";
import { TicketData } from "../components/Models";

export const useGitApi = () => {
  const [response, setResponse] = useState<gitApiResponse[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [ticket, setTicket] = useState<TicketData[]>([])

  const fetchData = () => {
    axios
      .get<gitApiResponse[]>(
        "https://api.github.com/repos/SheW0lf/Tikit/issues?labels=bug"
      )
      .then((res: AxiosResponse<gitApiResponse[]>) => {
        setResponse(res.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};
