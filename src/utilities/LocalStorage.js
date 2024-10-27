// Function to get user email from LocalStorage
export const getUserEmail = () => {
  return localStorage.getItem("userEmail");
};

// Function to set user email in LocalStorage
export const setUserEmail = (email) => {
  localStorage.setItem("userEmail", email);
};

// Function to remove user email from LocalStorage
export const removeUserEmail = () => {
  localStorage.removeItem("userEmail");
};
