import React, { useRef } from "react";
import * as QRCodeLibrary from "qrcode";

interface Props {
  value: string;
  color: string;
  backgroundColor: string;
  width: number;
  margin: number;
}

export const QRCode: React.FC<Props> = (props) => {
  let { value, color, backgroundColor, width = 200, margin = 1 } = props;
  let canvasRef = useRef<HTMLCanvasElement>();

  React.useEffect(() => {
    if (canvasRef?.current && value) {
      let canvas = canvasRef.current;
      QRCodeLibrary.toDataURL(
        canvas,
        value,
        {
          errorCorrectionLevel: "H",
          type: "image/jpeg",
          quality: 1,
          margin,
          width,
          color: {
            dark: color,
            light: backgroundColor,
          },
        },
        (error) => {
          if (error) {
            console.error(error);
          } else {
            console.log("QR Code generated");
          }
        }
      );
    }
  }, [canvasRef, value, color, backgroundColor, width, margin]);

  return <canvas ref={canvasRef} />;
};
