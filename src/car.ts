export const car = (speed: number): string => {
    if (speed <= 0) {
      return "Invalid";
    }
  
    if (speed <= 40) {
      return "Level shall be Low";
    }
  
    if (speed <= 120) {
      return "Level shall be Normal";
    }
  
    if (speed <= 220) {
      return "Level shall be High";
    }
  
    return "Level shall be Invalid";
  };