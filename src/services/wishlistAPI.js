const API_URL = 'http://localhost:5000/api/wishlist';

// Always get the token fresh from localStorage in each call
const getToken = () => localStorage.getItem('token');

// ✅ Add to Wishlist
export const addToWishlist = async (productId) => {
  const token = getToken();
  const response = await fetch(`${API_URL}/add/${productId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

// ✅ Remove from Wishlist
export const removeFromWishlist = async (productId) => {
  const token = getToken();
  const response = await fetch(`${API_URL}/remove/${productId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

// ✅ Get Wishlist
export const getWishlist = async () => {
  const token = getToken();
  const response = await fetch(`${API_URL}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
