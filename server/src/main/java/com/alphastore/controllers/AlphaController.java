package com.alphastore.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alphastore.dto.BuyDto;
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
	
	@PatchMapping("/buy")
	public ResponseEntity<?> modifyOwners(@RequestBody BuyDto buyDto) {
				
		alphaService.modifyOwners(buyDto);
		
		return ResponseEntity.status(HttpStatus.OK).build();
	}
	
}
