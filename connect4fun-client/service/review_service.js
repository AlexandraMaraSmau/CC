const REVIEWS_URL = "http://localhost:8000/public/api/reviews/"

const addReview = async (review) => {
    try {
        const options = {
            method: "POST",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "UserID_id": review.userID,
                "LastName": review.lastName,
                "FirstName": review.firstName,
                "Rating": review.rating,
                "Comment": review.comment,
                "Timestamp": review.timestamp
            }),
        };

        const response = await fetch(REVIEWS_URL + "add/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const updateReview = async (review) => {
    try {
        const options = {
            method: "PUT",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "UserID_id": review.userID,
                "LastName": review.lastName,
                "FirstName": review.firstName,
                "Rating": review.rating,
                "Comment": review.comment,
                "Timestamp": review.timestamp
            }),
        };

        const response = await fetch(REVIEWS_URL + "update/" + review.id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const deleteReview = async (id) => {
    try {
        const options = {
            method: "DELETE",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id}),
        };

        const response = await fetch(REVIEWS_URL + "delete/" + id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const getReviewById = async (id) => {
    try {

        const options = {
            method: "GET",
            mode: 'no-cors',
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(REVIEWS_URL + id + "/", options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

const getAllReviews = async () => {
    try {

        const options = {
            method: "GET",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(REVIEWS_URL, options);
        const responseJson = await response.json();

        const data = JSON.parse(JSON.stringify(responseJson));
        return data;
    } catch (e) {
        console.log(e);
    }
};

export const ReviewService = {
    addReview,
    updateReview,
    deleteReview,
    getReviewById,
    getAllReviews
};