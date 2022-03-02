import axios from "axios";

export const Api = axios.create({
  baseURL: "https://zybtfrpmyufahwfveewp.supabase.co/rest/v1/",
  headers: {
    apiKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5YnRmcnBteXVmYWh3ZnZlZXdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYyMjE2NTgsImV4cCI6MTk2MTc5NzY1OH0.ZaoWWccTOUzBG-OG-ZSD1OmWUfkdILBpK9on_fjzKPA",
  },
});
