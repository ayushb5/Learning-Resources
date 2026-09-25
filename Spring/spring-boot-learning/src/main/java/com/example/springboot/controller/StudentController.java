package com.example.springboot.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.dto.StudentDto;
import com.example.springboot.entity.Student;
import com.example.springboot.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
	private final StudentService studentService;

	public StudentController(StudentService studentService) {
		this.studentService = studentService;
	}

	@PostMapping
	public ResponseEntity<Student> saveStudent(@RequestBody StudentDto dto) {
		Student student = new Student();
		student.setName(dto.getName());
		student.setEmail(dto.getEmail());
		student.setRollNo(dto.getRollNo());
		student.setSubject(dto.getSubject());

		Student savedStudent = studentService.saveStudent(student);

		return ResponseEntity.status(HttpStatus.CREATED).body(savedStudent);
	}

	@GetMapping
	public ResponseEntity<List<Student>> getAllStudents() {
		List<Student> students = studentService.getAllStudents();
		return ResponseEntity.ok(students);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
		Student existingStudent = studentService.getStudentById(id);
		if (existingStudent == null) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(existingStudent);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Student> updateStudentById(@PathVariable Long id,@RequestBody StudentDto dto) {
		Student existingStudent = studentService.getStudentById(id);
		if (existingStudent == null) {
			return ResponseEntity.notFound().build();
		}
		existingStudent.setName(dto.getName());
		existingStudent.setEmail(dto.getEmail());
		existingStudent.setRollNo(dto.getRollNo());
		existingStudent.setSubject(dto.getSubject());

		Student updatedStudent = studentService.saveStudent(existingStudent);
		return ResponseEntity.ok(updatedStudent);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteStudentById(@PathVariable Long id) {
		Student existingStudent = studentService.getStudentById(id);
		if (existingStudent == null) {
			return ResponseEntity.notFound().build();
		}

		studentService.deleteStudentById(id);
		return ResponseEntity.noContent().build();
	}
}
