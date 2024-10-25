import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"; 
import { Input } from "@/components/ui/input"; 
import { Button } from "@/components/ui/button";
import { validation } from "@/utils/validationSchema";
import { ReactNode } from "react";

interface Questionform {
  name: string;
  email: string;
  content: string;
}

const FormQ = () => {
    const form = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm<Questionform>({
        mode: "onChange",
        resolver: zodResolver(validation),
    });

    const onSubmit: SubmitHandler<Questionform> = (deta: Questionform) => {
        console.log(deta);
    };

  return (
    <div className="bg-[#f8f4e6] h-screen flex items-center">
        <div className="bg-white shadow-lg rounded-sm w-[40%] mx-auto h-[80%] p-5">
            <Form {...form}>
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center text-4xl">お問い合わせフォーム</h1>
                    
                        <FormItem className="mb-4">
                        <FormLabel htmlFor="userName">お名前</FormLabel>
                        <FormControl>
                            <Input placeholder="your name" id="name" type="text" {...register("name")} />
                        </FormControl>
                        <FormMessage>{errors.name?.message as ReactNode}</FormMessage>
                        </FormItem>
            
                        <FormItem className="mb-4">
                        <FormLabel htmlFor="email">メールアドレス</FormLabel>
                        <FormControl>
                            <Input placeholder="your email" id="email" type="email" {...register("email")} />
                        </FormControl>
                        <FormMessage>{errors.email?.message as ReactNode}</FormMessage>
                        </FormItem>
            
                        <FormItem className="mb-4">
                        <FormLabel htmlFor="content">お問い合わせ内容</FormLabel>
                        <FormControl>
                            <Input placeholder="Please your request" id="content" type="text" {...register("content")} />
                        </FormControl>
                        <FormMessage>{errors.content?.message as ReactNode}</FormMessage>
                        </FormItem>
                
                    <Button className="w-40" type="submit">送信する →</Button>

                    <p className="text-center p-5">
                        皆様からいただいた内容はすべて目を通しておりますが、<br />
                        ご意見、ご要望に対して回答をお約束するものではありません。<br />                   
                        ご了承ください。
                    </p>
                </form>
            </Form>
        </div>
    </div>
  );
};

export default FormQ;
