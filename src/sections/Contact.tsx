"use client"

import { FC } from 'react';
import tjGrayScale from "@/assets/images/tj-smile-gray-scale.jpg";
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Button from '@/components/Button';
import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { eventFormSchema } from './validator';
import * as z from 'zod'
import { formDefaultValues } from '@/constants';
import Reveal from '@/animations/Reveal';
import { Textarea } from '@/components/ui/textarea';

const Contact: FC = () => {

  const initialValues = formDefaultValues

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues
  })

  const onSubmit = (values: z.infer<typeof eventFormSchema>) => { console.log(values) }

  return (
    <section className="md:grid md:grid-cols-3 md:min-h-screen bg-stone-300 mt-16 md:mt-20 lg:mt-24" id="contact">
      {/* Contact Image */}
      <div className="md:col-span-1 h-full rounded-2xl bg-cover bg-center bg-no-repeat bg-fixed">
        <Image
          src={tjGrayScale}
          alt="Tawanda Jaure Portrait Grayscale"
          className="size-full object-cover"
        />
      </div>

      {/* Contact Form */}
      <div className="md:col-span-2 w-full">
        <div className="container py-12 md:py-16">
          <div className="flex flex-col gap-10">
            <Reveal>
              <h2 className="text-4xl md:text-6xl lg:text-7xl">
                Get in touch...
              </h2>
            </Reveal>

            <Reveal>
              <div className="flex flex-col items-stretch">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-5 md:flex-row">
                      <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                {...field}
                                className="form-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                {...field}
                                className="form-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex flex-col gap-5 md:flex-row">
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormLabel>Message</FormLabel>
                            <FormControl className="textarea">
                              <Textarea
                                placeholder="Type your message..."
                                {...field}
                                className="form-input"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button
                      variant="submit"
                      type="submit"
                      className="mt-5 max-w-52"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </form>
                </Form>
              </div>
            </Reveal>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Contact