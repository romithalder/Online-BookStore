package com.capg_project.capg_project.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg_project.capg_project.exception.BookNotFoundException;
import com.capg_project.capg_project.model.Books;
import com.capg_project.capg_project.repo.BooksRepo;

@Service
public class BookService {
	private final BooksRepo booksRepo;
	
	@Autowired
	public BookService(BooksRepo booksRepo) {
		this.booksRepo = booksRepo;
	}
	
	public Books addBooks(Books book) {
		book.setBookId(UUID.randomUUID().toString());
		return booksRepo.save(book);
	}
	
	public List<Books> findAllBooks(){
		return booksRepo.findAll();
	}
	
	public Books updateBooks(Books book) {
		return booksRepo.save(book);
	}
	
	public void deleteBooks(Long id) {
		booksRepo.deleteBookById(id);
	}
	
	public Books findBookById(Long id) throws BookNotFoundException {
		return booksRepo.findBookById(id)
					.orElseThrow(() -> new BookNotFoundException("Book is unavailable"));
		
	}
}
