import { useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log("Form submitted:", data);
        alert("Thank you for your message!");
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

            <label className="block mb-2">
                Name:
                <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="w-full p-2 border rounded-md"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>

            <label className="block mb-2">
                Email:
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[^@]+@[^@]+\.[^@]+$/, message: "Invalid email format" },
                    })}
                    className="w-full p-2 border rounded-md"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>

            <label className="block mb-4">
                Message:
                <textarea
                    {...register("message", { required: "Message is required" })}
                    className="w-full p-2 border rounded-md"
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            </label>

            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                Send Message
            </button>
        </form>
    );
}
