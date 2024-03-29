import { digitalWallets } from "~/temporarydb/digitalwallet";
import WalletsGroup from "./WalletsGroup";

const SubAdvertisement = () => {
  const wallets = digitalWallets;
  return (
    <div className="flex w-full h-[12vh] justify-center bg-transparent md:h-20">
      <div className="grid grid-cols-2 h-full md:w-1/4 py-2 w-full gap-2">
        <div className=" text-sm m-0.5 flex h-fit py-2 w-full items-center justify-center rounded-lg bg-advertisement-subbg px-2 text-center font-bold text-white">
          {"LƯỚT VÀ NHẬN \n ƯU ĐÃI NGAY !"}
        </div>
        <div className="w-fit justify-center">
          <div className="flex h-fit w-fit">
            <span className="inline-block px-1 text-center align-bottom text-xs font-bold text-advertisement-button">
              GIẢM THÊM
            </span>
            <span className="inline-block text-center align-bottom text-2xs font-bold text-advertisement-button">
              với nhiều ƯU ĐÃI
            </span>
          </div>
          <span className="inline-block px-1 text-center align-bottom text-2xs font-bold text-advertisement-button">
            Khi thanh toán bằng Ví điện tử
          </span>
          <WalletsGroup imgLinks={wallets} />
        </div>     
      </div>
    </div>
  );
};

export default SubAdvertisement;
