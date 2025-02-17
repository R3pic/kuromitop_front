import dayjs from 'dayjs';

export function formatDateString(date: string): string;
export function formatDateString(date: Date): string;
export function formatDateString(date: string | Date): string {
  return dayjs(date).format('YYYY년 MM월 DD일 hh시 mm분 ss초')
}