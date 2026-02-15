package com.alphastore.entities;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "alphabets")
@AttributeOverride(name = "id", column = @Column(name="alphabet_id"))
@Data
public class Alphabets extends BaseEntity{

	String alphabet;
	
    @Column(name = "owner_name")
    private String ownerName;

    @Column(name = "own_count")
    private Integer ownCount;
	
}
