"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { SectionContainer, ViewContainer } from "@/components/layouts";
import {
  Button,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  Input
} from "@/components/ui";
import type { Volume } from "@/types";


const formSchema = z.object({
  query: z.string().refine((val) => val.trim().length > 0, {
    message: "Query is required",
  }),
});

type Response = {
  kind: string;
  totalItems: number;
  items: Volume[];
}

export default function SearchPage() {
  const [response, setResponse] = useState<Response | null>(
    null,
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });
  const { mutate, status, error } = useMutation<Response, Error, string>({
    mutationFn: async (query) => {
      const url = new URL(
        `${process.env.NEXT_PUBLIC_GOOGLE_BOOKS_API!}/volumes`,
      );
      url.searchParams.set("q", query);

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `Request Failed: ${response.status} ${response.statusText}`,
        );
      }

      return response.json();
    },
    onMutate: () => {
      toast.loading("Searching volume", { id: "volume-search" });
    },
    onError: (error) => {
      toast.error(`Failed to search volume ${error.message}`, {
        id: "volume-search",
      });
    },
    onSuccess: (data) => {
      toast.success("Volume search successfully", { id: "volume-search" });
      setResponse(data);
      form.reset();
    },
  });

  const onSubmit = ({ query }: z.infer<typeof formSchema>): void => {
    mutate(query);
  };

  console.log(response);

  return (
    <>
      <SectionContainer>
        <ViewContainer className="max-w-7xl">
          <form
            id="volume-search"
            className="flex gap-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FieldGroup>
              <Controller
                name="query"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel
                      className="sr-only"
                      htmlFor="volume-search-form-query"
                    >
                      Query
                    </FieldLabel>
                    <Input
                      {...field}
                      id="volume-search-form-query"
                      aria-invalid={fieldState.invalid}
                      placeholder="e.g. The Hobbit"
                      autoComplete="search"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
            <div className="space-y-2">
              <Button disabled={status === "pending"}>
                {status === "pending" ? "Searching" : "Search"}
              </Button>
              {error && (
                <p className="text-destructive text-sm">An error occured</p>
              )}
            </div>
          </form>
        </ViewContainer>
      </SectionContainer>
      <SectionContainer>
        <ViewContainer>

        </ViewContainer>
      </SectionContainer>
    </>
  );
}
