package com.capg_project.capg_project.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capg_project.capg_project.model.Books;

public interface BooksRepo extends JpaRepository<Books, Long> {

	void deleteBookById(Long id);

	Optional<Books> findBookById(Long id);
	
}
