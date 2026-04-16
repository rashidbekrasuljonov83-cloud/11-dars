//1. Baholash tizimi (Switch)Foydalanuvchi 1 dan 5 gacha son kiritadi. Shu songa mos ravishda natijani chiqaring:
// let a = 6;
// switch (a) {
//   case 1:
//     console.log("yomon");
//     break;
//   case 2:
//     console.log("qoniqarsiz");
//     break;
//   case 3:
//     console.log("qoniqarli ");
//     break;
//   case 4:
//     console.log("yaxshi ");
//     break;
//   case 5:
//     console.log("a'lo ");
//     break;
//   default:
//     console.log("1 dan 5gacha son kiriting");
// }

//<=================================================================================================================================

//2. Fasllar (Switch case grouping)Oy raqami kiritilganda (1-12) qaysi fasl ekanligini aniqlang.Namuna: 12, 1, 2 bo'lsa — "Qish"; 3, 4, 5 bo'lsa — "Bahor" va hokazo.

// let oy = 4;

// switch (oy) {
//   case 12:
//   case 1:
//   case 2:
//     console.log("Qish");
//     break;
//   case 3:
//   case 4:
//   case 5:
//     console.log("Bahor");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     console.log("Yoz");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     console.log("Kuz");
//     break;
//   default:
//     console.log("Bunday oy mavjud emas");
// }

//<=================================================================================================================================

//3. Kabisa yili (Mantiqiy operatorlar) Yil kiritiladi (masalan: 2024). Agar yil 4 ga bo'linsa va 100 ga bo'linmasa, YOKI 400 ga bo'linsa — "Kabisa yili", aks holda "Oddiy yil" deb chiqsin.

// let yil = 2056;

// if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
//   console.log("kabisa yili");
// } else {
//   console.log("Oddiy yil");
// }

//<=================================================================================================================================

//4. Kattasini aniqlash (Ternary)  Ikkita a va b sonlari berilgan. ternary operatoridan foydalanib, ularning kattasini max degan o'zgaruvchiga o'zlashtiring.

// let a = 35;
// let b = 56;
// let kattason = a > b ? a : b;
// console.log("Katta son: " + kattason);

//<=================================================================================================================================

//5. Juft yoki Toq (Ternary) Berilgan sonning juft yoki toqligini bitta satrda aniqlang va natijani konsolga chiqaring

// let son = 17;
// let natija = son % 2 === 0 ? "Juft" : "Toq";
// console.log(natija);

//<=================================================================================================================================

//6. Supermarket chegirmasi (If + Logical)
// Xarid summasi va foydalanuvchida kupon bor-yo'qligi (true/false) beriladi.

// Agar summa 100,000 dan katta VA kupon bo'lsa — "20% chegirma".

// Agar faqat summa 100,000 dan katta bo'lsa — "5% chegirma".

// Aks holda — "Chegirma yo'q".

//<=================================================================================================================================

// 7. Hafta kuni (Switch)
// 1 dan 7 gacha son kiritilganda haftaning mos kunini chiqaring. 6 va 7 raqamlari uchun qo'shimcha ravishda "Dam olish kuni" yozuvi ham chiqsin.

// let kun = 3;

// switch (kun) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//   case 7:
//     let kunNomi = kun === 6 ? "Shanba" : "Yakshanba";
//     console.log(kunNomi + " - Dam olish kuni");
//     break;
//   default:
//     console.log("  1 dan 7 gacha son kiriting!");
// }

//<=================================================================================================================================

// 8. Kirish huquqi (Complex Logic)
// Foydalanuvchi yoshi va yonida ota-onasi borligi haqida ma'lumot berilgan.

// Agar yoshi >= 18 bo'lsa — "Ruxsat berildi".

// Agar yoshi < 18 bo'lsa va ota-onasi bilan bo'lsa — "Faqat ota-ona bilan ruxsat".

// Aks holda — "Ruxsat berilmadi".

// let yosh = 10;
// let ota_onasi = true;

// if (yosh >= 18) {
//   console.log("Ruxsat berildi");
// } else if (yosh < 18 && ota_onasi === true) {
//   console.log("Faqat ota-ona bilan ruxsat beriladi");
// } else {
//   console.log("Ruxsat berilmadi");
// }

//<=================================================================================================================================

// 9. Sonning holati (If else chain)
// Berilgan sonning musbat, manfiy yoki nolga tengligini aniqlang.

// let son = 23;

// if (son > 0) {
//   console.log(" musbat");
// } else if (son < 0) {
//   console.log(" manfiy");
// } else {
//   console.log("Son nolga teng");
// }

//<=================================================================================================================================

// 10. Type Checker (Switch + typeof)
// O'zgaruvchining turini (type) tekshiring.

// Agar number bo'lsa — "Son kiritdingiz".

// Agar string bo'lsa — "Matn kiritdingiz".

// Agar boolean bo'lsa — "Mantiqiy qiymat".

// let qiymat = 345;

// switch (typeof qiymat) {
//   case "number":
//     console.log("Son kiritdingiz");
//     break;
//   case "string":
//     console.log("Matn kiritdingiz");
//     break;
//   case "boolean":
//     console.log("Mantiqiy qiymat");
//     break;
//   case "object":
//     console.log("Obyekt yoki null kiritdingiz");
//     break;
//   case "undefined":
//     console.log("Qiymat aniqlanmagan");
//     break;
//   default:
//     console.log("Noma'lum turdagi ma'lumot");
// }
