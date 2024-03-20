interface LoginResponse {
  message: string;
  success: boolean;
  token: string;
}

export const signupApi = async (data: any) => {
    await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) =>console.log(data));
}

export const loginApi = async (data: any) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData: LoginResponse = await response.json();
    console.log(responseData);
    localStorage.setItem("token", responseData.token)
    
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getUser = async () => {
  try {
    const response = await fetch("/api/users/getUser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData: LoginResponse = await response.json();
    console.log(responseData);
    localStorage.setItem("token", responseData.token)
    return responseData;
    
  } catch (error) {
    console.error("Error:", error);
  }
};