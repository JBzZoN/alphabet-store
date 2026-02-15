package com.alphastore.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alphastore.dto.Tester;
import com.alphastore.services.AlphaService;

@RestController
@RequestMapping("/alpha")
@CrossOrigin
public class AlphaController {
	
	@Autowired
	AlphaService alphaService;
	
	@PatchMapping("/test")
	public ResponseEntity<?> tester() {
		return ResponseEntity.ok(new Tester("success", "testing done properly"));
	}
	
	@GetMapping("/all")
	public ResponseEntity<?> getAllAlphabets() {
		return ResponseEntity.ok(alphaService.getAllAlphabets());
	}
	
}
