button.addEventListener("click", async () => {
    const userQestion = input.value.trim(); //9/10 already a method to run for repeted methods

    if(!userQestion) {
        responseDiv.textContent = "Please enter a question first";
        return; //prevent errors for users
    }

    responseDiv.textContent = "Thinking about it 🤔";


    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST", //we are calling and recieving
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${api_key}`,
            },
            // turns it into  format tht servers can understand
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userQestion }],
            }),
        });
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    responseDiv.textContent =
        data.choices?.[0]?.message?.content || "no response received";
    } catch (error) {
        console.log("error:" , error);
        responseDiv.textContent = "Oops! Something went wrong, please try again later.";
    }

});