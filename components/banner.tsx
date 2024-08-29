import { Banner as BannerType } from "@/types";

interface BannerProps {
  data: BannerType;
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  // Debug: Log URL gambar untuk memastikan path yang benar
  console.log("Banner Image URL:", data?.imageUrl);

  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
        style={{
          backgroundImage: `url(${data?.imageUrl ? data.imageUrl : "/assets/images/banner.jpg"})`,
          backgroundSize: "cover", // Pastikan gambar mencakup area
          backgroundPosition: "center", // Atur posisi gambar di tengah
        }}
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-white">
            {data?.label || "ThievStore"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
