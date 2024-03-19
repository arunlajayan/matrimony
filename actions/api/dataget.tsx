export const loginApi = async (data:any) => {
    await fetch("/api/endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) =>console.log("data"));
}