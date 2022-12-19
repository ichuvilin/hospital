import {$authHost, $host} from "./index";

export const fetchDoctor = async () => {
    const {data} = await $host.get("api/doctor")
    return data;
}

export const fetchReviews = async () => {
    const {data} = await $host.get("api/review")
    return data;
}

export const fetchBranch = async () => {
    const {data} = await $host.get('api/branch')
    return data
}

export const createRecord = async (record) => {
     await $authHost.post("api/record/add", record)
    return "OK";
}

export const getAllRecordsForOneUser = async (id) => {
    const {data} = await $authHost.get("api/record/" + id);
    return data;
}

export const createReview = async (review) => {
    const {data} = await $authHost.post("api/review/add", review)
    return data;
}

export const createDoctor = async (doctor) => {
    const {data} = await $authHost.post("api/doctor/add", doctor)
    return data;
}

export const createBranch = async (branch) => {
    const {data} = await $authHost.post('api/branch/add', branch)
    return data;
}
