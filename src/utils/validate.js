export const isEmpty = (value) => {
  return (
    value === 0 ||
    value === null ||
    value === undefined ||
    value.toString().trim() === "" ||
    Object.keys(value).length === 0
  );
};
