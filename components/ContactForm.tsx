'use client'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import strings from 'app/en.json'
import { Loader2 } from 'lucide-react'
import * as z from 'zod'

import { submitContactForm } from '@/api/contactForm'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: strings.nameMinLength })
    .max(70, { message: strings.nameMaxLength }),
  email: z.string().email({ message: strings.emailInvalid }),
  message: z
    .string()
    .min(20, { message: strings.contactMessageMinLength })
    .max(1000, { message: strings.contactMessageMaxLength }),
})

const defaultValues = {
  name: '',
  email: '',
  message: '',
}

type Props = {
  submit: typeof submitContactForm
}

const ContactForm: React.FC<Props> = ({
  submit = submitContactForm,
}: Props) => {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true)
    setError(false)
    setSuccess(false)

    try {
      const { message } = await submit(values)

      if (message === 'Success') {
        setSuccess(true)
        form.reset({ ...defaultValues })
      } else {
        setError(true)
      }
    } catch (error) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="md:w-1/2 py-4">
      <h3 className="font-bold mb-4">{strings.contact}</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{strings.name}</FormLabel>
                <FormControl>
                  <Input autoComplete="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{strings.email}</FormLabel>
                <FormControl>
                  <Input type="email" autoComplete="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your message here"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:items-center">
            {!loading && <Button type="submit">{strings.submit}</Button>}
            {loading && (
              <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {strings.sending}
              </Button>
            )}
            {success && <p>{strings.messageSent}</p>}
            {error && (
              <p className="text-red-700">{strings.somethingWentWrong}</p>
            )}
          </div>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm
