import dateFormat from "dateformat";

const datetimeConverter = (timestamp) => {
  const now = new Date(timestamp * 1000);

  return dateFormat(now, "dd.mm.yyyy HH:MM");
};

const dateConverter = (timestamp) => {
  const now = new Date(timestamp * 1000);

  return {
    date: dateFormat(now, "dd"),
    month: dateFormat(now, "mmm"),
    day: dateFormat(now, "ddd"),
  };
};

export { datetimeConverter, dateConverter };
