import Image from "next/image";

const Location = () => {
  return (
    <>
      <section className="rules bg-background-500 h-screen">
        <div className="banner flex flex-col justify-center items-center bg-location w-full h-[25rem] bg-cover bg-center opacity-70">
          <h2 className="text-[40.0pt]">𝖨𝖱𝖠𝖰 𝖫𝖤𝖦𝖤𝖭𝖣𝖲 𝖱𝖯</h2>
          <h2 className="text-[40.0pt]">اماكن السناريوهات</h2>
        </div>
        <div className="grid grid-cols-3 gap-4 p-8">
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-1.jpg"
              width={500}
              height={500}
              alt="Place 1"
              className="rounded-lg"
            />
            <h2>اسواق روميو</h2>
            <h2>594</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-2.png"
              width={500}
              height={500}
              alt="Place 2"
              className="rounded-lg"
            />
            <h2>برج اسياسيل للاتصالات</h2>
            <h2>526</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-3.png"
              width={500}
              height={500}
              alt="Place 3"
              className="rounded-lg"
            />
            <h2>مصنع القطن</h2>
            <h2>711</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-4.png"
              width={500}
              height={500}
              alt="Place 4"
              className="rounded-lg"
            />
            <h2>سفينه النقل البحريه</h2>
            <h2>936</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-5.png"
              width={500}
              height={500}
              alt="Place 5"
              className="rounded-lg"
            />
            <h2>مدينه الالعاب</h2>
            <h2>688</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-6.jpg"
              width={500}
              height={500}
              alt="Place 6"
              className="rounded-lg"
            />
            <h2>متجر المجوهرات</h2>
            <h2>642</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-7.png"
              width={500}
              height={500}
              alt="Place 7"
              className="rounded-lg"
            />
            <h2>البنك المركزي العراقي</h2>
            <h2>596</h2>
          </div>
          <div className="flex flex-col text-center text-[20px] font-bold">
            <Image
              src="./place-8.png"
              width={500}
              height={500}
              alt="Place 8"
              className="rounded-lg"
            />
            <h2>محل اسلحه</h2>
            <h2>745</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
