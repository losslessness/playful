// @ts-nocheck

"use client";

import {
  categories,
  colors,
  filterCategories,
  filterClear,
  filterColors,
  filterCurrency,
  filterPrice,
  filterTitle,
  products
} from "@/constants/index";
import { useCallback, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { ListFilter } from "lucide-react";
import { mediaQueryHandler } from "@/lib/utils";

export default function Filter({device}: DeviceProps) {
  const [chosenCategories, setChosenCategories] = useState([]);
  const onCategoryClick = useCallback((item) => {
    chosenCategories.indexOf(item) === -1 ? setChosenCategories([...chosenCategories, item])
                                          : setChosenCategories(chosenCategories?.filter((category) => category !== item));
  })

  const field = [0, 500];
  const [range, setRange] = useState([field[0], field[1]]);

  const [chosenColors, setChosenColors] = useState([]);
  const onColorClick = useCallback((item) => {
    chosenColors.indexOf(item) === -1 ? setChosenColors([...chosenColors, item])
                                      : setChosenColors(chosenColors?.filter((color) => color !== item));
  }, [chosenColors, setChosenColors]);

  const filters = [chosenCategories, range, chosenColors];

  return (
    <section>
      <div className={device === "Desktop" ? "filter" : "filter-mobile"}>
        <div className="filter-header">
          <h4 className="filter-header-title">{filterTitle}</h4>
          <ListFilter size={20} />
        </div>

        {/* Categories */}
        <div className="filter-content">
          <p className="filter-content-title">{filterCategories}</p>
          <div>
            {
              categories.map((item, index) => {
                const [selection, setSelection] = useState(false);

                return (
                  <div className="filter-categories" key={item?.label}>
                    <input
                      className="filter-categories-checkbox"
                      type="checkbox"
                      id={item?.code}
                      name={item?.code}
                      onClick={(event) => {
                        setSelection(!selection);
                        onCategoryClick(item?.label);
                      }}
                    />
                    <label
                      className="filter-categories-label"
                      htmlFor={item?.code}
                    >
                      {item?.label}
                    </label>
                  </div>
                );
              })
            }
          </div>
        </div>
        
        {/* Price */}
        <div className="filter-content">
          <p className="filter-content-title">{filterPrice}</p>
          <div className="filter-price-field">
            <p>{field[0]}</p>
            <p>{field[1]}</p>
          </div>
          <Slider
            className="filter-price-slider"
            value={range}
            onValueChange={(value) => setRange(value as number[])}
            min={field[0]}
            max={field[1]}
          />
          <div className="filter-price-slider-range">
            <div className="filter-price-slider-range-input">
              <p className="filter-price-slider-range-input-currency">{filterCurrency}</p>
              <input
                type="number"
                className="filter-price-slider-range-input-value"
                placeholder={String(range[0])}
                onChange={(event) => Number(event.target.value) < range[1] &&
                                    setRange([Number(event.target.value), range[1]]
                        )}
              />
            </div>
            <div className="filter-price-slider-range-input">
              <p className="filter-price-slider-range-input-currency">{filterCurrency}</p>
              <input
                type="number"
                className="filter-price-slider-range-input-value"
                placeholder={String(range[1])}
                onChange={(event) => Number(event.target.value) > range[0] &&
                                    setRange([range[0], Number(event.target.value)]
                        )}
              />
            </div>
          </div>
        </div>

        {/* Color */}
        <div className="filter-content">
          <p className="filter-content-title">{filterColors}</p>
          <div className="filter-color">
            {
              colors?.map((item) => {
                const [selection, setSelection] = useState(false);

                return(
                  <div className="filter-color-item" key={item?.label}>
                    <button
                      className={
                        selection ? "filter-color-item-active"
                                  : "filter-color-item-inactive"
                      }
                      style={{backgroundColor: `${item?.code}`}}
                      onClick={() => {
                        setSelection(!selection);
                        onColorClick(item?.label);
                      }}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        
        {/* Clear */}
        <button className="filter-clear">
          {filterClear}
        </button>
      </div>
    </section>
  );
}