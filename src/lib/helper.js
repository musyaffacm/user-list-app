export const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const formatDate = (date, month = "long") => {
  if (!date) {
    return "-";
  }
  return new Date(date).toLocaleDateString("id-id", {
    year: "numeric",
    month: month,
    day: "numeric",
  });
};
