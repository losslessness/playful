import Image from "next/image";

export default function CategoryCard({icon, title}: CategoryProps) {
  return (
    <main className="category-card">
      <div className="category-card-image">
        <Image
          src={icon}
          alt={title}
          height={64}
          width={64}
        />
      </div>
      <p className="category-card-title">{title}</p>
    </main>
  );
}