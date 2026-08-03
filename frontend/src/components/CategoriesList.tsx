import { categoriesListTitle, categories } from "@/constants/index";
import CategoryCard from "@/components/common/CategoryCard";

export default function CategoriesList() {
  return (
    <section>
      <div className="categories">
        <h1 className="categories-title">{categoriesListTitle}</h1>
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