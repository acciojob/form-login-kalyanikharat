function getFormvalue() {
    //Write your code here
	event.preventDefault();

	const form = document.getElementById("form1");

	const firstname = form.elements["fname"].value.trim();
	const lastname = form.elements["lname"].value.trim();

	const fullname = `${firstname} ${lastname}`;
	alert(fullname);

}
