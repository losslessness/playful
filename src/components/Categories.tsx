import { categoriesTitle, categories } from "@/constants/index";
import CategoryCard from "@/components/common/CategoryCard";

export default function Categories() {
  return (
    <section>
      <div className="categories">
        <h1 className="categories-title">{categoriesTitle}</h1>
        <div className="categories-list">
          {
            categories.map((item) => {
              return (
                <CategoryCard
                  key={item?.label}
                  icon={item?.icon}
                  label={item?.label}
                />
              );
            })
          }
        </div>
      </div>
    </section>
  );
}