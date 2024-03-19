import { digitalWallets } from "~/temporarydb/digitalwallet";
import WalletsGroup from "./WalletsGroup";

const SubAdvertisement = () => {
  const wallets = digitalWallets;
  return (
    <div className="grid h-20 w-full grid-cols-2 justify-center gap-2 bg-transparent px-2 py-2">
      <div className="m-0.5 flex h-full w-full items-center justify-center rounded-lg bg-advertisement-subbg px-4 text-center font-bold text-white">
        {"LƯỚT VÀ NHẬN \n ƯU ĐÃI NGAY !"}
      </div>
      <div>
        <div className="flex h-fit w-full">
          <span className="inline-block align-bottom px-1 text-xs font-bold text-advertisement-button text-center">
            GIẢM THÊM
          </span>
          <span className="inline-block align-bottom text-2xs font-bold text-advertisement-button text-center">
            với nhiều ƯU ĐÃI
          </span>
        </div>
        <span className="inline-block align-bottom text-2xs px-1 font-bold text-advertisement-button text-center">
          Khi thanh toán bằng Ví điện tử
        </span>
        <WalletsGroup imgLinks={wallets}/>
      </div>
    </div>
  );
};

export default SubAdvertisement;
