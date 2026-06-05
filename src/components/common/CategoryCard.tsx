import Image from "next/image";

export default function CategoryCard({icon, label}: CategoryCardProps) {
  return (
    <main className="category-card">
      <div className="category-card-image">
        <Image
          src={icon}
          alt={label}
          height={64}
          width={64}
        />
      </div>
      <p className="category-card-title">{label}</p>
    </main>
  );
}