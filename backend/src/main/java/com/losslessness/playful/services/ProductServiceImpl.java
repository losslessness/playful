package com.losslessness.playful.services;

import com.losslessness.playful.entities.Product;
import com.losslessness.playful.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product addProduct(Product product) {
        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();

        // TO-DO: Map products to ProductDTO

        return products;
    }
}