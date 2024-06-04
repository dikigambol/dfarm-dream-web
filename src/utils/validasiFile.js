export function validateFile(fileInput) {
    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ["image/jpeg", "image/jpg"];
  
    if (fileInput.size > maxSize) {
      return false;
    }
  
    if (!allowedTypes.includes(fileInput.type)) {
      return false;
    }
  
    return true;
  }
  