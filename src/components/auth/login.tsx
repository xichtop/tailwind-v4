import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Định nghĩa schema với Zod
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Email is not valid').min(1, 'Email is required'),
  age: z.number().min(18, 'Age must be greater than 18'),
});
type FormTye = z.infer<typeof formSchema>;

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormTye) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Your awesome name"
            {...register('name')}
          />
        </fieldset>
        <div className="validator-hint">
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
      </div>

      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Email</legend>
          <input
            type="text"
            className="input"
            placeholder="Your awesome email"
            {...register('email')}
          />
        </fieldset>
        <div className="validator-hint">
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Your Age</legend>
          <input
            type="number"
            className="input"
            placeholder="Your awesome age"
            {...register('age', { valueAsNumber: true })}
          />
        </fieldset>
        <div className="validator-hint">
          {errors.age && <p className="text-red-500">{errors.age.message}</p>}
        </div>
      </div>

      <button
        className="btn"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Login;
