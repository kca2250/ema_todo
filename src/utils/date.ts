export const currentDate = () => {
  const d = new Date();
  const year = d.getFullYear();
  const mouth = d.getMonth() + 1;
  const day = d.getDate();
  const formatDate = `${year}-${mouth}-${day}`;

  return formatDate;
};
