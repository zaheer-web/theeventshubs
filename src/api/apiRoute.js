import axiosInstance from "./axiosInstance";

/* ================= CREATE CONTACT ================= */
export const createContact = async (data) => {
try {
const response = await axiosInstance.post("/grandaura/contact", data);
return response.data;
} catch (error) {
throw error;
}
};

/* ================= GET ALL CONTACTS ================= */
export const getAllContacts = async () => {
try {
const response = await axiosInstance.get("/grandaura/contact");
return response.data;
} catch (error) {
throw error;
}
};

/* ================= DELETE CONTACT ================= */
export const deleteContact = async (id) => {
try {
const response = await axiosInstance.delete(`/grandaura/contact/${id}`);
return response.data;
} catch (error) {
throw error;
}
};
