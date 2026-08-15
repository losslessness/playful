package com.losslessness.playful.services;

import com.losslessness.playful.entities.Product;

import java.util.List;

public interface ProductService {
    public Product addProduct(Product product);

    public List<Product> getAllProducts();
}
