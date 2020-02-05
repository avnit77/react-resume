import React, { Component } from 'react';
import resume from '../data/resume.json';


export default class Resume extends Component {
  state = {
    name: resume.name,
    title: resume.title,
    summary: resume.summary,
    phone: resume.phone,
    email: resume.email,
    sites: resume.sites,
    skills: resume.skills,
    experience: resume.experience,
    projects: resume.projects,
    education: resume.education
  }

  render() {
    const { name, title, summary, phone, email, sites, skills, experience, projects, education } = this.state;

    return (
      <>
        <p>name:{name}</p>
        <p>title:{title} </p>
        <p>summary:{summary}</p>
        <p>phone:{phone} email:{email} sites:{sites}</p>
        <p>skills:{skills}</p>
        <p>experience:{experience}</p>
        <p>projects:{projects}</p>
        <p>Education:{education}</p>
      </>
    );
  }
}
