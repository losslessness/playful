package com.losslessness.playful.controllers;

import com.losslessness.playful.dto.ProductDTO;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    // POST
    @PostMapping
    public static ProductDTO postProduct(@RequestBody ProductDTO product) {
        return null;
    }

    // GET
    @GetMapping()
    public static List<ProductDTO> getAllProducts() {
        return Collections.EMPTY_LIST;
    }

}
