# Note Sharing App

A simple, user-friendly platform for sharing and accessing notes. Users can view publicly available notes or create an account to upload their own notes.

---

## 🚀 Features

- **Browse Notes**:  
  View all shared notes with metadata (title, description, and uploader).
- **Note Details**:  
  Access detailed information about a note and download it.
- **User Authentication**:  
  Create an account or log in to upload notes. Guests can only view notes.
- **Upload Notes**:  
  Authenticated users can upload `.pdf` files with relevant metadata.
- **Success Messages**:  
  Receive confirmation after actions such as uploading or downloading a note.

---

## 📂 Project Structure

### User Flows
#### **Existing User**
1. Navigate to "All Notes" page.
2. Select a note to view details.
3. Download the note or return to the list.

#### **New User**
1. Navigate to "All Notes" and select a note.
2. Attempt to download, and be redirected to sign in or sign up.
3. After authentication, proceed with the action.

#### **Upload Flow**
1. Log in or sign up.
2. Access the "Create Note" page.
3. Fill out the upload form (title, description, and file).
4. Submit the form to create a new note.

---

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Backend**: [Your chosen backend]  
  Handles note storage and user authentication.
- **Database**: [Your chosen database]  
  Stores metadata about notes and user information.
- **File Storage**: [Your chosen storage solution]  
  Stores uploaded `.pdf` files.
- **Authentication**: [Your chosen authentication service]  
  Manages user sign-up, login, and authentication flows.

---
