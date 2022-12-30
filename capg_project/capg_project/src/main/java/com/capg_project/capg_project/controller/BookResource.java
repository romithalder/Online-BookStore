package com.capg_project.capg_project.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg_project.capg_project.exception.BookNotFoundException;
import com.capg_project.capg_project.model.Books;
import com.capg_project.capg_project.service.BookService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/book")
public class BookResource {
	private final BookService bookService;
	
	public BookResource(BookService bookService) {
		this.bookService = bookService;
	}
	
	@GetMapping("/all")
	public ResponseEntity<List<Books>> getAllBooks(){
		List<Books> book = bookService.findAllBooks();
		return new ResponseEntity<>(book, HttpStatus.OK);
	}
	
	@GetMapping("/find/{id}")
	public ResponseEntity<Books> getBooksById(@PathVariable("id") Long id) throws BookNotFoundException{
		Books books = bookService.findBookById(id);
		return new ResponseEntity<>(books, HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Books> addBook(@RequestBody Books book){
		Books newBook = bookService.addBooks(book);
		return new ResponseEntity<>(newBook, HttpStatus.CREATED);
	}
	
	@PutMapping("/update")
	public ResponseEntity<Books> updateBook(@RequestBody Books book){
		Books updateBook = bookService.updateBooks(book);
		return new ResponseEntity<>(updateBook, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteBook(@PathVariable("id") Long id){
		bookService.deleteBooks(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
}
