import axios from "axios";

interface SendEmailProps {
	name: string;
	email: string;
	text: string;
}

export const apiSendEmail = async (element: SendEmailProps) => {
	let rpta, error;

	try {
		rpta = await axios.post(
			`${process.env.NEXT_PUBLIC_API_URL}/portfolio/email`,
			element,
			{
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	} catch (error) {
		error = "A ocurrido un problema al enviar el correo";
	}

	return {
		rpta,
		error,
	};
};
