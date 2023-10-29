interface IAlquranSurah {
  nomor: number;
  nama: string;
  namaLatin: string;
  jumlahAyat: number;
  tempatTurun: string;
  arti: string;
  deskripsi: string;
  audioFull:{
    number1: string;
    number2: string;
    number3: string;
    number4: string;
    number5: string;
  }
}

export interface IAlquranData {
  data: IAlquranSurah[];
}

