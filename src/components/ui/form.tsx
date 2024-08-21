"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../input";
import { Button } from "../button";

import { IoMdSend } from "react-icons/io";
import { TextArea } from "../textarea";
import { apiSendEmail } from "@/service/contact.service";
import { useState } from "react";

export const Form = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { values, handleChange, handleBlur, errors, touched, handleSubmit } =
		useFormik({
			initialValues: {
				name: "",
				email: "",
				message: "",
			},
			validationSchema: Yup.object().shape({
				name: Yup.string().required("El campo es requerido"),
				email: Yup.string()
					.required("El campo es requerido")
					.email("No es un correo válido"),
				message: Yup.string().required("El campo es requerido"),
			}),
			onSubmit: () => {
				handleSend();
			},
		});

	const handleSend = async () => {
		try {
			setLoading(true);
			let parameter = {
				name: values.name,
				email: values.email,
				text: values.message,
			};

			const { rpta, error } = await apiSendEmail(parameter);

			if (error) console.log(error);

			if (rpta?.status === 200) {
				console.log("Se envio correctamente el correo");
			}
		} catch (error) {
			console.log("Hay problemas en los codigos");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-white rounded-lg px-[24px] py-[30px] w-[430px]">
			<Input
				name="name"
				value={values.name}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.name}
				touched={touched.name}
				placeholder="Nombre"
				className="mb-[10px]"
			/>
			<Input
				name="email"
				value={values.email}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.email}
				touched={touched.email}
				placeholder="Correo eléctronico"
				className="mb-[10px]"
			/>
			<TextArea
				name="message"
				value={values.message}
				onChange={handleChange}
				onBlur={handleBlur}
				error={errors.message}
				touched={touched.message}
				placeholder="Mensaje"
				className="mb-[10px]"
			/>

			<Button
				onClick={() => handleSubmit()}
				text={loading ? "Enviando ..." : "Enviar"}
				size="sm"
				disabled={loading}
				icon={<IoMdSend className="" />}
			/>
		</div>
	);
};
