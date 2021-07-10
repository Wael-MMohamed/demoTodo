import axios from "axios";

var config = {
    method: "get",
    url: "https://api.todoist.com/rest/v1/tasks?project_id=2269074557",
    headers: {
        Authorization: "Bearer be13c0b221e82aed847ef0db5389922aa7b2c067",
    },
};

let addConfig = {
    method: "POST",
    url: "https://api.todoist.com/rest/v1/tasks",
    headers: {
        Authorization: "Bearer be13c0b221e82aed847ef0db5389922aa7b2c067",
        "Content-Type": "application/json",
    },
    data: {},
};

export async function fetchActiveTasks() {
    let data = await axios(config)
        .then((response) => {
            // console.log(response.data[0].content);
            return response.data;
        })
        .catch((error) => {
            console.log(error);
            return error;
        });
    // console.log(data);
    return data;
}

export async function addTask(newTask) {
    addConfig.data = newTask;
    console.log("client addtask config :", JSON.stringify(addConfig));
    const res = await axios
        .post(addConfig.url, newTask, { headers: addConfig.headers })
        .catch((error) => {
            console.log(error);
            return error;
        });
    console.log("client respons :", res.data);
    return res.data;
}
