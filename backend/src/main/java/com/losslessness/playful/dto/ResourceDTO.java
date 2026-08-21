package com.losslessness.playful.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ResourceDTO {
    private UUID id;
    private Boolean isPrimary;
    private String type;
    private String name;
    private String url;
}