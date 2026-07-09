import api from './api';

export const submitRecommendationRequest = async (payload) => {
  const response = await api.post('/recommendations', payload);
  return response.data;
};
