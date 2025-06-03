import axios from 'axios'

const API_URL = "https://fczgpxtdjrexadpfbvpd.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjemdweHRkanJleGFkcGZidnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5MzEzOTIsImV4cCI6MjA2NDUwNzM5Mn0.6ounH-zVDBru-xbv1h1UAtzFnVRH3gvwkfb5-Y4Rclo"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

     async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    },
    
    async updateNote(id, note) {
    const response = await axios.patch(`${API_URL}?id=eq.${id}`, note, { headers })
    return response.data
    },
    
    async deleteNote(id) {
    const response = await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    return response.data
  }
}