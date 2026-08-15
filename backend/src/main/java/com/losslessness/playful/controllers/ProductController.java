package com.losslessness.playful.controllers;

import com.losslessness.playful.dto.ProductDTO;
import com.losslessness.playful.entities.Product;
import com.losslessness.playful.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // POST
    @PostMapping
    public ProductDTO postProduct(@RequestBody ProductDTO product) {
        return null;
    }

    // GET
    @GetMapping()
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> allProducts = productService.getAllProducts();

        return ResponseEntity.ok(allProducts);
    }
}
