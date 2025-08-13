// claude

import { parse, differenceInMinutes } from "date-fns"

/*
function generate(time: Date) {
  const charset: string = "1234567890abcdefhiklmnortuvwxz"
  const basetime = parse("2025/01/01 00:00", "yyyy/MM/dd HH:mm", new Date())
  const xor: number = 11937103
  return nanaid(time, basetime, xor)
}

function nanaid(now: Date, basetime: Date, xor: number) {
  const fusa = differenceInMinutes(now, basetime)
  return encode(fusa, xor)
}

function encode(m: number, xor: number) {
  const kake = m ^ xor
  let result = ""

}
*/

class Base30Encoder {
  private readonly charset: string = "1234567890abcdefhiklmnortuvwxz";
  private readonly baseDate = new Date(2025, 0, 1, 0, 0, 0, 0); // 2025年1月1日 00:00:00
  private readonly xorkey = 1111111;

  // 現在時刻から7文字のIDを生成
  generateId(): string {
    const now = new Date();
    const minutesFromBase = differenceInMinutes(now, this.baseDate);
    return this.encode(minutesFromBase);
  }

  // 分数を7文字の文字列に変換
  encode(minutes: number): string {
    if (minutes < 0) {
      throw new Error('負の値は対応していません');
    }

    const encrypted = minutes ^ this.xorkey

    let result = '';
    let value = encrypted;

    // 30進数に変換
    for (let i = 0; i < 7; i++) {
      result = this.charset[value % 30] + result;
      value = Math.floor(value / 30);
    }

    return result;
  }

  // 7文字の文字列を分数に復号
  decode(encoded: string): number {
    if (encoded.length !== 7) {
      throw new Error('7文字である必要があります');
    }

    let result = 0;
    for (let i = 0; i < encoded.length; i++) {
      const charIndex = this.charset.indexOf(encoded[i]);
      if (charIndex === -1) {
        throw new Error(`無効な文字: ${encoded[i]}`);
      }
      result = result * 30 + charIndex;
    }

    return result ^ this.xorkey;
  }

  // 復号した分数から日時を復元
  decodeToDate(encoded: string): Date {
    const minutes = this.decode(encoded);
    return new Date(this.baseDate.getTime() + minutes * 60000);
  }
}

const encoder = new Base30Encoder();

// IDを生成
const id = encoder.generateId();
console.log(`生成されたID: ${id}`); // 例: "00ABCD5"

// 復号
const minutes = encoder.decode(id);
const originalDate = encoder.decodeToDate(id);
console.log(`経過分数: ${minutes}`);
console.log(`元の日時: ${originalDate}`);
