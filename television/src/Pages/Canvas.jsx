import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const CanvasItem = React.forwardRef((props, ref) => (
  <div className="border-4 max-w-screen-md mx-auto mt-4">
    <canvas ref={ref} className="aspect-video w-full " />

    <p className="text-xl mt-2 mx-2">
      Channel Name:
      <span className="font-semibold"> {props.channelName}</span>
    </p>
    <p className="text-xl mx-2 mb-2">
      Current Channel:
      <span className="font-semibold"> {props.channelNumber}</span>
    </p>
  </div>
));

function draw(ctx, imgSrc) {
  const canvas = ctx.canvas;

  var image = new Image();
  image.src = "/images/" + imgSrc;
  image.onload = () => {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  };

  requestAnimationFrame(() => draw(ctx));
}

export const Canvas = ({ channel, channelNumber }) => {
  const canvasRef = useRef();
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    requestAnimationFrame(() => draw(ctx, channel.image));
  }, [channel]);

  return (
    <CanvasItem
      ref={canvasRef}
      channelName={channel.name}
      channelNumber={channelNumber}
    />
  );
};
