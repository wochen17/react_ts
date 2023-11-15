import * as z from "zod";

export const SignupValidationSchema = z.object({
  name: z.string().min(2, {
    message: "too short",
  }),
  username: z.string().max(20, {
    message: "too long",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: 'Too Short'
  })
});
