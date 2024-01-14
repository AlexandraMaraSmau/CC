const CONVERSATIONS_URL = "http://localhost:8000/public/api/conversations/"

const addConversation = async (conversation) => {
    try {
        const options = {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "UserID_id": conversation.userID,
                "CreationDate": conversation.creationDate
            }),
        };

        const response = await fetch(CONVERSATIONS_URL + "add/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const updateConversation = async (conversation) => {
    try {
        const options = {
            method: "PUT",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "UserID_id": conversation.userID,
                "CreationDate": conversation.creationDate
            }),
        };

        const response = await fetch(CONVERSATIONS_URL + "update/" + conversation.id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const deleteConversation = async (id) => {
    try {
        const options = {
            method: "DELETE",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
        };

        const response = await fetch(CONVERSATIONS_URL + "delete/" + id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const getConversationById = async (id) => {
    try {

        const options = {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(CONVERSATIONS_URL + id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const getAllConversations = async () => {
    try {

        const options = {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(CONVERSATIONS_URL, options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const ConversationService = {
    addConversation,
    updateConversation,
    deleteConversation,
    getConversationById,
    getAllConversations,
};