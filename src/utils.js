import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import { DATE_FORMAT, TIME_FORMAT, FULL_DATE_FORMAT } from './const.js';

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

dayjs.extend(duration);
dayjs.extend(relativeTime);

const MSEC_IN_SEC = 1000;
const SEC_IN_MIN = 60;
const MIN_IN_HOUR = 60;
const HOUR_IN_DAY = 24;

const MSEC_IN_HOUR = MIN_IN_HOUR * SEC_IN_MIN * MSEC_IN_SEC;

const MSEC_IN_DAY = HOUR_IN_DAY * MSEC_IN_HOUR;

function getPointDuration(dateFrom, dateTo) {
  const timeDiff = dayjs(dateTo).diff(dayjs(dateFrom));

  let pointDuration = 0;

  switch (true) {
    case timeDiff >= MSEC_IN_DAY:
      pointDuration = dayjs.duration(timeDiff).format('DD[D] HH[H] mm[M]');
      break;
    case timeDiff >= MIN_IN_HOUR:
      pointDuration = dayjs.duration(timeDiff).format('HH[H] mm[M]');
      break;
    case timeDiff >= MSEC_IN_HOUR:
      pointDuration = dayjs.duration(timeDiff).format('mm[M]');
      break;
  }

  return pointDuration;
}

function getCurrentDate() {
  return dayjs().toDate();
}

function generateDate(date) {
  return dayjs(date).add(getRandomInteger(0, 60), 'minute').add(getRandomInteger(0, 24), 'hour').add(getRandomInteger(0, 30), 'day').toDate();
}

function formatToDate(date) {
  return dayjs(date).format(DATE_FORMAT);
}

function formatToTime(date) {
  return dayjs(date).format(TIME_FORMAT);
}

function formatToFullDate(date) {
  return dayjs(date).format(FULL_DATE_FORMAT);
}

export { getRandomArrayElement, getRandomInteger, getPointDuration, getCurrentDate, generateDate, formatToDate, formatToTime, formatToFullDate };
