package com.losslessness.playful.services;

import com.losslessness.playful.dto.ProductDTO;
import com.losslessness.playful.entities.Product;

import java.util.List;

public interface ProductService {
    private Product addProduct(ProductDTO productDTO) {
        Product product = new Product();

        product.setIsNewArrival(productDTO.getIsNewArrival());
        product.setBrand(productDTO.getBrand());
        product.setModel(productDTO.getModel());
        product.setDescription(productDTO.getDescription());
        product.setPrice(productDTO.getPrice());

        return product;
    }

    List<Product> getAllProducts();
}