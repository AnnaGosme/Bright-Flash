import Header from "./Header/Header";
import Footer from "../Footer";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.css";

export default function Contact() {
	const [state, handleSubmit] = useForm("1661932041131785320");
	if (state.succeeded) {
		return <p>"Thanks for writing us!"</p>;
	}

	return (
		<div className="form-page">
			<div className="image-container">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1619095195/Bright%20Flash/Contact-cropped_eg41xz.jpg"
					className="contact-image"
				/>
			</div>
			<></>
			<div className="form-container">
				<img
					src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618995903/Bright%20Flash/Contact-us_wazpuz.png"
					className="contact-caption"
				/>
				<div className="text-container">
					<p className="contact-us-call">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					</p>
				</div>
				<form
					className="form-box"
					onSubmit={handleSubmit}
					action="https://formspree.io/f/1661932041131785320"
					method="POST"
				>
					<>
						<label htmlFor="name">Name</label>
						<input type="text" id="name" name="name" placeholder="Your name" />
					</>
					<>
						<label for="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							placeholder="Your email"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</>
					<>
						<label for="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Write something.."
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</>
				</form>
				<button
					className="button"
					id="submit"
					type="button"
					disabled={state.submitting}
				>
					Submit
				</button>
			</div>
		</div>
	);
}
