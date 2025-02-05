import dayjs from "dayjs";

export function formatDateString(date: Date) {
    return dayjs(date).format('YYYY년 MM월 DD일 - hh시 mm분 ss초');
}