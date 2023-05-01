import React from 'react'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-xl navbar-light bg-light">
	<a href="#" className="navbar-brand"><i className="fa fa-cube"></i>Brand<b>Name</b></a>
	<button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
		<span className="navbar-toggler-icon"></span>
	</button>
	<div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
		<div className="navbar-nav">
			<a href="#" className="nav-item nav-link active">Home</a>
			<a href="#" className="nav-item nav-link">About</a>
			<div className="nav-item dropdown">
				<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
				<div className="dropdown-menu">
					<a href="#" className="dropdown-item">Web Design</a>
					<a href="#" className="dropdown-item">Web Development</a>
					<a href="#" className="dropdown-item">Graphic Design</a>
					<a href="#" className="dropdown-item">Digital Marketing</a>
				</div>
			</div>
			<a href="#" className="nav-item nav-link">Blog</a>
			<a href="#" className="nav-item nav-link">Contact</a>
		</div>
		<form className="navbar-form form-inline">
			<div className="input-group search-box">								
				<input type="text" id="search" className="form-control" placeholder="Search by Name" />
				<span className="input-group-addon"><i className="material-icons">&#xE8B6;</i></span>
			</div>
		</form>
		<div className="navbar-nav ml-auto">
			<a href="#" className="nav-item nav-link notifications"><i className="fa fa-bell-o"></i><span className="badge">1</span></a>
			<a href="#" className="nav-item nav-link messages"><i className="fa fa-envelope-o"></i><span className="badge">10</span></a>
			<div className="nav-item dropdown">
				<a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle user-action"><img src="/examples/images/avatar/2.jpg" className="avatar" alt="Avatar" /> Paula Wilson <b className="caret"></b></a>
				<div className="dropdown-menu">
					<a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
					<a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
					<a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
					<div className="dropdown-divider"></div>
					<a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>=
				</div>
			</div>
		</div>
	</div>
</nav>
    </div>
  )
}
