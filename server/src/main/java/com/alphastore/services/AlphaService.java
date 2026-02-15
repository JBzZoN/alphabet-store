package com.alphastore.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.alphastore.entities.Alphabets;
import com.alphastore.repositories.AlphaRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AlphaService {

	@Autowired
	AlphaRepository alphaRepository;
	
	public List<Alphabets> getAllAlphabets() {
		// TODO Auto-generated method stub
		return alphaRepository.findAll();
	}

}
