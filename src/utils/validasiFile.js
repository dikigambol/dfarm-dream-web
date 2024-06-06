export function validateFile(fileInput) {
    const maxSize = 2 * 1024 * 1024;
    const allowedTypes = ["image/jpeg", "image/jpg","image/png"];
  
    if (fileInput.size > maxSize) {
      return false;
    }
  
    if (!allowedTypes.includes(fileInput.type)) {
      return false;
    }
  
    return true;
  }
  