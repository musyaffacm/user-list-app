export const capitalize = (word) => {
  if (!word) {
    return "-";
  }
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

export const formatDateTime = (date, month = "long") => {
  if (!date) {
    return "-";
  }

  return new Date(date)
    .toLocaleString("id-id", {
      year: "numeric",
      month: month,
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    })
    .replace(/pukul/g, "");
};
