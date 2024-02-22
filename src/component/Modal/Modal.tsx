import React from "react";

interface ModalType {
  aberto: boolean;
  alternar: () => void;
  modulo?: React.Component;
  opacidade?: string;
}

export default function Modal(props: ModalType | any) {
  const transparencia = props.opacidade ? props.opacidade : "bg-opacity-50";

  return (
    <>
      {props.aberto && (
        <div className="absolute overflow-y-auto z-50">
          <div
            className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-screen w-full bg-black z-10 ${transparencia} overflow-y-auto`}
          >
            <div className="flex justify-center items-center h-full max-w-full overflow-x-auto">
              {props.modulo}
            </div>
          </div>
        </div>
      )}
    </>
  );
}