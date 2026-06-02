import Image from "next/image";

type SplitPanelProps = {
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

export default function SplitPanel({
  children,
  image,
  imageAlt,
  reverse,
}: SplitPanelProps) {
  return (
    <div className={reverse ? "split split--reverse" : "split"}>
      <div>{children}</div>
      <div className="split__image">
        <Image src={image} alt={imageAlt} width={640} height={440} />
      </div>
    </div>
  );
}
