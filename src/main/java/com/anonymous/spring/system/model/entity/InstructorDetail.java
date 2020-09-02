package com.anonymous.spring.system.model.entity;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "instructor_detail")
public class InstructorDetail implements Serializable {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "youtube_channel")
	private String youtubeChannel;

	@Column(name = "hobby")
	private String hobBy;

	/* Bi - Directional */
	@OneToOne(fetch = FetchType.LAZY, mappedBy = "instructorDetail", cascade = { CascadeType.PERSIST,
			CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH })
	private Instructor instructor;

	public InstructorDetail() {

	}

	public InstructorDetail(String youtubeChannel, String hobBy) {
		super();
		this.youtubeChannel = youtubeChannel;
		this.hobBy = hobBy;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getYoutubeChannel() {
		return youtubeChannel;
	}

	public void setYoutubeChannel(String youtubeChannel) {
		this.youtubeChannel = youtubeChannel;
	}

	public String getHobBy() {
		return hobBy;
	}

	public void setHobBy(String hobBy) {
		this.hobBy = hobBy;
	}

	public Instructor getInstructor() {
		return instructor;
	}

	public void setInstructor(Instructor instructor) {
		this.instructor = instructor;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + id;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		InstructorDetail other = (InstructorDetail) obj;
		if (id != other.id)
			return false;
		return true;
	}

}
