package com.example.springboot.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springboot.entity.Student;
import com.example.springboot.repository.StudentRepository;

@Service
public class StudentService {
	private final StudentRepository studentRepository;

	public StudentService(StudentRepository studentRepository) {
		this.studentRepository = studentRepository;
	}

	public Student saveStudent(Student student) {
		return studentRepository.save(student);
	}

	public Student getStudentById(Long id) {
		return studentRepository.findById(id).orElse(null);
	}

	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}

	public boolean deleteStudentById(Long id) {
		Student existingStudent = studentRepository.findById(id).orElse(null);
		if (existingStudent == null) {
			return false;
		}

		studentRepository.deleteById(id);
		return true;
	}

}
