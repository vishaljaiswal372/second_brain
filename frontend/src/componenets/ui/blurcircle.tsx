interface BlurCircleProps {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
  color?: string;
}

export const BlurCircle = (props: BlurCircleProps) => {
  return (
    <div
      className="absolute z-0 h-110 w-120 aspect-square rounded-full blur-3xl"
      style={{
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        right: props.right,
        backgroundColor: props.color
      }}
    />
  );
};