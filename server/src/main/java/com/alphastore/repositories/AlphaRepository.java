package com.alphastore.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alphastore.entities.Alphabets;

@Repository
public interface AlphaRepository extends JpaRepository<Alphabets, Integer> {

}
