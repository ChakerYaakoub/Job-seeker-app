export const saveRecentJob = (recentJob) => {
    try {
      localStorage.setItem('recentJob', JSON.stringify(recentJob));
      return true;
    } catch (error) {
      console.error('Failed to store recent job in local storage:', error);
      return false;
    }
  };