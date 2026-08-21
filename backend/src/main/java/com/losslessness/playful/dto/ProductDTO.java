package com.losslessness.playful.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
    private UUID id;
    private Boolean isNewArrival;
    private UUID categoryID;
    private String categoryName;
    private String brand;
    private String model;
    private String description;
    private BigDecimal price;
    private List<VariantDTO> variants;
    private List<ResourceDTO> resources;
}
