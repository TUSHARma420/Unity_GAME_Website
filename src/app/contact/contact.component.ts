import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {}; // Define formData object to store form data

  submitForm() {
    // Retrieve the form data
    const { name, email, message } = this.formData;

    // Perform form validation
    if (!name || !email || !message) {
      // Display an error message or perform appropriate validation handling
      console.log('Please fill in all the required fields.');
      return;
    }

    // Create an object to represent the form submission payload
    const submission = {
      name,
      email,
      message
    };

    // Perform an HTTP request or any other necessary actions to submit the form data
    // For example, using Angular's HttpClient module to send a POST request to a backend API
    // Replace the API_URL with the actual endpoint you want to send the form data to
    // import { HttpClient } from '@angular/common/http';
    // import { catchError } from 'rxjs/operators';
    // import { throwError } from 'rxjs';
    // import { HttpHeaders } from '@angular/common/http';

    // constructor(private http: HttpClient) {}

    // ...

    // onSubmit() {
    //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //   this.http
    //     .post(API_URL, submission, { headers })
    //     .pipe(catchError(error => throwError(error)))
    //     .subscribe(response => {
    //       console.log('Form submission successful:', response);
    //       // Display a success message or perform any necessary actions
    //     });
    // }

    // After submitting the form, you can reset the form fields
    this.resetForm();
  }

  resetForm() {
    this.formData = {}; // Clear the form data object
    alert("✅ Your response have been recorded. Thanks for contacting us ✅");
  }
  submitted() {
    alert("✅ Your response have been recorded. Thanks for contacting us ✅");
  }
}
