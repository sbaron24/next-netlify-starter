import Header from "@components/Header";
import Image from "next/image";

export default function PageSection({
  imgLeft = true,
  src,
  imgWidth,
  sectionTitle,
  timeInfo,
  eventInfo,
}) {
  const img = <Image src={src} alt="" width={imgWidth} />;
  const content = (
    <div className="contentSection">
      <div>
        <Header title={sectionTitle} />
        <p className="description">{timeInfo}</p>
        <p className="description">{eventInfo}</p>
      </div>
    </div>
  );
  return (
    <div className="pageSection">
      {imgLeft ? img : content}
      {imgLeft ? content : img}
    </div>
  );
}
