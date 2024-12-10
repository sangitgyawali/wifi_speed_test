// src/utils/speedTestAPI.ts
export const getSpeed = async (): Promise<number> => {
    try {
      const response = await fetch('https://librespeed.org/api/v1/test?type=download');
      const data = await response.json();
      return parseFloat((data.speed / 1_000_000).toFixed(2)); // Convert to Mbps
    } catch (error) {
      console.error('Error fetching speed data:', error);
      throw new Error('Failed to fetch speed');
    }
  };
  